 class Autenticar{
    ingresarUsuario(nombre,email,password) {
    
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (result) {
        
                result.user.updateProfile({
                    displayName:nombre   
                })
                let configuracion={url:'http://127.0.0.1:5500/appTiendaAndrea/public/'}
                result.user.sendEmailVerification()
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
}

// let $nombre =document.getElementById('nombre').value
// let $email=document.getElementById('email').value
// let $password=document.getElementById('password').value
// let $btningresarDatos=document.getElementById('btningresarDatos')
// $btningresarDatos.addEventListener('click',alert(456))
// debugger
// function ingresarUsuario(nombre,email,password) {
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then(result=> {
//             result.user.UpdateProfile({
//                displayName:nombre
                     
//         })
//         let configuracion={url:'http://127.0.0.1:5500/appTiendaAndrea/public/'}
        
//                result.user.sendEmailVerification()
//                     .catch(function (error) {
//         console.error(error)
//                         alert(error.message,4000)
//                     })
//                     firebase.auth().signOut()
//  alert(`vienvenido ${nombre} reaiza el proceso de verificar`,4000)

//         })
//         .catch(function (error) {
    
//             console.error(error)
//             alert(error.message,4000)
//         });
//     // firebase.auth().createUserWithEmailAndPassword(email,password)
//     //     .then(result=>{
//     //         result.user.UpdateProfile({
//     //             displayName:nombre
//     //         })  
//     //         result.user.sendEmailVerification   
//     //     }) 
//     //     })
// }

// function iniciarSecion(params) {
    
// }
