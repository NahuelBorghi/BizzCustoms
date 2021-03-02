class motherboard {
    constructor (socalo,nombre,video,ram){
        this.socalo = socalo;
        this.nombre = nombre;
        this.video = video;
        this.ram = ram;
    }
    alerta (){
        alert("la placa madre solo es compatible con procesadores "+this.socalo);
        alert("podes poner hasta "+this.ram+" modulos de ram");
    }

}

function nuevo(){
    var socalo = document.getElementById("socalo").value;
    var nombre = document.getElementById("nombre").value;
    var video = document.formMother.video.value;
    var ram = parseInt(document.formMother.ram.value);
    var mother = new motherboard(socalo,nombre,video,ram);
    mother.alerta();
}