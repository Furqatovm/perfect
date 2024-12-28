let img1 =document.getElementById("hero-right-img");
img1.style.display ="block";

let img2 =document.getElementById("menabduvali");
img2.style.display ="none";

let img3 =document.getElementById("men_iphone");
img3.style.display ="none";

let img4 =document.getElementById("men_ozim");
img4.style.display ="none";

let tugma =document.getElementById("right-aray");
let tugma2 =document.getElementById("right-images")

tugma.addEventListener("click", function(){
    if (img1.style.display == "block") {
        img2.style.display = "block";
        img1.style.display ="none";
    } else if (img2.style.display =="block") {
        img3.style.display ="block";
        img2.style.display ="none";
    } else if (img3.style.display =="block") {
        img3.style.display ="none";
        img4.style.display ="block";
    } else {
        img1.style.display =="block"
    }
});



tugma2.addEventListener("click", function(){
    if (img2.style.display == "block") {
        img1.style.display = "block";
        img2.style.display ="none";
    } else if (img3.style.display =="block") {
        img2.style.display ="block";
        img3.style.display ="none";
    } else if (img4.style.display =="block") {
        img4.style.display ="none";
        img3.style.display ="block";
    } else {
        img1.style.display =="block"
    }
})



let elements = document.getElementById("nav-child");
let nav =document.querySelector("nav");
elements.style.display ="none";


