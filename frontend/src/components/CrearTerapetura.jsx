import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const endpoint = 'http://localhost:8000/api/terapeuta'


function CrearTerapetura() {

    const [nombre, setNombre] = useState('')
    const [apellido_paterno, setApelldio_Paterno] = useState('')
    const [apellido_materno, setApellido_Materno] = useState('')
    const [especialidad, setEspecialidad] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [matricula, setMatricula] = useState('')


    const navegar = useNavigate()

    const store = async (e) =>{
        e.preventDefault ()
        await axios.post (endpoint,{
            nombre: nombre, 
            apellido_paterno: apellido_paterno, 
            apellido_materno: apellido_materno, 
            especialidad: especialidad, 
            correo: correo, 
            telefono: telefono, 
            matricula: matricula})
        navegar('/')
    }
  return (
    <div>
        <h3>Registrar un Terapeuta</h3>
        <form onSubmit={store}>
  
            <div className='mb-3'>
                <label htmlFor="" className='form-label'>Nombre</label>
                <input 
                value={nombre}
                onChange={ (e) => setNombre(e.target.value)}
                type="text"
                className='form-control' />
            </div>

            <div className='mb-3'>
                <label htmlFor="" className='form-label'>Apellido Paterno</label>
                <input 
                value={apellido_paterno}
                onChange={ (e) => setApelldio_Paterno(e.target.value)}
                type="text"
                className='form-control' />

            </div>

            <div className='mb-3'>
                <label htmlFor="" className='form-label'>Apellido Materno</label>
                <input 
                value={apellido_materno}
                onChange={ (e) => setApellido_Materno(e.target.value)}
                type="text"
                className='form-control' />

            </div>

            <div className='mb-3'>
                <label htmlFor="" className='form-label'>Especialidad</label>
                <input 
                value={especialidad}
                onChange={ (e) => setEspecialidad(e.target.value)}
                type="text"
                className='form-control' />

            </div>

            <div className='mb-3'>
                <label htmlFor="" className='form-label'>Correo</label>
                <input 
                value={correo}
                onChange={ (e) => setCorreo(e.target.value)}
                type="text"
                className='form-control' />
                

            </div>

            <div className='mb-3'>
                <label htmlFor="" className='form-label'>Telefono</label>
                <input 
                value={telefono}
                onChange={ (e) => setTelefono(e.target.value)}
                type="phone"
                className='form-control' />

            </div>

            <div className='mb-3'>
                <label htmlFor="" className='form-label'>Matricula</label>
                <input 
                value={matricula}
                onChange={ (e) => setMatricula(e.target.value)}
                type="text"
                className='form-control' />
            </div>

            <button type='submit' className='btn btn-primary'>Registrar</button>
            

        </form>


    </div>
  )
}


export default CrearTerapetura