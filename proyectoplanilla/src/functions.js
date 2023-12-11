import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export function show_alerta(mensaje,ícono,foco)  {
    onfocus(foco);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title:mensaje,
        icon:ícono,
    })
}

function onfocus(foco){
    if(foco !== ''){
        document.getElementById(foco).focus();
    }
}