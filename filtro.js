// Tenemos una lista de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

/* Cambie la declaración de variables a nombres más significativos 
   Se cambió declaración var por let o const da
*/
const productsList = document.getElementById("lista-de-productos")  //se cambia el nombre de "li" por "productsList" para mayor claridad y se agrega getElementById
const $input = document.getElementById('input');  //se cambia el nombre de "$i" por "$input" para mayor claridad y se agrega getElementById

for (let i = 0; i < productos.length; i++) {
  const d = document.createElement("div")   //se cambia "var" por "const"
  d.classList.add("producto")

  const ti = document.createElement("p")
  ti.classList.add("titulo") // Agregue diseño a títutlo pues no se usaba en css
  ti.textContent = productos[i].nombre

  const imagen = document.createElement("img"); //se cambia "var" por "const"
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  productsList.appendChild(d) //se cambia el nombre de "li" por "productsList"
}

// "displayProductos(productos)" no se usa

const botonDeFiltro = document.querySelector("button"); 

botonDeFiltro.onclick = function () {
  while (productsList.firstChild) {  //se cambia el nombre de "li" por "productsList"
    productsList.removeChild(productsList.firstChild);  //se cambia el nombre de "li" por "productsList"
  }

  const texto = $input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);  
  for (let i = 0; i < productosFiltrados.length; i++) {
    const d = document.createElement("div")
    d.classList.add("producto")

    const ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre

    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    d.appendChild(ti)
    d.appendChild(imagen)

    productsList.appendChild(d)   //se cambia el nombre de "li" por "productsList"
  }
}


function filtrado(productos = [], texto) {  //se cambia "const" por "function"
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  