import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequest,
  NotFoundError,
  requireAuth,
  NotAuthorizedError,
} from '@topcode/common';
import { Store } from '../models/store';

const router = express.Router();

router.put('/api/stores/:id',
  //requireAuth,
  [
    body('name').not().isEmpty().withMessage('Name is required'),
    body('type').not().isEmpty().withMessage('Type is required'),
    body('type').not().isIn(["JUDICIAL", "REAL_ESTATE", "AUCTION_HOUSE", "PRIVATE"]).withMessage('Type is not valid ')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const store = await Store.findByPk(req.params.id);

    if (!store) {
      throw new NotFoundError();
    }

    /*if (store.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }*/

    store.set(req.body);

    await store.save();
    
    res.send(store);
  }
);

export { router as updateStoreRouter };
