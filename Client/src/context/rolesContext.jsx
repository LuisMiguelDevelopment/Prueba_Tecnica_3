import { createContext, useContext, useState } from 'react';
import { obtenerRolesRequest} from '../api/roles'

const RolesContext = createContext();

export const useRoles = () => {
    const context = useContext(RolesContext);
    if (!context) {
        throw new Error('useEmpleados must be used within a ProductoProvider');
    }
    return context;
};

export function RolesProvider({ children }) {
    const [roles, setRoles] = useState([]);

    
    const obtenerRoles = async () => {
        try {
            const res = await obtenerRolesRequest();
            setRoles(res.data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <RolesContext.Provider value={{
            roles,  
            obtenerRoles
        }}>
            {children}
        </RolesContext.Provider>
    );
}
