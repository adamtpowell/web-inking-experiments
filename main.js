window.addEventListener("load", main);

function main() {
    let canvas = document.getElementById("main-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let ctx = canvas.getContext("2d");

    canvas.onpointermove = function(event) {
        ctx.fillStyle = "#fff";
        ctx.fillRect(event.clientX,event.clientY,1,1); // fill in the pixel at (10,10)
        console.log(event);
    }
}