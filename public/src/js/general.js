


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

  console.log

 firebase.initializeApp(firebaseConfig);


//  class Autenticar{

 function  ingresarUsuario(nombre,email,password) {
  
      firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(function (result) {
      
              result.user.updateProfile({
                  displayName:nombre   
              })
              let configuracion={url:'https://tiendaandrea-2a3b0.firebaseapp.com/'}
              result.user.sendEmailVerification(configuracion)
                                  .catch(function (error) {
                                    console.error(error)
                                      alert(error.message,4000)
                                  })
                                  firebase.auth().signOut()
               alert(`vienvenido ${nombre} reaiza el proceso de verificar`,4000)
              
          })
          .catch(function (error) {
      
          });

}
// }

function usuarioIng(){
    // alert(564)
    // console.log(456)
let $email=document.getElementById('correoI').value;
let $password=document.getElementById('contraseñaI').value;
autenticarUsuario($email,$password);
}
// class Autenticar{
function autenticarUsuario(email,password){
firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (response) {
        if(response.user.sendEmailVerification){
            users=`
            <div class="user">
                <p>
                    <img src="https://www.softzone.es/app/uploads-softzone.es/2017/02/administrador-1-800x388.jpg" alt=""/>
                    <span>Meza Esteban</span>
                </p>
            </div>`;
            document.getElementById('users').innerHTML=users
            
            location.href="file:///home/esteban/Escritorio/jquery-to-js-curso-master/public/ingresar.html"
            
        }
        else{
            firebase.auth().signOut() 
            alert(`el correo ${email} no fue verificado`,400)
        }
    })
    .catch(function (error) {

    });
}


// }

// // import Autenticar from 'Autenticar'
// // alert(465)
// // let $btningresarDatos=document.getElementById('btningresarDatos')
// // $btningresarDatos.addEventListener('click',ingresar)
// let autenticar = new Autenticar();

function ingresar()
{
    let $nombre =document.getElementById('nombre').value
    let $email=document.getElementById('email').value
    let $password=document.getElementById('password').value
ingresarUsuario($nombre,$email,$password)
document.getElementById('nombre').value="";
document.getElementById('email').value="";
document.getElementById('password').value="";

    //     alert($nombre)
// autenticar.ingresarUsuario($nombre,$email,$password)
}

