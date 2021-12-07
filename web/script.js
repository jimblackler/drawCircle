import {drawCircle} from "./circle.js";

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
drawCircle(imageData, canvas.width / 2, canvas.height / 2, 180);
ctx.putImageData(imageData, 0, 0);
document.body.appendChild(canvas);
