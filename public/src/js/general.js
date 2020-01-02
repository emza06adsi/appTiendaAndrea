<<<<<<< HEAD
// const firebaseConfig = {
//     apiKey: "AIzaSyAaoUzsLbfLPmPjcfSmD_iR0bhRM-axFsY",
//     authDomain: "tiendaandrea-2a3b0.firebaseapp.com",
//     databaseURL: "https://tiendaandrea-2a3b0.firebaseio.com",
//     projectId: "tiendaandrea-2a3b0",
//     storageBucket: "tiendaandrea-2a3b0.appspot.com",
//     messagingSenderId: "881013789231",
//     appId: "1:881013789231:web:27bdaaf82088c3d9446cda",
// mentId: "G-NCFTQREQQH"
//   };
// // configuracion de firebase
  

 firebase.initializeApp(firebaseConfig);
//inicio de firebase


// esta clase para sacar el ingreso de usuarios

//  class Autenticar{

// metodo que crea el usuario

//  function  ingresarUsuario(nombre,email,password) {
  
//       firebase.auth().createUserWithEmailAndPassword(email, password)
//           .then(function (result) {
      
//               result.user.updateProfile({
//                   displayName:nombre   
//               })
//               let configuracion={url:'http://localhost:5500/public/'}
//               result.user.sendEmailVerification(configuracion)
//                                   .catch(function (error) {
//                                     console.error(error)
//                                       alert(error.message,4000)
//                                   })
//                                   firebase.auth().signOut()
//                alert(`vienvenido ${nombre} reaiza el proceso de verificar`,4000)
              
//           })
//           .catch(function (error) {
      
//           });

// }
// // }

// // formulario de ingreso

// function usuarioIng(){
//     // console.log(456)
// let $email=document.getElementById('correoI').value;
// let $password=document.getElementById('contraseñaI').value;
// autenticarUsuario($email,$password);
// }
// // class Autenticar{
// function autenticarUsuario(email,password){
// console.log("ingreso1")
//     firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(function (response) {
//         console.log("ingreso2")
//         if(response.user.sendEmailVerification){
//             location.href="../../public/ingresar.html"
            
//         }
//         else{
//             firebase.auth().signOut() 
//             alert(`el correo ${email} no fue verificado`,400)
//             console.log("ingreso3")
//         }
//     })
//     .catch(function (error) {

//         console.log(error)
//     });
// }


// // }

// // // import Autenticar from 'Autenticar'
// // // alert(465)
// // // let $btningresarDatos=document.getElementById('btningresarDatos')
// // // $btningresarDatos.addEventListener('click',ingresar)
// // let autenticar = new Autenticar();
// // funcion de ingreso llamada
// function ingresar()
// {
//     let $nombre =document.getElementById('nombre').value
//     let $email=document.getElementById('email').value
//     let $password=document.getElementById('password').value

//     ingresarUsuario($nombre,$email,$password)
// document.getElementById('nombre').value="";
// document.getElementById('email').value="";
// document.getElementById('password').value="";

//     //     alert($nombre)
// // autenticar.ingresarUsuario($nombre,$email,$password)
// }


// // ingreso con google
// function authGoogle(params) {
//  console.log(1)
//     const provider=   new firebase.auth.GoogleAuthProvider();
// firebase.auth().signInWithPopup(provider).then(function (result) {
//     console.log(3)
//     // let    img=result.user.protoURL;
//     // let nombre=result.user.displayName;
//     // fotoImg(img);
//         location.href="../../public/ingresar.html"
//     })
//     .catch(function (error) {
//         console.log(4)
//         alert(error)
//     });
// }
=======
const firebaseConfig = {
    apiKey: "AIzaSyAaoUzsLbfLPmPjcfSmD_iR0bhRM-axFsY",
    authDomain: "tiendaandrea-2a3b0.firebaseapp.com",
    databaseURL: "https://tiendaandrea-2a3b0.firebaseio.com",
    projectId: "tiendaandrea-2a3b0",
    storageBucket: "tiendaandrea-2a3b0.appspot.com",
    messagingSenderId: "881013789231",
    appId: "1:881013789231:web:27bdaaf82088c3d9446cda",
mentId: "G-NCFTQREQQH"
  };

 firebase.initializeApp(firebaseConfig);
>>>>>>> c574537351bd3c6e1e42a75caff08bb3cb6bd6c7
