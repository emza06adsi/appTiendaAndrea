// import Autenticar from 'Autenticar'
// alert(465)
// let $btningresarDatos=document.getElementById('btningresarDatos')
// $btningresarDatos.addEventListener('click',ingresar)
let autenticar = new Autenticar();

function ingresar()
{
    console.log(autenticar)
    console.log(autenticar.ingresarUsuario('esteban','estebanmezabetancur@gmail.com','Ñ789456'))
//     let $nombre =document.getElementById('nombre').value
//     let $email=document.getElementById('email').value
//     let $password=document.getElementById('password').value
//     alert($nombre)
// autenticar.ingresarUsuario($nombre,$email,$password)
}

