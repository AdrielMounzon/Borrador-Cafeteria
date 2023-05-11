import sumar from "./sumador";

const nombre = document.querySelector("#nombre");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#producto-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
