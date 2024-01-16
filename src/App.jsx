import Buscador from './components/Buscador'
import { useState } from 'react'
function App() {

    const [search, setSearch] = useState("")
    const handleSearch = (e) =>{
        setSearch(e.target.value)
    }
  const [api, setApi] = useState([])
  const [resultados,setResultados]=useState([])
  
  return (
    <div className='layout'>
      <h1 className='layout__h1'>Personajes de los Simpson</h1>
      <Buscador api={api} setApi={setApi} setResultados={setResultados} resultados={resultados} search={search} setSearch={setSearch} handleSearch={handleSearch} ></Buscador>
      
      
      
    </div>
  )
}

export default App
