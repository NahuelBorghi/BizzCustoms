eventoArticulo();

function eventoArticulo(){
    var articulo="";
    var i=0;
    while (document.getElementsByClassName("article")[i]!= undefined){
        articulo=document.getElementsByClassName("article")[i];
        i++;
        articulo.addEventListener("click",leerArticulo);
    }
}
function leerArticulo(){
    alert("aaaaaaa mi pichula");
}