import express from 'express';
import 'express-async-errors';
import cors from "cors";
import { json } from 'body-parser';
import { errorHandler, currentUser } from '@topcode/common'; //./middlewares/error-handler
import { NotFoundError } from '@topcode/common'; //./errors/not-found-error
import { createStoreRouter } from './routes/new';
import { showStoreRouter } from './routes/show';
import { listStoreRouter } from './routes/list';
import { updateStoreRouter } from './routes/update';



const app = express();
app.set('trust proxy', true);
app.use(cors());
app.use(json());

app.use(currentUser);
app.use(createStoreRouter);
app.use(showStoreRouter);
app.use(listStoreRouter);
app.use(updateStoreRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
