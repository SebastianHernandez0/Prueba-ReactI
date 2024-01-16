import { useEffect, useState } from "react";
export default function MiApi({api,setApi,resultados,search,setSearch,handleSearch}) {

    

    const getApi = async () => {
        const url = `https://apisimpsons.fly.dev/api/personajes?limit=650&page=1`
        const response = await fetch(url)
        const data = await response.json()
        setApi(data.docs)
    }
    useEffect(() => {
        getApi()
    }, [])
    
    
    
    return (    
        <>
        
        <div className="layout__main">
        
            <div className="main__cards">
            
                {resultados.map((personaje) => (
                    <div className="cards__card" key={personaje._id}>
                        <h2>{personaje.Nombre}</h2>
                        <img src={personaje.Imagen} />
                        <p>Estado: {personaje.Estado}</p>
                        <p>Ocupación: {personaje.Ocupacion}</p>
                        
                    </div>
                ))}
            </div>
            
        </div>    
        </>

        
    )
}