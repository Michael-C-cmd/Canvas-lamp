import { ctx } from "./createCanvas.js";
import { clearDrawing } from "./clear.js";
import { drawNotGlowingLamp } from "./notGlowingLamp.js";

export const drawGlowingLamp = () => {
  clearDrawing();

  ctx.beginPath();

  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  //   * the ground
  ctx.moveTo(0, 800);
  ctx.lineTo(600, 800);
  ctx.stroke();
  ctx.fillRect(0, 800, 600, 100);

  //   * the lamp foot
  ctx.lineTo(365, 800);
  ctx.lineTo(310, 750);
  ctx.lineTo(310, 250);
  ctx.lineTo(290, 250);
  ctx.lineTo(290, 750);
  ctx.lineTo(235, 800);
  ctx.fill();

  //   * bulb holder
  ctx.beginPath();
  ctx.moveTo(290, 250);
  ctx.lineTo(290, 230);
  ctx.lineTo(310, 230);
  ctx.lineTo(310, 250);
  ctx.stroke();
  ctx.fill();

  //   * the bulb
  ctx.beginPath();
  ctx.fillStyle = "#ffffffda";
  ctx.moveTo(293, 230);
  ctx.lineTo(280, 180);
  ctx.lineTo(320, 180);
  ctx.lineTo(307, 230);
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(300, 180, 20, Math.PI, 0);
  ctx.stroke();
  ctx.fill();

  //   * the lamp head + glass
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "#eedf54e0";
  ctx.moveTo(300, 250);
  ctx.lineTo(330, 250);
  ctx.lineTo(370, 120);
  ctx.lineTo(230, 120);
  ctx.lineTo(270, 250);
  ctx.lineTo(300, 250);
  ctx.lineTo(300, 120);
  ctx.fill();
  ctx.stroke();

  //   * lamp hat
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(250, 100);
  ctx.lineTo(290, 90);
  ctx.lineTo(310, 90);
  ctx.lineTo(350, 100);
  ctx.stroke();
  ctx.fill();
  ctx.fillRect(229, 112, 142, 8);

  ctx.beginPath();
  ctx.arc(230, 100, 20, 0, Math.PI * (1 / 2));
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(370, 100, 20, Math.PI * (1 / 2), Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.fillStyle = "#eedf542d";
  ctx.strokeStyle = "#eedf5421";
  ctx.moveTo(371, 122);
  ctx.lineTo(599, 650);
  ctx.lineTo(599, 800);
  ctx.lineTo(365, 800);
  ctx.lineTo(310, 752);
  ctx.lineTo(310, 252);
  ctx.lineTo(332, 252);
  ctx.lineTo(371, 122);

  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.fillStyle = "#eedf542d";
  ctx.strokeStyle = "#eedf5421";
  ctx.moveTo(229, 122);
  ctx.lineTo(1, 650);
  ctx.lineTo(1, 800);
  ctx.lineTo(235, 800);
  ctx.lineTo(290, 752);
  ctx.lineTo(290, 252);
  ctx.lineTo(268, 252);
  ctx.lineTo(229, 122);

  ctx.stroke();
  ctx.fill();

  document.body.classList.add("on");
};
