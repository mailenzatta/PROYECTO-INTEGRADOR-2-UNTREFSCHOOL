const tituloProducto = document.querySelector("#tituloProducto");
const infoProducto = document.querySelector("#infoProducto");
const boton = document.querySelector("#button");

const id = localStorage.getItem("id");
const datosLocalStorage = localStorage.getItem("productos");

const cargarInfo = () => {
  if (datosLocalStorage !== null && id !== null) {
    const producto = JSON.parse(datosLocalStorage)[id];

    const puntuacion = ["☆", "☆", "☆", "☆", "☆"];

    for (let i = 0; i < producto.puntuacion.length; i++) {
      puntuacion[i] = "★";
    }

    const money = new Intl.NumberFormat("es-Ar", {
      style: "currency",
      currency: "ARS",
    });

    const nombreProducto = `${producto.codigo}`;
    tituloProducto.innerHTML = nombreProducto;

    const info = `<h4>${producto.descripcion}</h4> <p>${
      producto.detalle
    }</p> <img src=${producto.imagen}> <span>${money.format(
      producto.precio
    )}</span> <span class=puntuacion>${puntuacion.join("")}</span>`;
    infoProducto.innerHTML = info;
  } else {
    window.location = "./index.html";
  }
};

cargarInfo();

boton.addEventListener("click", () => (window.location = "./index.html"));
