import express, {Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@topcode/common';
import { Store } from '../models/store';

/*import { StoreCreatedPublisher } from '../events/publishers/store-created-publisher';
import { natsWrapper } from '../nats-wrapper'; */

const router = express.Router();

//router.post('/api/stores'), requireAuth, [body('type').not().isEmpty().withMessage('Type is required')], validateRequest, 
router.post('/api/stores', async (req:Request, res:Response) => {
    
    const { name, type, description, visibility, userId } = req.body;
    
    const store = await Store.create({
        name,
        description,
        type,
        visibility,
        userId: userId //req.currentUser!.id //Ao correr o "currentUser" middleware antes da rota, fico com acesso ao currentUser
      });

    res.status(201).send(store);
});

export { router as createStoreRouter };