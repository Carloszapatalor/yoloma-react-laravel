import Swal from "sweetalert2";
import storage from "../Storage/storage";
import axios from 'axios';

window.axios = axios

export const show_alert =(msj, icon) =>{
    Swal.fire({title:msj, icon:icon, buttonsStyling:true});
}

export const sendRequest = async(method, params,url,redir='',token=true)=>{
    if(token){
        const authToken = storage.get('authToken');
         axios.defaults.headers.common['Authorization'] = 'Bearer '+authToken;
    }
    let res
    await axios({ method: method, url: url, data: params })
    .then(response => {
        res = response.data;
        if (method !== 'GET') {
            show_alert(response.data.message, 'success');
        }
        setTimeout(() => {
            if (redir !== '') {
                window.location.href = redir;
            }
        }, 2000)
        }).catch(errors => {
            let desc = '';
            if (errors.response && errors.response.data && errors.response.data.errors) {
                desc = errors.response.data.errors.map(e => ' ' + e).join('')
                show_alert(desc,'error')
            }
        })
    return res;

}

export const confirmation = async(name, url, redir)=>{
    const alert = Swal.mixin({buttonsStyling:true});
    alert.fire({
        title: 'Estas seguro de eliminar ' +name+'?',
        icon:'question', showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',
        cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
    }).then ((result) =>{
        if(result.isConfirmed){
            sendRequest('DELETE',{}, url,redir);
        }

    });
    
}

export default show_alert;