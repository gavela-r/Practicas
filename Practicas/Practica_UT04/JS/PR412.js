let filter = '';
function crearDiv(){
    let div = document.getElementById('products-section');
    let div2 = document.createElement('div');
    div.append(div2);
    products
    .filter(({product}) => product.toLowerCase().includes(filter))
    .forEach(({id, product, image, price}) =>{
       
        let div3 = document.createElement('div');
        div2.append(div3);
        let fotografia = document.createElement('div');
        fotografia.classList.add('product-foto');
        fotografia = document.createElement('img');
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
        precio.classList.add('price');
        precio.textContent = `${price} €`;
        datos.append(precio);
        let compra = document.createElement('div');
        compra.classList.add('btn-add-product');
        compra.dataset.idProduct = `${id}`;
        datos.append(compra);
    })
    
}
crearDiv();
