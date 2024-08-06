let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})


let typingEffect = new Typed("#text",{
    strings:["Vraj Rajiv  Jariwala"," A Coder...!"," A Web Developer"],
    loop:true,
    typeSpeed:200,
    backSpeed:50,
    backDelay:1000
}) 

