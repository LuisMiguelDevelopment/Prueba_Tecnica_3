import {createContext , useContext , useState} from 'react';
import {obtenerAreasRequest} from '../api/areas';

const AreasContext = createContext();

export const useAreas = ()=>{
    const context = useContext(AreasContext);
    if(!context){
        throw new Error('useAreas must be used within a AreasProvider');
    }
    return context;
};

export function AreasProvider({children}){
    const [areas , setAreas] = useState([]);

    const obtenerAreas = async () => {
        try {
            const res = await obtenerAreasRequest();
            const areasConId = res.data.map((area) => ({ id: area.id, nombre: area.nombre }));
            setAreas(areasConId);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    


    return(
        <AreasContext.Provider value={{
            areas,
            obtenerAreas
        }}>
        
        {children}
        </AreasContext.Provider>
    )
}