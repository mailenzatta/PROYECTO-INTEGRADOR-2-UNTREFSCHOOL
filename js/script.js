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
  const li = `<li data-id= ${productos.indexOf(
    producto
  )} class="card col-lg-3 col-md-4 col-sm-12">
    <img src=${producto.imagen} class="card-img-top mx-auto d-block"></img>
    <div class="card-body">
    <h5 class="card-title">${producto.codigo}</h5>
    <p class="card-text">${producto.descripcion}</p>
    <i class='bx bxs-message-square-add'></i>
    </div>
  </li>`;
  listaProductos.innerHTML += li;
};

cargarProductos();

document.addEventListener("click", (event) => {
  if (event.target.tagName == "IMG" || event.target.tagName == "I") {
    const id = event.target.closest(".card").dataset.id;

    localStorage.setItem("id", id);
    window.location = "./productos.html";
  }
});
