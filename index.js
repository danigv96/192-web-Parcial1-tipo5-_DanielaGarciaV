var rotate = document.querySelector(".rotate");
var img = document.querySelector(".container");
var change = document.querySelector(".valueUrl");



function changeImage(){
    console.log("hola");
img.innerHTML= "<img src="+change.value+">";
}
function changeRotate(){
    img.style.transform= "rotate("+rotate.value+"deg)";
}

change.addEventListener('change', changeImage);
rotate.addEventListener('change',changeRotate);