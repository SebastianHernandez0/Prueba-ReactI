import {useState } from "react";
import MiApi from "./MiApi";
export default function Buscador({api,setApi,resultados,search,setSearch,handleSearch}){

    
    
        if(search===""){
            resultados=api
    
        }else{
            resultados=api.filter((personaje)=>
            personaje.Nombre.toLowerCase().includes(search.toLowerCase()))
        }
    
            const listaOrdenada= [...resultados].sort((a,b)=>a.Nombre.localeCompare(b.Nombre))
            
            
        
    return(
    <>
      <input type="text" placeholder="Buscar por Nombre" value={search} onChange={handleSearch}></input> 
      <MiApi api={api} setApi={setApi} resultados={listaOrdenada} search={search} setSearch={setSearch} handleSearch={handleSearch}></MiApi>
      </>
    )
}