window.addEventListener("load", main);

function main() {
    let canvas = document.getElementById("main-canvas");
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;

    let ctx = canvas.getContext("2d");

    last_point = {clientX: 0, clientY: 0, pressure: 0}

    canvas.onpointermove = function(event) {
        if (event.pointerType != "pen") return;
        ctx.strokeStyle = "#fff";
        ctx.lineCap = "round";
        
        cur_point = {clientX: event.clientX * window.devicePixelRatio, clientY: event.clientY * window.devicePixelRatio, pressure: event.pressure}
        ctx.lineWidth = ((cur_point.pressure + last_point.pressure) / 2) * 10 * window.devicePixelRatio;
        if (last_point.pressure > 0 && cur_point.pressure > 0) {
            ctx.beginPath();
            ctx.moveTo(last_point.clientX, last_point.clientY);
            ctx.lineTo(cur_point.clientX, cur_point.clientY);
            ctx.stroke();
        }

        last_point = cur_point;
    }
}