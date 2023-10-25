import React, { useEffect, useState } from 'react';
import { useEmpleados } from '../context/empleadoContext';
import { useRoles } from '../context/rolesContext';
import { useAreas } from '../context/areasContext';
import { useForm } from 'react-hook-form';

const Empleados = () => {
  const { empleados, obtenerEmpleados, agregarEmpleado } = useEmpleados();
  const { roles, obtenerRoles } = useRoles();
  const { areas, obtenerAreas } = useAreas();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    obtenerEmpleados();
    obtenerRoles();
    obtenerAreas();
  }, []);

  const [rolesSeleccionadas, setRolesSeleccionadas] = useState([]);

  const handleRolChange = (rolesId) => {
    if (rolesSeleccionadas.includes(rolesId)) {
      setRolesSeleccionadas(rolesSeleccionadas.filter((id) => id !== rolesId));
    } else {
      setRolesSeleccionadas([...rolesSeleccionadas, rolesId]);
    }
  };

  const onSubmit = handleSubmit((data) => {
    const empleadoData = {
      nombre: data.nombre,
      email: data.email,
      sexo: data.sexo,
      area_id: data.area_id, // Asegúrate de que el nombre del campo coincida con la API
      descripcion: data.descripcion,
      roles: rolesSeleccionadas,
    };
    agregarEmpleado(empleadoData);
  });

  return (
    <div>
      <form action="" className="form" onSubmit={onSubmit}>
        <label className='form__label' htmlFor="">Nombre Completo</label>
        <input type="text" name='nombre' {...register("nombre")} />
        <label className='form__label' htmlFor="">Correo Electrónico</label>
        <input type="text" {...register("email")} />
        <label htmlFor="">Sexo</label>
        <div className="form__sexo">
          <label htmlFor="masculino">Masculino</label>
          <input type="radio" {...register("sexo")} value="M" id="masculino" />
          <label htmlFor="femenino">Femenino</label>
          <input type="radio" {...register("sexo")} value="F" id="femenino" />
        </div>
        <select name="" id="" {...register("area_id")}>
          {areas.map((area) => (
            <option key={area.id} value={area.id}>
              {area.nombre}
            </option>
          ))}
        </select>
        <textarea name="" id="" cols="30" rows="10" placeholder='Descripción de la experiencia del empleado'  {...register("descripcion")}></textarea>
        <div className="form__areas">
          {roles.map((role) => (
            <div key={role.id}>
              <label>
                <input
                  type="checkbox"
                  checked={rolesSeleccionadas.includes(role.id)}
                  onChange={() => handleRolChange(role.id)}
                />
                {role.nombre}
              </label>
              <input
                type="hidden"
                name="roles"
                value={role.id}
                {...register(`boletin[${role.id}]`)} // Asegúrate de usar el valor correcto en el nombre del registro
              />
            </div>
          ))}
        </div>
        <button>Guardar</button>
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
