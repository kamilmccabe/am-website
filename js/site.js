import tree from './sketches/tree.js';
import squares from './sketches/squares.js';
import img_glitch from './sketches/img_glitch.js';

window.navhover = false;

//let img_glitch_sketch = new p5(img_glitch, 'img_glitch');
let tree_sketch = new p5(tree, 'tree');
//let square_sketch = new p5(squares, 'squares');

let isPlaying = false;
document.getElementById("play").onclick = () => {
    if (!isPlaying){
        awotb_play();
        isPlaying = true;
    }
    else {
        awotb_stop();
        isPlaying = false;
    }
}

function play() {
    
}

let amCode = document.getElementById("code");
// Randomly generate the code AMxxx
setInterval(() => {
    let value = Math.floor(100 + Math.random() * 900);
    amCode.innerHTML = "AM" + value;
}, 100);

// give each element a random skew
let elementSkew = document.getElementsByClassName("am");
[].forEach.call(elementSkew, function (el) {
    let valueX = Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
    let valueY = Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
    el.style.transform = `skew(${valueX}deg, ${valueY}deg)`;
});

// document.getElementById("play").addEventListener("click", play);
// document.getElementById("stop").addEventListener("click", stop);

// const nav_links = document.querySelectorAll(".nav a");
// nav_links.forEach(item => {
//     item.addEventListener("mouseenter", nav_enter);
//     item.addEventListener("mouseout", nav_out);
// });