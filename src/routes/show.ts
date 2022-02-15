import express, { Request, Response } from 'express';
import { NotFoundError } from '@topcode/common';
import { Store } from '../models/store';

const router = express.Router();

router.get('/api/stores/:id', async (req: Request, res: Response) => {
  const store = await Store.findByPk(req.params.id);
  
  if (!store) {
    throw new NotFoundError();
  }

  res.send(store);
});

export { router as showStoreRouter };
