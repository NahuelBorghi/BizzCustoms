document.getElementById("probar").addEventListener("click",pruebas)

class articulo{
    constructor(id,nombre,images,tipo,subtipo,precio,colores){
        this.id=id;
        this.nombre=nombre;
        this.imagenes=images;
        this.tipo=tipo;
        this.subtipo=subtipo;
        this.precio=precio;
        this.colores=colores;
    }
    article(contenedor){ //las imagenes ya se cargar como queria. ahora en el css hay que crear la galeria
        var hijo = document.createElement("div");
        hijo.innerHTML =`<button class="article" value=${this.id}>
                            <img src="${this.imagenes[0]}" />
                            <a class="producto">${this.nombre}</a>
                            <p>$ ${this.precio}</p>
                        </button>`;
        contenedor.appendChild(hijo);
    }
}

class product {
    constructor(id,nombre,precio,marca,altura,largo,ancho,peso,materiales,conexiones,consumo,otros,coloresarticulo,imagenes){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.marca=marca;
        this.altura=altura;
        this.largo=largo;
        this.ancho=ancho;
        this.peso=peso;
        this.materiales=materiales;
        this.conexiones=conexiones;
        this.consumo=consumo;
        this.otros=otros;
        this.colores=coloresarticulo;
        this.imagenes=imagenes;
    }
    img(contenedor){
        let array = this.imagenes;
        alert (this.imagenes);
        let i=0;
        while (array[i] != ""){
            var hijo = document.createElement("img");
            hijo.src =array[i];
            contenedor.appendChild(hijo);
            i++;
        }
    }
    Detalles(contenedor,id){
        if(this.id == id){//agregar funcion de imagenes, colores y materiales
            contenedor.innerHTML=`<div id="imagenes">

                                </div>
                                <div id="general">
                                    
                                </div>
                                <div id="detalles">
                                    
                                </div>`;
            contenedor=document.getElementById("imagenes");
            this.img(contenedor);
            contenedor=document.getElementById("general");
            contenedor.innerHTML=`<h2>${this.nombre}</h2>
                                    <p>$${this.precio}</p>
                                    <form action="" method="get" enctype="multipart/form-data">
                                        <input class="boton" type="submit" value="Calcular Cuotas"/>
                                    </form>
                                    <img src="" href=""> <!--imagen de tarjetas con su link a las promociones bancarias-->
                                    <img src="" href=""> <!--imagen de camion para envios-->
                                    <form action="" method="get" enctype="multipart/form-data">
                                        <p>codigo postal</p>
                                        <input type="text" placeholder="CP"/>
                                    </form>
                                    <p>costo de envio: $xxx.xx</p>
                                    <form action="" method="get" enctype="multipart/form-data">
                                        <p>cantidad</p>
                                        <select id="desplegable" name="asunto" style="display: block">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <input type="submit" value="sumar al carrito"/>
                                    </form>`;
            contenedor=document.getElementById("detalles");
            contenedor.innerHTML=`<h3><hr>detalles</h3>
                                    <p> tecnologia del producto </p>
                                    <h4><hr>Especificaciones</h4>
                                    <table>
                                        <tr>
                                            <th>Caracteristicas generales</th>
                                        </tr>
                                        <tr>
                                            <td>Largo</td>
                                            <td> ${this.largo} Cm</td>
                                        </tr>
                                        <tr>
                                            <td>Ancho</td>
                                            <td> ${this.ancho} Cm</td>
                                        </tr>
                                        <tr>
                                            <td>Alto</td>
                                            <td> ${this.altura} Cm</td>
                                        </tr>
                                        <tr>
                                            <td>Color</td>
                                            <td>RGB</td>
                                        </tr>
                                        <tr>
                                            <td>Materiales</td>
                                            <td></td>
                                        </tr>
                                    </table><hr>`;
        }
    }
}

function prueba(e){ /*la variable e se crea a partir de lo que llama a la funcion. en el html hay 2 etiquetas <p>
    dentro del <div> con el id "probar" la variable e va a ser la etiqueta <p> a la que le haga click.
    si hago click entre las dos, voy a obtener el div, ya que estaria clickeando el contenedor de las dos <p>*/
    var url = "../assets/pruebas/articulos.json"
    var peticion = new XMLHttpRequest()
    peticion.onreadystatechange= function (){
        if(this.readyState==4 && this.status ==200){
            document.getElementsByTagName("section")[0].innerHTML = this.response +" "+ e.target.innerHTML;
            /*e.target.innerHTML va a ser lo que este dentro de la etiqueta a la que le hice click. si clickeo 
            el <div> voy a obtener todo tal cual este dentro de el. sin importar si hay botones u otra cosa. pero
            si en cambio clickeo un boton. solo obtendre el texto del boton*/
        }
    };
    peticion.open("GET", url, true);
    peticion.send();
} 

function pruebaswasd(){
    let contenedor = document.getElementsByTagName("section")[0];
    let hijo=undefined;
    let i;
    for(i=0;i<4;i++){
    hijo = document.createElement("div");/* tengo que crear un elemento nuevo cada vez que quiero agregar uno
    si pongo el create element fuera del bucle, solo me va a crear un elemento con el ultimo valor del contador
    en este caso*/
    hijo.innerHTML =    `<h4> casa </h4><br>
                        <h1> casota ${i} </h1>`;
    hijo.setAttribute("class","article");
    /* poniendo texto html entre `` que no son las comillas simples como estas '' puedo usar las variables fuera
    del texto poniendo un signo de dolar y entre llaves como se ve arriba para mostrarlas en el elemento que
    estoy creando */
    contenedor.appendChild(hijo);
    }
}

function pruebas(){
    let contenedor = document.getElementsByTagName("section")[0];
    contenedor.innerHTML=`<div class="asideLeft">
                                <h2>Productos</h2>
                                <div>
                                    <ul id="tipos">
                                    </ul>
                                </div>
                            </div>
                            <div class="filtros">
                            <h3>Filtros</h3>
                                <form action="" method="get" enctype="multipart/form-data">
                                    <select class="desplegable" name="color" style="display: inline; margin-right: 20px;">
                                        <option value="">-------</option>
                                        <option value="blanco">blanco</option>
                                        <option value="negro">negro</option>
                                        <option value="amarillo">amarillo</option>
                                        <option value="azul">azul</option>
                                        <option value="naranja">naranja</option>
                                        <option value="RGB">RGB</option>
                                        <option value="rojo">rojo</option>
                                        <option value="rosa">rosa</option>
                                        <option value="verde">verde</option>
                                        <option value="violeta">violeta</option>
                                        <option value="marron">marron</option>
                                    </select>
                                    <select class="desplegable" name="orden" style="display: inline; margin-left: 20px;">
                                        <option value="recomendados">recomendados</option>
                                        <option value="baratos">precio: menor a mayor</option>
                                        <option value="caros">precio: menor a mayor</option>
                                        <option value="a-z">orden alfabetico</option>
                                    </select>
                                    <p id="precio">precio desde: <input class="numeros" type="number" placeholder="minimo" style="margin-right: 5px;"/> hasta:<input class="numeros" type="number" placeholder="maximo"/></p>
                                    <input id="aceptar" type="submit" value="aplicar"/>
                                </form>
                            </div>
                            <div class="listaArticulos"></div>
                            <div class="paginacion"></div>
                            <div id="fondo"></div>
                            <div id="right"></div>`;
    var url = "../assets/pruebas/articulos.json"
    var peticion = new XMLHttpRequest()
    peticion.onreadystatechange= function (){
        if(this.readyState==4 && this.status ==200){
            $('#fondo').hide();
            $('#right').hide();
            let articulos=JSON.parse(this.response);
            //let UltimoIdPagina = localStorage.getItem("ultimoIdPagina");
            let array=listaArticulos(articulos,"001");
            tipos(articulos);
            let idArticulos=articulos.map( articulos => articulos.id);
            let i =idArticulos.indexOf("001");
            paginacion(articulos,articulos.length,i);
            $('.listaArticulos').ready(()=>{$('.article').on('click', productoDesplegable);});
        }
        tema();
    };
    peticion.open("GET", url, true);
    peticion.send();
}
function productoDesplegable(){
    obtenerDetalles(this.value);
    mostrarDetalles();
}



//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function crearDetalles(producto,id){
    let url = "../assets/pruebas/articulos.json";
    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function (){
        if(this.readyState==4 && this.status ==200){
        var articulos=JSON.parse(this.response);
        var article=buscarProducto(articulos,id);
        let productito = new product (producto.id,producto.nombre,producto.precio,producto.marca,producto.altura,producto.largo,producto.ancho,producto.peso,producto.materiales,producto.conexiones,producto.consumo,producto.otros,article.colores,article.imagenes);
        let contenedor = document.getElementById("right");
        productito.Detalles(contenedor,id);
    }
    };
    peticion.open("GET", url, true);
    peticion.send();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



function obtenerDetalles(id){
    var url = "../assets/pruebas/productos.json";
    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange= function (){
        if(this.readyState==4 && this.status ==200){
            let productos=JSON.parse(this.response);
            let producto=buscarProducto(productos,id);
            crearDetalles(producto,id);
        }
        tema();
    };
    peticion.open("GET", url, true);
    peticion.send();
    
}
function buscarProducto (productos,id){
    var i=0;
    while(productos[i].id!=id){
        if(productos[i].id=="000"){
            return "Error";
        }
        i++;
    }
    return productos[i];
}
function mostrarDetalles(){
    $('#fondo').toggle(0);
    $('#right').toggle(700);
    $('#fondo').on('click',()=>{
        $('#fondo').hide(0);
        $('#right').hide(500,borrarDetalles());
        
    });
}
function borrarDetalles(){
    let contenedor = document.getElementById("right");
    contenedor.innerHTML= ``;
}
/*buscar solucion para cuando sean mas de 12 articulos en el JSON
    localStorage.setItem("UltimoIdPagina",array[i].id);*/

function listaArticulos(articulos,desde){ //hay que pasarle el ultimo id de pagina en forma de string porque sino lo toma como un 10 en vez de 012
    let contenedor = document.getElementsByClassName("listaArticulos")[0];
    let array=[];
    let articulito;
    var idArticulos=articulos.map( articulos => articulos.id);
    idArticulos=idArticulos.indexOf(desde);
    var i=0;
    for(i;i>-1;i++){
        if(articulos[i+idArticulos].id == "000"){
            break;
        }
        articulito = new articulo(articulos[i+idArticulos].id,articulos[i+idArticulos].nombre,articulos[i+idArticulos].imagenes,articulos[i+idArticulos].tipo,articulos[i+idArticulos].subtipo,articulos[i+idArticulos].precio,articulos[i+idArticulos].colores)
        array.push(articulito);
        articulito.article(contenedor);
        if((i%11)==0&&i!=0){
            break;
        }
    }
    return array;
}
/*function listaArticulos(articulos){ 
    let contenedor = document.getElementsByClassName("listaArticulos")[0];
    let array=[];
    var i=0;
    var idArticulos=articulos.map( articulos => articulos.id);
    for(i in articulos){
        if(articulos[i] == undefined){
            break;
        }
        array.push(new articulo(articulos[i].id,articulos[i].nombre,articulos[i].imagenes,articulos[i].tipo,articulos[i].subtipo,articulos[i].precio,articulos[i].colores));
        array[i].article(contenedor);
        if((i%11)==0&&i!=0){
            break;
        }
    }
    return array;
}*/
function tipos(articulos){
    if(articulos[0]!= undefined){
    var tipos=[articulos[0].tipo];
    var flag;
    for (var i=1;i<articulos.length;i++){
        flag=[];
        for(let c=0;c<tipos.length;c++){
            if(articulos[i].tipo!=tipos[c]){
                flag.push(1);
            }else{
                flag.push(0);
            }
        }
        if(!flag.includes(0)){
            tipos.push(articulos[i].tipo);
        }
    }
    let contenedor=document.getElementById("tipos");
    for(i=0;i<tipos.length;i++){
        var hijo = document.createElement("li");
        hijo.innerHTML =`<a href="">${tipos[i]}</a>`;
        contenedor.appendChild(hijo);
    }
    }
}

function paginacion (articulos,cantidad,desde){
    let contenedor = document.getElementsByClassName("paginacion")[0];
    contenedor.innerHTML=`<p>pagina:</p>`;
    let c=desde;
    for(i=1;i<=Math.round((cantidad/12)+0.49);i++){
        c=c+12;
        if (c>(cantidad+desde)){
            c=cantidad+desde;
        }
        let id=articulos[c-1].id;
        if(articulos[c-1].id=="000"){
            id=articulos[c-2].id;
        }
        contenedor.innerHTML= contenedor.innerHTML+ `<button class="itemPagina" value="${id}">${i}</button>`
    }
}