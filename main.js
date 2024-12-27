let img1 =document.getElementById("hero-right-img");
img1.style.display ="block";

let img2 =document.getElementById("menabduvali");
img2.style.display ="none";

let img3 =document.getElementById("men_iphone");
img3.style.display ="none";

let img4 =document.getElementById("men_ozim");
img4.style.display ="none";

let tugma =document.getElementById("right-aray");

tugma.addEventListener("click", function (){
    img1.style.display ="none";
    img3.style.display ="block"
});

// tugma.addEventListener("click", function (){
//     img2.style.display ="none";
//     img3.style.display ="block"
// });
let tugma2 =document.getElementById("hero-right-button");

tugma2.addEventListener("click", function (){
    img1.style.display ="block";
    img3.style.display ="none"
});

let elements = document.getElementById("nav-child");
let nav =document.querySelector("nav");
elements.style.display ="none";



let btn =document.getElementById("menu");

btn.addEventListener("click", function(){
    elements.style.display ="block"
})

btn.addEventListener("dblclick", function(){
    elements.style.display ="none";
    btn.style.display ="block"
})