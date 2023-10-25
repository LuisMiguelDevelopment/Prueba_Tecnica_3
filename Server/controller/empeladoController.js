import db from '../config/db.js';

export function agregarEmpleado(req, res) {
    const empleadoData = req.body;
    
    const sql = 'INSERT INTO empleado (nombre, email, sexo, area_id, boletin, descripcion) VALUES (?, ?, ?, ?, ?, ?)';

    db.query(sql, [empleadoData.nombre, empleadoData.email, empleadoData.sexo, empleadoData.area_id, empleadoData.boletin, empleadoData.descripcion], (error) => {
        if (error) {
            console.error('Error al crear empleado: ', error);
            return res.status(500).json({ error: 'Error al crear el empleado' });
        }
        res.status(201).json({ message: 'Empleado creado' });
    });
}

