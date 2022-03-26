const button = document.querySelector(".button");
const toggleButton = document.querySelector(".button span");
const pricetag1 = document.querySelector(".price1");
const pricetag2 = document.querySelector(".price2");
const pricetag3 = document.querySelector(".price3");

button.addEventListener("click", () => {
  if (toggleButton.style.left === "5%") {
    toggleButton.style.left = "58%";
    pricetag1.innerHTML = `<span>$</span>19.99`;
    pricetag2.innerHTML = `<span>$</span>24.99`;
    pricetag3.innerHTML = `<span>$</span>39.99`;
  } else {
    toggleButton.style.left = "5%";
    pricetag1.innerHTML = `<span>$</span>199.99`;
    pricetag2.innerHTML = `<span>$</span>249.99`;
    pricetag3.innerHTML = `<span>$</span>399.99`;
  }
});
