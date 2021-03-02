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
    article(contenedor){
        var hijo = document.createElement("div");
        hijo.innerHTML =`<div class="article">
                            <img src="${this.imagenes[0]}" />
                            <a class="producto">${this.nombre}</a>
                            <p>$ ${this.precio}</p>
                        </div>`;
        contenedor.appendChild(hijo);
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
                            <div id="right"></div>`;
    var url = "../assets/pruebas/articulos.json"
    var peticion = new XMLHttpRequest()
    peticion.onreadystatechange= function (){
        if(this.readyState==4 && this.status ==200){
            let articulos=JSON.parse(this.response);
            let array=listaArticulos(articulos,"012");
            tipos(articulos);
            paginacion(array.length);
        }
        tema();
    };
    peticion.open("GET", url, true);
    peticion.send();
}
/*buscar solucion para cuando sean mas de 12 articulos en el JSON
    localStorage.setItem("UltimoIdPagina",array[i].id);*/

function listaArticulos(articulos,UltimoIdPagina){ /*hay que pasarle el ultimo id de pagina en forma de string porque sino lo toma como un 10 en vez de 012*/
    let contenedor = document.getElementsByClassName("listaArticulos")[0];
    let array=[];
    var i=0;
    var idArticulos=articulos.map( articulos => articulos.id);
    for(i = idArticulos.indexOf(UltimoIdPagina)+1;i<(i=12);i++){
        if(array[i] == undefined){
            break;
        }
        array.push(new articulo(articulos[i].id,articulos[i].nombre,articulos[i].imagenes,articulos[i].tipo,articulos[i].subtipo,articulos[i].precio,articulos[i].colores));
        array[i].article(contenedor);
        if((i%11)==0&&i!=0){
            break;
        }
    }
    return array;
}

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

function paginacion (cantidad){
    let contenedor = document.getElementsByClassName("paginacion")[0];
    contenedor.innerHTML=`<p>pagina:</p>`;
    if(Math.round((cantidad/12)+0.49)>1){
        contenedor.innerHTML= contenedor.innerHTML+`<a class="itemPagina" href=""> < anterior </a>`;
    }
    for(i=1;i<=Math.round((cantidad/12)+0.49);i++){
        contenedor.innerHTML= contenedor.innerHTML+ `<a class="itemPagina" href=""> ${i} </a>`
    }
    if(Math.round((cantidad/12)+0.49)>1){
        contenedor.innerHTML= contenedor.innerHTML+`<a class="itemPagina"  href=""> siguiente > </a>`
    }
}