import React,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const endpoint = 'http://localhost:8000/api'
const MostrarTerapeutas = () =>{
    //Se usaran hooks -> es una funcion especial que permite conectar caracteristicas especiales a react

    const [terapeutas, setTerapeuta] = useState([])
    useEffect ( ()=>{
        getAllTerapeutas()
    }, [])
   
    const getAllTerapeutas = async () => {
       const  response = await axios.get(`${endpoint}/terapeutas`)
       setTerapeuta(response.data)

    }

    const deleteTerapeutas = async (id) =>{
        await axios.delete (`${endpoint}/terapeuta/${id}`)
        getAllTerapeutas()

    }


    return(

        <div>
           
            <div className="d-grid grap-2">
              <Link to={`/terapeuta/crear`} className="btn btn-success btn-lg mt-2 mb-2 text-white">Crear</Link>
            </div>

            <table className="table table-striped">
                <thead className="bg-primary text-white">
                   <tr>

                    <th>Matricula</th>
                    <th>Nombre</th>
                    <th>Apellido Paterno</th>
                    <th>Apellido Materno</th>
                    <th>Especialidad</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Opciones</th>
                    
                    
                   </tr>

                </thead>
                <tbody>
                    { terapeutas.map ( (terapeuta) => (

                        <tr key={terapeuta.id}>
                            <td> {terapeuta.matricula} </td>
                            <td> {terapeuta.nombre} </td>
                            <td> {terapeuta.apellido_paterno} </td>
                            <td> {terapeuta.apellido_materno} </td>
                            <td> {terapeuta.especialidad} </td>
                            <td> {terapeuta.correo} </td>
                            <td> {terapeuta.telefono} </td>
                            

                            <td>
                                <Link to={`editar/${terapeuta.id}`} className="btn btn-warning">Editar</Link>
                                <button onClick={()=> deleteTerapeutas(terapeuta.id)} className="btn btn-danger">eliminar</button>
                            </td>
                        </tr>

                    ))}
                </tbody>                 
            </table>
        </div>
    )
}

export default MostrarTerapeutas