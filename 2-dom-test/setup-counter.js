export default function setupCounter() {
  const buttonEls = document.querySelectorAll("button");
  const countEl = document.getElementById("count");
 
  buttonEls.forEach((button) =>
    button.addEventListener("click", () => {
      const value = Number(countEl.textContent);
      countEl.textContent =
        button.ariaLabel === "increment" ? value + 1 : value - 1;
    })
  );
}
 