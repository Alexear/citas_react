import { useState, useEffect } from "react";
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListaPacientes from "./components/ListadoPacientes"

function App() {
  const [pacientes, setPacientes]=useState(JSON.parse(localStorage.getItem('pacientes'))?? [])
  const [paciente,setPaciente]=useState({})

  useEffect(() =>{
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  },[pacientes]);

  const eliminarPaciente= (id)=>{
    const pacientesActualizados= pacientes.filter(paciente => paciente.id !==id)

    setPacientes(pacientesActualizados)

  }

  return (
    <div className="container mt-20">
    <Header />

    <div className="mt-12 md:flex ml-2 mr-2">
      <Formulario 
      pacientes={pacientes}
      setPacientes={ setPacientes }
      paciente={paciente}
      setPaciente={setPaciente}
      />
      <ListaPacientes
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminarPaciente={eliminarPaciente}
      />
    </div>

    </div>
  )
}

export default App
