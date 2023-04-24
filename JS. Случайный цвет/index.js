let square = document.getElementById("square");
let button = document.getElementById("button");
let widthChange = document.querySelector('.width');
let heightChange = document.querySelector('.height');
button.addEventListener('click', function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    square.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
})
widthChange.addEventListener('input', function () {
    let width = document.querySelector('.width').value;
    console.log(width);
    square.style.width = width +"px";
})
heightChange.addEventListener('input', function () {
    let height = document.querySelector('.height').value;
    console.log(height);
    square.style.height = height + "px";
})
