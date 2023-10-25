import express from 'express';
import empleadosRoute from './routes/empleadoRoute.js'
import rolesRoute from './routes/rolesRoutes.js'
import cors from 'cors';
const app = express();



app.use(express.json());
app.use('/api',empleadosRoute)
app.use('/api',rolesRoute)

app.use(cors({
    origin:'http://localhost:5173/',
    credentials:true
}))



export default app;