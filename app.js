import { drawNotGlowingLamp } from "./notGlowingLamp.js";
import { drawGlowingLamp } from "./glowingLamp.js";

const turnOnBtn = document.getElementById("turnOnBtn");
const turnOffBtn = document.getElementById("turnOffBtn");
const clearBtn = document.getElementById("clearBtn");

turnOffBtn.addEventListener("click", () => {
  if (!document.body.classList.contains("off")) {
    console.log("off");
    drawNotGlowingLamp();
  }
});

turnOnBtn.addEventListener("click", () => {
  if (!document.body.classList.contains("on")) {
    console.log("on");
    drawGlowingLamp();
  }
});

window.addEventListener("load", () => {
  drawNotGlowingLamp();
});
