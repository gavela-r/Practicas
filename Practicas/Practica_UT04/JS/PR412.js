let carrito = [];
let frutasPorPagina = 8;
let curretPage = 1;

function crearDiv() {
    let div = document.getElementById('products-section');

    div.innerHTML = '';

    let div2 = document.createElement('div');
    div2.classList.add('product');
    div.append(div2);

    let principio = (curretPage - 1) * frutasPorPagina;
    let final = principio + frutasPorPagina;
     products.slice(principio, final)

        .forEach(({ id, product, image, price }) => {
        let div3 = document.createElement('div');
        div3.classList.add('product-foto');
        div2.append(div3);

        let fotografia = document.createElement('img');
        fotografia.src = image;
        div3.append(fotografia);

        let datos = document.createElement('div');
        datos.classList.add('product-data');
        div3.append(datos);

        let nombre = document.createElement('div');
        nombre.classList.add('fruit-name');
        nombre.textContent = product;
        datos.append(nombre);

        let precio = document.createElement('div');
        precio.classList.add('precioColor');
        let numeroPrecio = document.createElement('span');
        numeroPrecio.classList.add('price');
        numeroPrecio.textContent = `${(price / 100).toFixed(2)} €/Kg`;
        
        datos.append(precio);
        precio.append(numeroPrecio);

        let boton = document.createElement('button');
        boton.classList.add('btn');
        boton.setAttribute('data-id', id);
        boton.setAttribute('id', 'boton');
        boton.textContent = 'Añadir';
        boton.addEventListener('click', addProduct);
        precio.append(boton);
        
    });


   let paginacionContainer = document.createElement('div');
   paginacionContainer.classList.add('paginacion-container');
   div.append(paginacionContainer);

   let paginacion = document.createElement('button');
   paginacion.setAttribute('id', 'izquierda');
   paginacion.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
   paginacionContainer.append(paginacion);

   let totalPage = Math.ceil(products.length / frutasPorPagina);
   let texto = document.createElement('span');
   texto.innerHTML = `Mostrando ${curretPage} de ${totalPage}`;
   paginacionContainer.append(texto);

   let paginacion2 = document.createElement('button');
   paginacion2.setAttribute('id', 'derecha');
   paginacion2.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
   paginacionContainer.append(paginacion2);

   let derecha = document.getElementById('derecha');
   derecha.addEventListener('click', function(){
        if(curretPage < totalPage){
            curretPage++;
            crearDiv();
        }

    let izquierda = document.getElementById('izquierda');
    izquierda.addEventListener('click', function(){
        if(curretPage > 1){
            curretPage--;
            crearDiv();
        }
    })
   })
}


 //titulo del carrito
   let section = document.getElementById('cart-section')
   let titulo = document.createElement('h1');
   titulo.textContent = 'Carrito';
   section.append(titulo);

   let cuadro = document.createElement('div');
   cuadro.classList.add('principal');
   section.append(cuadro);


   
   let cantidad = document.createElement('div');
   let negro = document.createElement('strong');
   cantidad.classList.add('cant');
   negro.textContent = 'Cant.'
   cuadro.append(cantidad);
   cantidad.append(negro);

   let producto = document.createElement('div');
   let negro2 = document.createElement('strong');
   producto.classList.add('producto');
   negro2.textContent = 'Producto';
   cuadro.append(producto);
   producto.append(negro2);

   let precio = document.createElement('div');
   let negro3 = document.createElement('strong');
   precio.classList.add('precio');
   negro3.textContent = 'Precio';
   cuadro.append(precio);
   precio.append(negro3);

   //dar un evento al boton de añadir
   //agregar un objeto al carrito
function addProduct(event) {
    let id = event.target.dataset.id;
    let añadir = products.find(item => item.id == id);

    if (añadir) {
       
        let existingProduct = carrito.find(item => item.id == id);

        if (existingProduct) {  
            existingProduct.cantidad++;
        } else {
           
            carrito.push({
                id: añadir.id,
                name: añadir.product,
                precio: añadir.price,
                cantidad: 1,
            });
        }
    }
    console.log(carrito);
    dibujarCarrito();
}

    let productosDentro = document.createElement('div');
    productosDentro.classList.add('productos-carrito');
    section.append(productosDentro);

// dibujar el carrito
    function dibujarCarrito(){

        productosDentro.innerHTML = '';
        
            carrito.forEach(({name, precio, cantidad})=>{
            
            let fila = document.createElement('div');
            fila.classList.add('fila');
            productosDentro.append(fila);

            

            let cantidadProducto = document.createElement('div');
            cantidadProducto.classList.add('cantidad');
            cantidadProducto.textContent = cantidad;
            fila.append(cantidadProducto);
            
            let nombre = document.createElement('div');
            nombre.classList.add('nombre');
            nombre.textContent = name;
            fila.append(nombre);

            let precioProducto = document.createElement('div');
            precioProducto.classList.add('precioProd');
            precioProducto.textContent = `${(precio / 100).toFixed(2)}€`;
            fila.append(precioProducto);

          
        })
        precioTotal();
   }
    
    let fila2 = document.createElement('div');
    fila2.classList.add('fila2');
    section.append(fila2);

    let total = document.createElement('div');
    let totalNegrita = document.createElement('strong');

    let cuadroTotal = document.createElement('div');
    let precioNegrilla = document.createElement('strong');
   
  function precioTotal(){
        
        total.classList.add('total');
        totalNegrita.textContent = 'Total';
        fila2.append(total);
        total.append(totalNegrita);

        
        
        let totalPrecio =  carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
        cuadroTotal.classList.add('pecioTotal');
        precioNegrilla.textContent = `${(totalPrecio / 100).toFixed(2)}€`
        fila2.append(cuadroTotal);
        cuadroTotal.append(precioNegrilla);

  }


crearDiv()



