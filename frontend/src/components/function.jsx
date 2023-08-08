import Swal from "sweetalert2";
import storage from "../Storage/storage";
import axios from "axios";
import { redirect } from "react-router-dom";

export const show_alert =(msj, icon) =>{
    Swal.fire({title:msj, icon:icon, buttonsStyling:tru});
}

export const sendRequest = async(method, params,url,redir='',token=true)=>{
    if(token){
        const authToken = storage.get('authToken');
        axios.defaults.header.common(Authorization) = 'Bearer '+authToken;
    }
    let res
    await axios ({method:method, url:url, data:params}).them(
        response =>{
            response.data,
            (method !='GET') ? show_alert(response.data.message,'success'):'',
            setTimeout(()=>
                (redirect !== '') ? window.location.href= redir : '', 2000)
        }).catch((errors)=>{
            let desc='';
            res= errors.response.data,
            errors.response.data.errors.map ((e) => {desc = desc + ''+e})
            show_alert(desc,'error')
        })

}

export const confirmation = async(name, url, redir)=>{
    const alert = Swal.mixin({buttonsStyling:true})
    
}

export default show_alert;