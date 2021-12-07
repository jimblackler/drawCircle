export function drawCircle(imageData, width, height, cx, cy, radius) {
  for (let idx = 0; idx !== 100; idx++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const offset = (y * imageData.width + x) * 4;
    imageData.data[offset] = 0;
    imageData.data[offset + 1] = 0;
    imageData.data[offset + 2] = 0;
    imageData.data[offset + 3] = 255;
  }
}
