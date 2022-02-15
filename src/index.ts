import dotenv from 'dotenv';
dotenv.config();

import { app } from './app';
import { dbConnection } from './bdConnection';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  if (!process.env.BD_URI) {
    throw new Error('BD_URI must be defined');
  }

  /* Sequelize ================== */

  await dbConnection.connect();

  /* // ================== */

  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}!`);
  });
};

start();
