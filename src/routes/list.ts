import express, { Request, Response } from 'express';
import { Store } from '../models/store';
import { getAllQueryParams } from '@topcode/common/build/utils/routes';

const router = express.Router();

router.get('/api/stores', async (req: Request, res: Response) => {
  //const stores = await Store.find({});
  const { limit, offset, userId } = req.query;
  
  let allQueryParams = getAllQueryParams(req.query);

  let stores = await Store.findAndCountAll(
    {offset:offset, limit:limit, where:allQueryParams, order:[['id','ASC']]}
  )
  .catch((err:any) => console.log(err));
  
  res.send(stores);
});

export { router as listStoreRouter };
