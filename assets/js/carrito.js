/* primer prueba para carrito de compras */
document.getElementById("agregar").addEventListener("click",agregar)
document.getElementById("vaciar").addEventListener("click",vaciar)
document.getElementById("mostrar").addEventListener("click",mostrarCarrito)

class bolsa {
    constructor (producto,cantidad){
    this.producto = producto;
    this.cantidad = cantidad;
    }
}

var carro = localStorage.getItem("carro");
if(carro==undefined){
    inicializar();
}

function agregar(){
    let producto = document.carrito.productos.value;
    let cantidad = document.getElementById("cantidad").value;
    let espacio = new bolsa (producto,cantidad);
    let carro = localStorage.getItem("carro");
    carro = JSON.parse(carro);
    if(carro==null){
        inicializar();
        carro = localStorage.getItem("carro");
        carro = JSON.parse(carro);
    }
        alert(carro);
    if(carro[carro.length-1].producto==0 && carro.length>2){
        carro[carro.length-1].producto=espacio.producto;
        carro[carro.length-1].cantidad=espacio.cantidad;
    }else{
    carro.push(espacio);
    }
    carro.push(new bolsa (0,0));
    carro = JSON.stringify(carro);
    localStorage.setItem("carro",carro);
}

function inicializar(){
    var vacio = [];
    vacio.push(new bolsa (0,0));
    vacio = JSON.stringify(vacio);
    var carrito = [vacio];
    localStorage.setItem("carro",carrito);
}

function vaciar(){
    inicializar();
}

function mostrarCarrito(){
    let carro = localStorage.getItem("carro");
    let almacenados = JSON.parse(carro);
    let objeto = new bolsa (0,0);
    var carrito = [objeto];
    let i=1;
    while (almacenados[i].producto!=0){
        if(carrito[carrito.length-1].producto==0){
            carrito[carrito.length-1].producto=almacenados[i].producto;
            carrito[carrito.length-1].cantidad=almacenados[i].cantidad;
        }else{
        carrito.push(new bolsa(almacenados[i].producto,almacenados[i].cantidad));
        }
        i++;
    }
    i=0;
    while (carrito[i]!=undefined){
        if(carrito[i].cantidad==1){
            alert("1 unidad de " + carrito[i].producto);
        }else{
        alert(carrito[i].cantidad + " unidades de " + carrito[i].producto);
        }
        i++;
    }
}