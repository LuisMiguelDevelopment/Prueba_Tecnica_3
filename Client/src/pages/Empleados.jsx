import { useEffect } from 'react'
import { useEmpleados } from '../context/empleadoContext'

const Empleados = () => {
    const { empleados, obtenerEmpleados } = useEmpleados();

    useEffect(() => {
        obtenerEmpleados();
    }, []);

    return (
        <div>

            <form action="" className="form">
                <label className='form__label' htmlFor="">Nombre Completo</label>
                <input type="text" />
                <label className='form__label' htmlFor="">Correo Electronico</label>
                <input type="text" />
                <label htmlFor="">Sexo</label>
                <div className="form__sexo">
                    <label htmlFor="">Masculino</label>
                    <input type="radio" />
                    <label htmlFor="">Femenino</label>
                    <input type="radio" />
                </div>
                <select name="" id="">
                    <option value="">mmgvo</option>
                    <option value="">mmgv2o</option>
                </select>
                <textarea name="" id="" cols="30" rows="10" placeholder='Descripcion de la experencia del empleado'></textarea>
                
            </form>


            {empleados.map((empleado) => (
                <div className="" key={empleado.nombre}>
                    <h1>{empleado.nombre}</h1>
                    
                </div>
            ))}
        </div>
    );
}

export default Empleados;
