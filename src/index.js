export const spiralCoordinates = finyl => {
  const result = [];
  let x = 0;
  let y = 0;
  let k = 0;

  while (k < finyl) {
    result.push([x, y]);

    k += 1;
    y = -k;
    x = -k + 1;

    while (x < k) {
      result.push([x, y]);
      x += 1;
    }

    while (y < k) {
      result.push([x, y]);
      y += 1;
    }

    while (x > -k) {
      result.push([x, y]);
      x -= 1;
    }

    while (y > -k) {
      result.push([x, y]);
      y -= 1;
    }
  }

  return result;
};
