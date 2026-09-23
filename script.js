const windowEl = document.querySelector("#window");
const logout = document.querySelector("#logout");
const again = document.querySelector("#again");

let state = "active";
let timer = null;

const setState = (next) => {
  state = next;
  windowEl.classList.toggle("sequence", next === "ending");
  windowEl.classList.toggle("off", next === "signed-out");
  logout.disabled = next !== "active";
  again.disabled = next !== "signed-out";
};

logout.addEventListener("click", () => {
  if (state !== "active") return;

  state = "ending";
  setState("ending");

  clearTimeout(timer);
  timer = setTimeout(() => {
    setState("signed-out");
  }, 1750);
});

again.addEventListener("click", () => {
  if (state !== "signed-out") return;

  clearTimeout(timer);
  windowEl.classList.add("waking");

  timer = setTimeout(() => {
    windowEl.classList.remove("waking");
    setState("active");
  }, 620);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state === "signed-out") {
    again.click();
  }
});

setState("active");
