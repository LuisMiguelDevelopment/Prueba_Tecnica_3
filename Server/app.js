import express from 'express';
import empleadosRoute from './routes/empleadoRoute.js'
import rolesRoute from './routes/rolesRoutes.js'
import areasRoutes from './routes/AreasRoutes.js'
import cors from 'cors';
const app = express();



app.use(express.json());


app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use('/api',empleadosRoute)
app.use('/api',rolesRoute)
app.use('/api',areasRoutes)


export default app;