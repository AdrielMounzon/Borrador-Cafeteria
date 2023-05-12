// import sumar from "./sumador";

// const nombre = document.querySelector("#nombre");
// const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#producto-form");
const div = document.querySelector("#resultado-div");
const nombre = document.querySelector("#nombre");
const descripcion = document.querySelector("#descripcion");

form.addEventListener("submit", (event) => {
  event.preventDefault();

 // div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
  div.innerHTML = "Nombre:" + nombre.value + " Descripcion:" + descripcion.value;
});