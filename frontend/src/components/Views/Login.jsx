import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom';
import { sendRequest } from '../function';
import DivInput from '../DivInput';
import storage from '../../Storage/storage';
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const got = useNavigate();
  const csrf = async () =>{
    await axios.get('/sanctum/csrf-cookie')
  }

  const login = async (e) => {
    e.preventDefault();
    await csrf();
    const form ={email:email, password:password};
    const res= await sendRequest ('POST', form, 'api/auth/login', '', false);
    if (res === true){
      storage.set('authToken', res.token);
      storage.set('authUser', res.data);
      got('/');
    }
  }
  return (
    <div className='container-fluid'>
      <div className='row mt-5'>
        <div className='col-md-4 offset-md-4'>
          <div className='card border border-primary'>
            <div className='card-header bg-primary border border-primary text-white'>
              Identificación de Usuario
            </div>
            <div className='card-body '>

              <form onSubmit={login}>
                <DivInput type='email' icon='fa fa-at' value={email}
                className='form-control' placeholder='Correo' required='required' handleChange = { (e) => setEmail(e.target.value)} />

                <DivInput type='password' icon='fa fa-key' value={password}
                className='form-control' placeholder='Correo' required='required' handleChange = { (e) => setPassword(e.target.value)} />
                <div className='d-grid col-10 mx-auto'>
                  <button className='btn btn-primary'>
                    <i className='fa-solid fa-door-open'></i> Ingresar
                  </button>
                </div>
              </form>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Login