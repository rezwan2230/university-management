import express, { Application } from 'express';
const app: Application = express();
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

//parsar
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1', router);

//! Not Found routes
app.use(notFound);

//! Global error handler
app.use(globalErrorHandler);

export default app;
