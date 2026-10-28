import { BoxColor } from "./types.js";

const colorBox = document.getElementById("color-box");
const colorSelect = document.getElementById("color-select");

if (!(colorSelect instanceof HTMLSelectElement)) {
  throw new Error("Element #color-select not found");
}

function paintBox(color: BoxColor): void {
  if (!(colorBox instanceof HTMLDivElement)) {
    return;
  }

  colorBox.style.backgroundColor = color;
}

function isBoxColor(value: string): value is BoxColor {
  return value === "white" || value === "lightblue" || value === "lightgreen" || value === "orange";
}

colorSelect.addEventListener("change", (event) => {
  const select = event.target;

  if (!(select instanceof HTMLSelectElement)) {
    return;
  }

  const color = select.value;
  if (isBoxColor(color)) {
    paintBox(color);
  }
});
