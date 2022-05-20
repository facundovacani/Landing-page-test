//Menu para celulares y tabletas.
let $buttonMenu = document.querySelector(".button-menu");
let $navMenu = document.querySelector(".nav-list-sm");
let $linksMenu = document.querySelectorAll(".nav-list-sm-items");
//Boton para activar una clase, la cual mostrará el menu en versión mvil
$buttonMenu.addEventListener("click", ()=>$navMenu.classList.toggle("active"))

$linksMenu.forEach((link)=>{
    link.addEventListener("click", ()=> $navMenu.classList.remove("active"))
})


/*Cancelación de la clase para mostrar navegador en versión móvil. En este caso para pantallas de escritorio.
 Sin esto, el usuario podría poner la versión movil, dejar el menu, agrandar a versión escritorio y aparecería en dicha versión. Cosa que no es correcta*/
window.addEventListener("resize", ()=> {
    if(window.screen.width > 1152){
        $navMenu.classList.remove("active")
    }
})
