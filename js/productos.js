const tituloProducto = document.querySelector("#tituloProducto");
const infoProducto = document.querySelector("#infoProducto");
const boton = document.querySelector("#button");

const id = sessionStorage.getItem("id");
const datosLocalStorage = localStorage.getItem("productos");

if (datosLocalStorage !== null) {
  const producto = JSON.parse(datosLocalStorage)[id];
  const nombreProducto = `${producto.codigo}`;
  tituloProducto.innerHTML = nombreProducto;
  const info = `<h4>${producto.descripcion}</h4> <p>${producto.detalle}</p> <img src=${producto.imagen}> <span>$${producto.precio}</span> <span class=puntuacion>${producto.puntuacion}</span>`;
  infoProducto.innerHTML = info;
}

boton.addEventListener("click", () => (window.location = "../index.html"));
