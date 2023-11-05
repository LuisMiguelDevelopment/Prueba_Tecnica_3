import React, { useEffect, useState } from 'react';
import { useEmpleados } from '../context/empleadoContext';
import { useRoles } from '../context/rolesContext';
import { useAreas } from '../context/areasContext';
import { useForm } from 'react-hook-form';
import {AiFillEdit , AiFillDelete} from 'react-icons/ai';
import './Empleados.css';

const Empleados = () => {
  const { empleados, obtenerEmpleados, agregarEmpleado } = useEmpleados();
  const { roles, obtenerRoles } = useRoles();
  const { areas, obtenerAreas } = useAreas();
  const { register, handleSubmit } = useForm();
  const [quiereBoletin, setQuiereBoletin] = useState(false);

  useEffect(() => {
    obtenerEmpleados();
    obtenerRoles();
    obtenerAreas();
  }, []);


  const handleQuiereBoletinChange = (event) => {
    setQuiereBoletin(event.target.checked);
  };

  const onSubmit = handleSubmit((data) => {
    const empleadoData = {
      nombre: data.nombre,
      email: data.email,
      sexo: data.sexo,
      area_id: data.area_id,
      descripcion: data.descripcion,
      boletin: quiereBoletin ? 1 : 0,
    };
    agregarEmpleado(empleadoData);
  });

  return (
    <div className='general'>

      <div className="general__form">
        <div className="info">
          <span>los campos con * son obligatorios</span>
        </div>

        <form className="form" action="" onSubmit={onSubmit}>

          <div className="form__items">
            <label className='form__label' htmlFor="">Nombre Completo *</label>
            <input className='form__input' type="text" name='nombre' {...register("nombre")} />
          </div>
          <div className="form__items">
            <label className='form__label' htmlFor="">Correo Electrónico *</label>
            <input className='form__input' type="text" {...register("email")} />
          </div>
          <div className="sexo__general">
            <label htmlFor="">Sexo *</label>
            <div className="form__sexo">
              <div className="sexo">
                <label className='sexo' htmlFor="masculino">Masculino</label>
                <input type="radio" {...register("sexo")} value="M" id="masculino" />
              </div>
              <div className="sexo">
                <label className="sexo" htmlFor="femenino">Femenino</label>
                <input type="radio" {...register("sexo")} value="F" id="femenino" />
              </div>
            </div>
          </div>
          <select className='select' name="" id="" {...register("area_id")}>
            {areas.map((area) => (
              <option key={area.id} value={area.id}>
                {area.nombre}
              </option>
            ))}
          </select>
          <textarea className='textarea' name="" id="" cols="30" rows="10" placeholder='Descripción de la experiencia del empleado'  {...register("descripcion")}></textarea>

          <div className="form__areas">
            <div className="boletin">
              <input type="checkbox" onChange={handleQuiereBoletinChange} />
              <label htmlFor="">Quiere recibir el boletín?</label>
            </div>
            {roles.map((role) => (
              <div className='roles' key={role.id}>
                <label>
                  <input type="checkbox" />
                  {role.nombre}
                </label>
                <input
                  type="hidden"
                  name="roles"
                />
              </div>
            ))}
          </div>
          <button className='button'>Guardar</button>
        </form>
      </div>

      {/* {empleados.map((empleado) => (
        <table className="" key={empleado.id}>
          <h1>{empleado.nombre}</h1>
        </table>
      ))} */}

      <table>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Sexo</th>
          <th>Area</th>
          <th>Boletin</th>
        </tr>
        {empleados.map((empleado , index) => (
          <tr key={empleado.id} className={index % 2 === 0 ? 'fila-par' : 'fila-impar'}>
            <td>{empleado.nombre}</td>
            <td>{empleado.email}</td>
            <td>{empleado.sexo}</td>
            <td>{empleado.area}</td>
            <td>{empleado.boletin}</td>
            <td><AiFillEdit/></td>
            <td><AiFillDelete/></td>
          </tr>
            ))}
      </table>

    </div>
  );
}

export default Empleados;
