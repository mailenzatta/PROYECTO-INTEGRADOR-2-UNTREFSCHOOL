const listaProductos = document.querySelector("#listaProductos");
let productos;

const cargarProductos = async () => {
  productos = localStorage.getItem("productos");

  if (productos == null) {
    const response = await fetch("json/productos.json");
    productos = await response.json();

    localStorage.setItem("productos", JSON.stringify(productos));
  }

  if (typeof productos == "string") {
    productos = JSON.parse(productos);
  }

  productos.forEach(cardProducto);
};

const cardProducto = (producto) => {
  const li = document.createElement("li");
  li.textContent = producto.codigo;
  li.setAttribute("data-id", productos.indexOf(producto));
  li.classList.add("card", "col-lg-3", "col-md-4", "col-sm-12");
  listaProductos.appendChild(li);
};

cargarProductos();

document.addEventListener("click", (event) => {
  if (event.target.tagName == "LI") {
    const id = event.target.dataset.id;

    sessionStorage.setItem("id", id);
    window.location = "productos.html";
  }
});
