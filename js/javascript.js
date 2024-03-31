
let iconoMenu = document.querySelector('#menu-icon');
let barraNav = document.querySelector('.barranavegacion');

iconoMenu.onclick = () =>{
    iconoMenu.classList.toggle('bx-x');
    barraNav.classList.toggle('activado');
}

console.log('estupidos');
//encabezado
// window.addEventListener("scroll",function(){
//     var header=this.document.querySelector("encabezado");
//     encabezado.classList.toggle("abajo",this.window.scrollY>0);
// });
let secciones=document.querySelectorAll('section');
let linkNavegador=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    secciones.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            linkNavegador.forEach(links =>{
                links.classList.remove('activado');
                document.querySelector('header nav a[href*='+ id +']').classList.add('activado');
            });
            // seccion para animacion con el scrolls
            sec.classList.add('show-animate');
        }
        
        else{
            sec.classList.remove('show-animate');
        }
    });

    let header=document.querySelector('encabezado');
    encabezado.classList.toggle('abajo',window.scrollY>100);

    iconoMenu.classList.remove('bx-x');
    barraNav.classList.remove('activado');

    //animacion al pie de pagina con scroll
    // var enca=this.document.querySelector("");
    // enca.classList.toggle("show-animate",this.innerHeight + this.scrollY >=document.scrollingElement.scrollHeight);
    // let footer = document.querySelector('footer');
    // footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
    
}
//para abrir cerrar la ventana de dialogo
const botonAbrir = document.querySelector("#botonabrir");
const botonCerrar = document.querySelector("#botoncerrar");
const galeria = document.querySelector("#galeria");

botonAbrir.addEventListener("click", ()=>{
    galeria.showModal();
});

botonCerrar.addEventListener("click", ()=>{
    galeria.close();
});

//java para la parte de dialogo
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let active = 0;
let lengthItems = items.length;

next.onclick = function(){
    if(active+1>lengthItems){
        active=0;
    }else{
        active=active+1
    }
    reloadSlider();
}
prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(() => {next.click()},5000);
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft+'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    let refreshSlider = setInterval(() => {next.click()},5000);
}
dots.forEach((li, key) =>{
    li.addEventListener('click',function(){
        active = key;
        reloadSlider();
    });
});
