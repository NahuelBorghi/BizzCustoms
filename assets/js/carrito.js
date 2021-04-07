/* primer prueba para carrito de compras */
document.getElementById("vaciar").addEventListener("click",vaciar);
window.addEventListener("load",mostrarCarrito);
$("#carrito").on("submit",()=>{return false;});
class bolsa {
    constructor (producto,cantidad,precio){
    this.producto = producto;
    this.cantidad = cantidad;
    this.precio = precio;
    }
}

var carro = localStorage.getItem("carro");
if(carro==undefined){
    inicializar();
}

function inicializar(){
    var vacio = [];
    vacio.push(new bolsa (0,0,0));
    vacio = JSON.stringify(vacio);
    var carrito = [vacio];
    localStorage.setItem("carro",carrito);
}

function vaciar(){
    inicializar();
    location.reload(); 
}

function imprimirCarrito(nombre,cantidad){
    let carro = localStorage.getItem("carro");
    let almacenados = JSON.parse(carro);
    let objeto = new bolsa (0,0,0);
    var carrito = [objeto];
    let i=1;
    //creo una lista nueva con los elementos del carrito menos el ultimo que son todos los valores en 0
    while (almacenados[i].producto!=0){
        if(carrito[carrito.length-1].producto==0){
            carrito[carrito.length-1].producto=almacenados[i].producto;
            carrito[carrito.length-1].cantidad=almacenados[i].cantidad;
        }else{
        carrito.push(new bolsa(almacenados[i].producto,almacenados[i].cantidad,almacenados[i].precio));
        }
        i++;
    }
    i=0;
    //recorro la lista nueva mostrando en alerta los valores de la lista
    let contenedor = document.getElementsByTagName("section")[i];
    if (carrito[i].producto!=0){
        crearCarrito(nombre,cantidad,contenedor)
    }
}
function crearCarrito(nombre,cantidad,contenedor){
    let url = "../assets/pruebas/articulos.json";
    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function (){
        if(this.readyState==4 && this.status ==200){
            let articulos=JSON.parse(this.response);
            let article=buscarCarro(articulos,nombre);
            let hijo=document.createElement("div");
            hijo.setAttribute("class","artiCarrito");
            let fix=article.precio*cantidad;
            hijo.innerHTML=`<img src="${article.imagenes[0]}" />
            <h3>${article.nombre}</h3>
            <p class="total">unidad $ ${article.precio} x ${cantidad} = $ ${fix.toFixed(2)}</p>`;
            contenedor.appendChild(hijo);
        }
    };
    peticion.open("GET", url, false);
    peticion.send();
}
function buscarCarro (productos,nombre){
    var i=0;
    while(productos[i].nombre!=nombre){
        if(productos[i].nombre=="final"){
            return "Error";
        }
        i++;
    }
    return productos[i];
}

function mostrarCarrito(){
    let carro = localStorage.getItem("carro");
    let almacenados = JSON.parse(carro);
    let objeto = new bolsa (0,0,0);
    var carrito = [objeto];
    let i=1;
    let hijo=document.createElement("h1");
    hijo.setAttribute("id","total")
    let contenedor=document.getElementsByTagName("section");
    //creo una lista nueva con los elementos del carrito menos el ultimo que son todos los valores en 0
    if(almacenados[i]!=undefined){
        while (almacenados[i].producto!=0){
            if(carrito[carrito.length-1].producto==0){
                carrito[carrito.length-1].producto=almacenados[i].producto;
                carrito[carrito.length-1].cantidad=almacenados[i].cantidad;
            }else{
            carrito.push(new bolsa(almacenados[i].producto,almacenados[i].cantidad,almacenados[i].precio));
            }
            i++;
        }
    }
    i=0;
    //recorro la lista nueva mostrando en alerta los valores de la lista
    while (carrito[i]!=undefined){
        if (carrito[i].producto!=0){
            imprimirCarrito(carrito[i].producto,carrito[i].cantidad);
        }
        i++;
    }
    let total=sumarTotales();
    if(total==""){
        total=0;
    }
    hijo.innerHTML=`total = $ ${total}`;
    contenedor[0].prepend(hijo);
    tema();
}

function sumarTotales(){
    let articulos=document.getElementsByClassName("total"),i=0,acum=0,fix;
    while(i<articulos.length){
        fix=articulos[i].innerHTML.slice(-10);
        if(fix.slice(0,4)=="= $ "){
            fix=fix.slice(4);
        }else if(fix.slice(0,3)==" $ "){
            fix=fix.slice(3);
        }else if(fix.slice(0,2)=="$ "){
            fix=fix.slice(2);
        }else if(fix.slice(0,1)==" "){
            fix=fix.slice(1);
        }
        acum+=parseFloat(fix);
        i++;
    }
    return acum.toFixed(2);
}