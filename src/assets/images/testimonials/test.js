var view   =    document.getElementById("view");
var controll1 = document.getElementById("controll1");
var controll2 = document.getElementById("controll2");
var controll3 = document.getElementById("controll3");

var handlControll1 = () =>{
    view.style.transform = "translateX(33.37%)";
    controll1.classList.add("active");
    controll2.classList.remove("active");
    controll3.classList.remove("active");
}
var handlControll2 = () =>{
    view.style.transform = "translateX(0%)";
    controll1.classList.remove("active");
    controll2.classList.add("active");
    controll3.classList.remove("active");
}
var handlControll3 = () =>{
    view.style.transform = "translateX(-33.37%)";
    controll1.classList.remove("active");
    controll2.classList.remove("active");
    controll3.classList.add("active");
}

controll1.addEventListener("click",()=>{return handlControll1()});
controll2.addEventListener("click",()=>{return handlControll2()});
controll3.addEventListener("click",()=>{return handlControll3()});