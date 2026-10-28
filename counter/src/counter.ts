let count: number = 0;

const counter = document.getElementById("counter");

function handleClick(event: MouseEvent): void {
  const target = event.target;

  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  const step = Number(target.dataset.step);
  count = Math.max(0, count + step);

  if (counter) {
    counter.textContent = String(count);
  }
}

document
  .querySelectorAll<HTMLButtonElement>("button[data-step]")
  .forEach((button) => {
    button.addEventListener("click", handleClick);
  });
