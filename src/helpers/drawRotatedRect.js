export const drawRotatedRect = (ctx, x, y, width, height, deg, color) => {
  ctx.save();
  ctx.beginPath();
  ctx.translate(x + width / 2, y + height / 2);
  ctx.rotate(deg * Math.PI / 180);
  ctx.rect(-width / 2, -height / 2, width, height);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
};
