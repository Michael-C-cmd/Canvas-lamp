import { myCanvas, ctx } from "./createCanvas.js";

export const clearDrawing = () => {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  document.body.classList.remove("off", "on");
};
