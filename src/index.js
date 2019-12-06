import { spiralCoordinates } from './helpers/spiralCoordinates.js';
import { drawRotatedRect } from './helpers/drawRotatedRect.js';

const centerPointWidth = 60;
const centerPointHeight = 60;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const redrawCanvas = () => {
  canvas.width = window.innerWidth * 2;
  canvas.height = window.innerHeight * 2;

  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  spiralCoordinates(40).forEach(([x, y]) => {
    const lineWidth = 45;
    const lineHeight = 45;

    drawRotatedRect(
      ctx,
      (canvas.width / 2) + (centerPointWidth * x) - (lineWidth / 2),
      (canvas.height / 2) + (centerPointHeight * y) - (lineHeight / 2),
      lineWidth,
      lineHeight,
      15,
      'rgba(65, 65, 65, 1)'
    );
  });
};

window.addEventListener('resize', redrawCanvas);

redrawCanvas();
