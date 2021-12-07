function plot(imageData, x, y, r, g, b, a) {
  const offset = (Math.floor(y) * imageData.width + Math.floor(x)) * 4;
  imageData.data[offset] = r;
  imageData.data[offset + 1] = g;
  imageData.data[offset + 2] = b;
  imageData.data[offset + 3] = a;
}

export function drawCircle(imageData, cx, cy, radius) {
  for (let i = radius / Math.sqrt(2); i >= 0; i--) {
    const j = Math.sqrt(radius * radius - i * i);
    plot(imageData, cx - i, cy + j, 0, 0, 0, 255);
    plot(imageData, cx + i, cy + j, 0, 0, 0, 255);
    plot(imageData, cx - i, cy - j, 0, 0, 0, 255);
    plot(imageData, cx + i, cy - j, 0, 0, 0, 255);
    plot(imageData, cx - j, cy + i, 0, 0, 0, 255);
    plot(imageData, cx + j, cy + i, 0, 0, 0, 255);
    plot(imageData, cx - j, cy - i, 0, 0, 0, 255);
    plot(imageData, cx + j, cy - i, 0, 0, 0, 255);
  }

}
