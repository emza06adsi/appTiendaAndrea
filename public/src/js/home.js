
var muro=`<section class="home" id="home">
<div class="home-sidebar">
  <div class="sidebar">
    <div class="logo">
      <figure class="logo-image">
        <img src="https://doofindermedia.s3.amazonaws.com/blog/2016/09/vender-una-tienda-online.jpg" alt="Platzi Video - la Plataforma de videos cheveres"/>
      </figure>
    </div>
    <div class="sidebarPlaylist">
      <h2 class="sidebarPlaylist-title">paginas de usuarios</h2>
      <ol class="myPlaylist">
      <li class="myPlaylist-item">
          <a href="ingresar.html">
            <spafn>
              Ingresar colaborador
            </span>
          </a>
        </li>  
      <li class="myPlaylist-item">
          <a href="ingreso.html">
            <spafn>
              Ingresar productos
            </span>
          </a>
        </li>
        <li class="myPlaylist-item">
          <a href="venta.html">
            <span>
              ventas
            </span>
          </a>
        </li>
        
      </ol>
    </div>
    
  </div>

</div>
</section>`

document.getElementById('muro').innerHTML=muro;

form=`<form action="" class="search" id="form">
<input type="text" name="name" placeholder=""/>
</form>`
document.getElementById('form').innerHTML=form;

users=`<div class="user">
<p>
  <img src="src/images/covers/gorillaz.jpg" alt=""/>
  <span>Meza Esteban</span>
</p>
</div>
`;
document.getElementById('users').innerHTML=users

footer=``;
document.getElementById('footer').innerHTML=footer


















// (async function load() {
//   async function getData(url) {
//      let response= await fetch(url)
//    let data = await response.json()
//    return data;
//   }
//   let actionList=await getData('https://yts.lt/api/v2/list_movies.json?genre=action');
//   let dramaList=await getData('https://yts.lt/api/v2/list_movies.json?genre=drama    ');
//   let animationList=await getData('https://yts.lt/api/v2/list_movies.json?genre=animation');
//   let $action=document.querySelector('#action');
//   let $drama=document.getElementById('drama');
//   let $animation=document.getElementById('#animation');
 
//   let HTMLString=``;
 
//   function videoItemTemplate(movie) {
//    HTMLString=``;
//    for (i=0;i<movie.data.movies.length;i++){
//      // =videoItemTemplate(actionList.data.movies[0]);
//      HTMLString+=`
//      <div class="featuring">
//        <div class="featuring-image">
//          <img src="${movie.data.movies[i].medium_cover_image}" width="70" height="100" alt="">
//        </div>
//        <div class="featuring-content">
//          <p class="featuring-title">${movie.data.movies[i].title}</p>
//          <p class="featuring-album"></p>
//        </div>
//      </div>
//      `}
//    return (HTMLString)
 
//  }
//  function createTemplate(HTMLString,container) {
//   let html= document.implementation.createHTMLDocument();
//  html.body.innerHTML=HTMLString;
//  // debugger
//  for(i=0;i<html.body.children.length;i++){
//    container.append(html.body.children[0]);
//    // $action.append(html.body.children[1]);
//    // $action.append(html.body.children[2]);
//    // $action.append(html.body.children[3]);
 
//  }
//  }
 
 
//  function renderizar(lista,tipo) {
//    videoItemTemplate(lista)
//    createTemplate(HTMLString,tipo);
   
//  }
//  renderizar(actionList,$action)
//  //   console.log(data)  // await
//  // let $modal=document.getElementById('modal');
//  // let $overlay=document.getElementById('overlay');
//  // // let $hideModal=Document.getElementById('hide-modal');
//  // let $animationContainer=document.getElementById('animation');
//  // let $featuringContainer=document.getElementById('featuring');
//  // let $featuringContainer=document.getElementById('animation');
//  // let $formContainer=document.getElementById('form');
//  // let $home=document.getElementById('home');
//  // let $modalTite=$modal.querySelector('h1');
//  // let $modalImage=$modal.querySelector('img');
//  // let $modalDescription=$modal.querySelector('p');
 
//  // function videoItemTemplate(src,image) {
//  //   return (
//  //     `
//  //       <div class="featuring">
//  //         <div class="featuring-image">
//  //           <img src="${src}" width="70" height="100" alt="">
//  //         </div>
//  //         <div class="featuring-content">
//  //           <p class="featuring-title">${image}</p>
//  //           <p class="featuring-album"></p>
//  //         </div>
//  //       </div>
//  //       `
//  //  )
//  // }
//  // // console.log(videoItemTemplate('src/images/platzi-video.png','platzi'))
 
 
//  })()
 
 
 
 
 
 
 
 