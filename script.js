
const homesection = document.querySelector("#Home");
const navbar = document.querySelector(".navbar");

const observer = new IntersectionObserver(
    (entries)=>{
        const ent = entries[0];
        ent.isIntersecting === false
        ? navbar.classList.add("sticky")
        : navbar.classList.remove("sticky");
    },{
    root:null,
    rootMargin:"-200px",
    threshold:"",   
});
observer.observe(homesection);



let typed = new Typed(".auto-type",{
    strings:["I'm Developer","I'm Designer","I'm Software Engineer"],
    typeSpeed:30,
    delaySpeed : 50,
    backSpeed:30,
    loop:true 
})  


let hamb = document.querySelector(".hamburger-menu");
let navv = document.querySelector(".navbar");
function doStuff(){
    landscape = window.orientation? window.orientation=='landscape' : true;

    if(landscape && window.innerWidth<900 && window.innerWidth > 0){
        hamb.classList.remove("block")
        navv.classList.add("block")
    }
    else{
        hamb.classList.add("block")
        navv.classList.remove("block")
    }
}
window.onload=window.onresize=doStuff;
if(window.onorientationchange){
    window.onorientationchange=doStuff;
}



let check_box=document.getElementById("menu__toggle")
let menu_ele=document.querySelectorAll('.menu__item')
menu_ele.forEach(menu__item => {
    menu__item.addEventListener('click', ()=>{
        check_box.checked=false
    })
})

// let progessbar = document.querySelectorAll(".progress-value")
// let progessPr = document.querySelectorAll(".pr").value;

// console.log(progessPr)


//document.querySelector('#contact-form').addEventListener('submit', (e) => {
//e.preventDefault();
// e.target.elements.name.value = '';
// value = '';
// value = '';
// });
