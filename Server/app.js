import express from 'express';
import empleadosRoute from './routes/empleadoRoute.js'
import cors from 'cors';
const app = express();



app.use(express.json());
app.use('/api',empleadosRoute)



export default app;