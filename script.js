let popup = document.querySelector(".window");
let popup1 = document.querySelector(".window1");

let flash = document.querySelector(".open-window");
let flash1 = document.querySelector(".open-window1");

let close = document.querySelector(".close-window");
let close1 = document.querySelector(".close-window1");

flash.onclick = function(){
    popup.style.display = "block";
}

close.onclick = function(){
    popup.style.display ="none";
}

flash1.onclick = function(){
    popup1.style.display = "block";
}

close1.onclick = function(){
    popup1.style.display ="none";
}

let ham = document.querySelector(".hamburger")
let burger = document.querySelector(".nav-links");
let max = window.matchMedia("(max-width: 600px)");


ham.onclick = function () {
    if((burger.style.transform === "translateX(0%)") && max){
        burger.style.transform = "translateX(100%)";
    } else{
        burger.style.transform = "translateX(0%)";
    }
}

