class mother {
    constructor (gens,size,nombre,video,ram,sata,m2,pciex,pci,rgb){
        this.gens=gens;
        this.size=size;
        this.nombre=nombre;
        this.video=video;
        this.ram=ram;
        this.sata=sata;
        this.m2=m2;
        this.pciex=pciex;
        this.pci=pci;
        this.rgb=rgb;
    }
}
class pcie{
    constructor(cantidad,lineas){
        this.cantidad=cantidad;
        this.lineas=lineas;
    }
}
class micro{
    constructor(nombre,gen,apu){
        this.nombre=nombre;
        this.gen=gen;
        this.apu=apu;
    }
}
class ram{
    constructor(modulos,tam,tipo){
        this.modulos=modulos;
        this.tam=tam;
        this.tipo=tipo;
    }
}
class placaVideo{
    constructor(flag,nombre,largoAprox){
        this.flag=flag;
        this.nombre=nombre;
        this.largoAprox=largoAprox;
    }
}
class discos{
    constructor(cantidad,tipo){
        this.cantidad=cantidad;
        this.tipo=tipo;
    }
}
class kits{
    constructor(cantidad,largo){
        this.cantidad=cantidad;
        this.largo=largo;
    }
}
class bombas{
    constructor(cantidad,tipo){
        this.cantidad=cantidad;
        this.tipo=tipo;
    }
}
class liquidas{
    constructor(kits,bombas){
        this.kits=kits;
        this.bombas=bombas;
    }
}
class coolers{
    constructor(fan,tam){
        this.fan=fan;
        this.tam=tam;
    }
}
class gabinete{
    constructor(luces,tamMothers,largoGpu,lados){
        this.luces=luces;
        this.tamMothers=tamMothers;
        this.largoGpu=largoGpu;
        this.lados=lados;
    }
}
class compat {
    constructor (placa,cpu,rams,gpu,alm,refri,gabin){
        this.placa=placa;
        this.cpu=cpu;
        this.rams=rams;
        this.gpu=gpu;
        this.alm=alm;
        this.refri=refri;
        this.gabin=gabin;
        //generar objeto con todos los datos y guardarlo en session storage en caso de que
        //correr todo el algoritmo en cada input sea muy lento.
    }
    conclusion (){ //generar html para #conclusion
        let contenedor = document.getElementById("conclusion"),pro= document.getElementById("pro"),contra= document.getElementById("contra"),errores= document.getElementById("errores");
        if(pro==undefined || contra==undefined || errores==undefined){
            pro=document.createElement("div"),contra=document.createElement("div"),errores=document.createElement("div");
            pro.setAttribute("id","pro");
            pro.style.color="green";
            contra.setAttribute("id","contra");
            errores.setAttribute("id","errores");
            errores.style.color="red";
            pro.innerHTML=`<h2>PROS</h2>`;
            contra.innerHTML=`<h2>CONTRAS</h2>`;
            errores.innerHTML=`<h2>ERRORES</h2>`;
        }else{
            pro.innerHTML=`<h2>PROS</h2>`;
            contra.innerHTML=`<h2>CONTRAS</h2>`;
            errores.innerHTML=`<h2>ERRORES</h2>`;
        }
        let i=0,c=0;
        while(i<this.alm.length){
            if(this.alm[i].tipo=="ssd"||this.alm[i].tipo=="hdd"){
            c+=parseInt(this.alm[i].cantidad);}
            i++;
        }
        if(this.placa.sata<c){
            errores.innerHTML+=`<h3>cantidad de satas de la placa: ${this.placa.sata} /vs/ satas usados: ${c}</h3>
            <p>La placa madre no tiene suficientes conectores sata para los dispositivos</p><br>`;
        }else if(this.placa.sata==c){
            contra.innerHTML+=`<h3>cantidad de satas de la placa: ${this.placa.sata} /vs/ satas usados: ${c}</h3>
            <p>La placa madre no soporta mas dispositivos sata</p><br>`;
        }else{
            pro.innerHTML+=`<h3>cantidad de satas de la placa: ${this.placa.sata} /vs/ satas usados: ${c}</h3>
            <p>Se puede agregar mas dispositivos de almacenamiento sata</p><br>`;
        }
        i=0,c=0;
        while(i<this.alm.length){
            if(this.alm[i].tipo=="m2"){
            c+=parseInt(this.alm[i].cantidad);}
            i++;
        }
        if(this.placa.m2<c){
            errores.innerHTML+=`<h3>cantidad de m2 de la placa: ${this.placa.m2} /vs/ m2 usados: ${c}</h3>
            <p>La placa madre no tiene suficientes conectores m2 para los dispositivos</p><br>`;
        }else if(this.placa.m2==c){
            contra.innerHTML+=`<h3>cantidad de m2 de la placa: ${this.placa.m2} /vs/ m2 usados: ${c}</h3>
            <p>La placa madre no soporta mas dispositivos m2</p><br>`;
        }else{
            pro.innerHTML+=`<h3>cantidad de m2 de la placa: ${this.placa.m2} /vs/ m2 usados: ${c}</h3>
            <p>Se puede agregar mas dispositivos de almacenamiento m2</p><br>`;
        }
        i=0,c=0;
        while(i<this.alm.length){
            if(this.alm[i].tipo=="pcie"){
            c+=parseInt(this.alm[i].cantidad);}
            i++;
        }
        if(this.placa.pciex<c){
            errores.innerHTML+=`<h3>cantidad de pci-express de la placa: ${this.placa.pciex} /vs/ pci-express usados: ${c}</h3>
            <p>La placa madre no tiene suficientes conectores pci-express para los dispositivos</p><br>`;
        }else if(this.placa.pciex==c){
            contra.innerHTML+=`<h3>cantidad de pci-express de la placa: ${this.placa.pciex} /vs/ pci-express usados: ${c}</h3>
            <p>La placa madre no soporta mas dispositivos pci-express</p><br>`;
        }else{
            pro.innerHTML+=`<h3>cantidad de pci-express de la placa: ${this.placa.pciex} /vs/ pci-express usados: ${c}</h3>
            <p>Se puede agregar mas dispositivos de almacenamiento pci-express</p><br>`;
        }
        i=0,c=0;
        while(i<this.placa.gens.length){
            while(c<this.cpu.gen.length){
                if(this.placa.gens[i]!=this.cpu.gen[c]){
                    errores.innerHTML+=`<h3>generaciones compatibles con la placa:  ${this.placa.gens[i]} /vs/ generacion del cpu: ${this.cpu.gen[c]}</h3>
                    <p>La placa madre no es compatible con el procesador</p><br>`;
                }
                c++;
            }
            c=0;
            i++;
        }
        while(i<this.gabin.tamMothers.length&&this.gabin.tamMothers[i]!=this.placa.size){i++}
        if(this.gabin.tamMothers[i]!=this.placa.size){
            errores.innerHTML+=`<h3>tipo de mother: ${this.placa.size} /vs/ mothers soportadas por gabinete: ${this.gabin.tamMothers[i]}</h3>
            <p>la placa madre no entra correctamente en el gabinete</p><br>`;
        }
        i=0;
        if(this.gabin.largoGpu<=this.gpu.largoAprox){
            errores.innerHTML+=`<h3>largo de gpu soportado por gabinete: ${this.gabin.largoGpu} /vs/ largo de gpu aproximado: ${this.gpu.largoAprox}</h3>
            <p>la placa de video puede no entrar en el gabinete</p><br>`;
        }
        while(i<this.gabin.lados.length){
            switch(i){
                case "0":
                    var frente= this.gabin.lados[i].fan * this.gabin.lados[i].tam;
                    break;
                case "1":
                    var lateral= this.gabin.lados[i].fan * this.gabin.lados[i].tam;
                    break;
                case "2":
                    var sup= this.gabin.lados[i].fan * this.gabin.lados[i].tam;
                    break;
                case "3":
                    var trasero= this.gabin.lados[i].fan * this.gabin.lados[i].tam;
                    break;
                default:
                    break;
            }
            i++;
        }
        i=0;
        while(i<this.refri.length){
            if(frente>=this.refri[i].kits.largo){
            }else if(lateral>=this.refri[i].kits.largo){
            }else if(sup>=this.refri[i].kits.largo){
            }else if(trasero>=this.refri[i].kits.largo){
            }else{
                errores.innerHTML+=`<h3>largo del kit de refrigeracion liquida: ${this.refri[i].kits.largo}</h3>
                <p>la refrigeracion liquida no entra en el gabinete</p><br>`;
            }
            i++;
        }
        if(this.placa.video != this.cpu.apu){
            if(this.placa.video=="no"){
                if(this.gpu.flag=="no"){
                    errores.innerHTML+=`<h3>Salida de video en mother: ${this.placa.video} /vs/ gpu: ${this.gpu.flag}</h3>
                    <p>Se necesita una salida de video</p><br>`;
                }
            }else{
                if(this.gpu.flag=="no"){
                    errores.innerHTML+=`<h3>Salida de video en mother: ${this.placa.video} /vs/ cpu con video integrado: ${this.cpu.apu}</h3>
                    <p>se necesita un apu compatible con la mother o una placa de video</p><br>`;
                }
            }
        }else if(this.placa.video=="si"){
            errores.innerHTML+=`<h3>Salida de video en mother: ${this.placa.video} /vs/ cpu con video integrado: ${this.cpu.apu}</h3>
            <p>es 100% necesaria una placa de video dedicada</p><br>`;
        }else{
            pro.innerHTML+=`<h3>Salida de video en mother: ${this.placa.video} /vs/ cpu con video integrado: ${this.cpu.apu}</h3>
            <p>No es 100% necesaria una placa de video dedicada</p><br>`;
        }

        i=0;
        while(i<this.cpu.gen.length){
            if(this.cpu.gen[i]=="athlon ii"||this.cpu.gen[i]=="phenom ii"||this.cpu.gen[i]=="fx"||this.cpu.gen[i]=="sempron"||this.cpu.gen[i]=="fm2+"){
                if(this.rams.tipo!="ddr3"){
                    errores.innerHTML+=`<h3> ${this.rams.tipo}</h3>
                    <p>La memoria RAM no es compatible con el procesador por su tipo</p><br>`;
                }
            }else{
                if(this.rams.tipo=="ddr4"){
                    pro.innerHTML+=`<p>El tipo de memoria RAM es el standard en el mercado</p><br>`;
                }
            }
            i++;
        }
        contenedor.appendChild(pro);
        contenedor.appendChild(contra);
        contenedor.appendChild(errores);
    }
}
//poner efecto de profundidad en css a los input y/o los divs
nuevo();


function nuevo(){
$("#mother").hide(100);
$("#cpu").hide(100);
$("#ram").hide(100);
$("#gpu").hide(100);
$("#discos").hide(100);
$("#refri").hide(100);
$("#gabinete").hide(100);
document.compatibilidades.addEventListener("input",marca);
document.compatibilidades.addEventListener("sumit",()=>{return false;})
}
function marca(){
    var placa,compu=undefined;
    switch(document.compatibilidades.cpu.value){
        case "intel":
            $("#mother").show(500);
            placa=placaMadre(document.compatibilidades.cpu.value.toLowerCase());
            if(placa!=undefined){
                $("#cpu").show(300);
                $("#ram").show(300);
                $("#gpu").show(300);
                $("#discos").show(300);
                var cpu=procesador(document.compatibilidades.cpu.value.toLowerCase());
                var rams=new ram(document.compatibilidades.modulosRam.value,document.compatibilidades.ram.value,document.compatibilidades.tipoRam.value);
                var gpu=grafica();
                var alm=almacenamiento();
                if(cpu!=undefined&&rams!=undefined&&gpu!=undefined&&alm!=undefined){
                    $("#refri").show(100);
                    $("#gabinete").show(100);
                    var refri=liquida();
                    var gabi=caja();
                }else{
                    $("#refri").hide(300);
                    $("#gabinete").hide(300);
                }
            }else{
                $("#cpu").hide(300);
                $("#ram").hide(300);
                $("#gpu").hide(300);
                $("#discos").hide(300);
            }
            if(placa!=undefined&&cpu!=undefined&&rams!=undefined&&gpu!=undefined&&alm!=undefined&&refri!=undefined&&gabi!=undefined){
                compu=new compat (placa,cpu,rams,gpu,alm,refri,gabi);
                compu.conclusion();
            }
            break;
        case "amd":
            $("#mother").show(500);
            placa=placaMadre(document.compatibilidades.cpu.value.toLowerCase());
            if(placa!=undefined){
                $("#cpu").show(300);
                $("#ram").show(300);
                $("#gpu").show(300);
                $("#discos").show(300);
                var cpu=procesador(document.compatibilidades.cpu.value.toLowerCase());
                var rams=new ram(document.compatibilidades.modulosRam.value,document.compatibilidades.ram.value,document.compatibilidades.tipoRam.value);
                var gpu=grafica();
                var alm=almacenamiento();
                if(cpu!=undefined&&rams!=undefined&&gpu!=undefined&&alm!=undefined){
                    $("#refri").show(100);
                    $("#gabinete").show(100);
                    var refri=liquida();
                    var gabi=caja();
                }else{
                    $("#refri").hide(300);
                    $("#gabinete").hide(300);
                }
            }else{
                $("#cpu").hide(300);
                $("#ram").hide(300);
                $("#gpu").hide(300);
                $("#discos").hide(300);
            }
            if(placa!=undefined&&cpu!=undefined&&rams!=undefined&&gpu!=undefined&&alm!=undefined&&refri!=undefined&&gabi!=undefined){
                compu=new compat (placa,cpu,rams,gpu,alm,refri,gabi);
                compu.conclusion();
            }
            break;
        default:
            $("#mother").hide(500);
            break;
    }
}
function placaMadre(cpu){
    let gens;
    if(cpu=="intel"){
        gens=motherIntel();
    }else{
        gens=motherAMD();
    }
    let size=document.compatibilidades.tamMother.value;
    let nombre=document.compatibilidades.nombreMother.value.toLowerCase();
    let video=document.compatibilidades.video.value;
    let ram=document.compatibilidades.rams.value;
    let sata=document.compatibilidades.sata.value;
    let m2=document.compatibilidades.m2.value;
    let pciex=[];
    let express;
    if(document.compatibilidades.pcie1.value !="" && document.compatibilidades.lineas1.value !=""){
        express= new pcie (document.compatibilidades.pcie1.value, document.compatibilidades.lineas1.value);
        pciex.push(express);
    }
    if(document.compatibilidades.pcie2.value != "" && document.compatibilidades.lineas2.value !=""){
        express= new pcie (document.compatibilidades.pcie2.value, document.compatibilidades.lineas2.value);
        pciex.push(express);
    }
    if(document.compatibilidades.pcie3.value != "" && document.compatibilidades.lineas3.value !=""){
        express= new pcie (document.compatibilidades.pcie3.value, document.compatibilidades.lineas3.value);
        pciex.push(express);
    }
    if(document.compatibilidades.pcie4.value != "" && document.compatibilidades.lineas4.value !=""){
        express= new pcie (document.compatibilidades.pcie4.value, document.compatibilidades.lineas4.value);
        pciex.push(express);
    }
    let pci=document.compatibilidades.pci.value;
    let rgb=document.compatibilidades.rgb.value;
    if(gens!="" && size!="" && nombre!="" && video!="" && ram!="" && sata!="" && m2!="" && pciex!="" && pci!="" && rgb!=""){
        let placa = new mother(gens,size,nombre,video,ram,sata,m2,pciex,pci,rgb);
        return placa;
    }
}
//-----------------------------------------------------------------------
function motherIntel(){
    let chipset = document.compatibilidades.chipset.value.toLowerCase();
    chipset = chipset.slice(1,2);
    let gensCHIP=[];
    switch (chipset){
        case "5":
            gensCHIP.push(11);
            break;
        case "4":
            gensCHIP.push(10);
            break;
        case "3":
            gensCHIP.push(8,9);
            break;
        case "2":
            gensCHIP.push(6,7);
            break;
        default:
            gensCHIP.push("error");
            break;
    }
    let socket = document.compatibilidades.socket.value.toLowerCase();
    socket=socket.slice(3);
    let gensSOC = [];
    switch (socket){
        case "1151":
            gensSOC.push(6,7,8,9);
            break;
        case "1200":
            gensSOC.push(10,11);
            break;
        default:
            break;
    }
    let gens=[];
    if (gensCHIP.length>=1 && gensSOC.length>=1){
        let c=0;
        for(let i=0;i<gensSOC.length;i++){
            for(c=0;c<gensCHIP.length;c++){
                if (gensSOC[i]==gensCHIP[c]){
                    gens.push(gensCHIP[c]);
                }
            }
        }
    }
    if(gens.length<1){
        return "";
    }else{
        return gens;
    }
}
function motherAMD(){
    let chipset = document.compatibilidades.chipset.value.toLowerCase();
    let gensCHIP=[];
    if(chipset.slice(0,1)=="a" || chipset.slice(0,1)=="b" || chipset.slice(0,1)=="x"){
        if (chipset.slice(2)== "8" || chipset.slice(3)== "x" || chipset.slice(3)== "h"){
            gensCHIP.push("fm2+");
        }else if(chipset.slice(2)=="20" || chipset.slice(2)=="50" || chipset.slice(2)=="70"){
            chipset = chipset.slice(1,2);
            switch (chipset){
                case "5":
                    gensCHIP.push("ryzen");
                    break;
                case "4":
                    gensCHIP.push("ryzen","a");
                    break;
                case "3":
                    gensCHIP.push("ryzen","a","x4");
                    break;
                default:
                    gensCHIP.push("error");
                    break;
            }
        }
    }else if(chipset.length>4){
        chipset = chipset.slice(0,1);
        switch (chipset){
            case "9":
                gensCHIP.push("athlon ii","phenom ii","fx");
                break;
            case "8":
                gensCHIP.push("athlon ii","phenom ii","fx");
                break;
            case "7":
                gensCHIP.push("athlon ii","phenom ii","fx");
                break;
            default:
                gensCHIP.push("error");
                break;
        }
    }else if(chipset.length<=4 && (chipset.slice(0,1) == "9" || chipset.slice(0,1) == "8" || chipset.slice(0,1) == "7")){
        chipset = chipset.slice(0,1);
        let gensCHIP=[];
        switch (chipset){
            case "9":
                gensCHIP.push("athlon ii","phenom ii","fx");
                break;
            case "8":
                gensCHIP.push("athlon ii","phenom ii","fx");
                break;
            case "7":
                gensCHIP.push();
                break;
            default:
                gensCHIP.push("error");
                break;
        }
    }
    let socket = document.compatibilidades.socket.value.toLowerCase();
    let gensSOC = [];
    switch(socket){
        case "am4":
            gensSOC.push("ryzen","a");
            break;
        case "am3+":
            gensSOC.push("athlon ii","phenom ii","fx");
            break;
        case "am3":
            gensSOC.push("athlon ii","phenom ii","fx","sempron");
            break;
        case "fm2+":
            gensSOC.push("fm2+");
            break;
        default:
            break;
    }
    let gens=[];
    if (gensCHIP.length>=1 && gensSOC.length>=1){
        let c=0;
        for(let i=0;i<gensSOC.length;i++){
            for(c=0;c<gensCHIP.length;c++){
                if (gensSOC[i]==gensCHIP[c]){
                    gens.push(gensCHIP[c]);
                }
            }
        }
    }
    if(gens.length<1){
        return "";
    }else{
        return gens;
    }
}
//-----------------------------------------------------------------------
function procesador(cpu){
    let nombre = document.compatibilidades.nombreCpu.value.toLowerCase();
    let gen="";
    if(cpu=="intel"){
        gen=cpuIntel(nombre);
    }else{
        gen=cpuAMD(nombre);
    }
    let apu = document.compatibilidades.apu.value;
    if(gen!=""&&nombre!=""&&apu!=""){
        let cpu = new micro(nombre,gen,apu);
        return cpu;
    }
}
//-----------------------------------------------------------------------
function cpuIntel(nombre){
    let gen=[];
    switch(nombre.slice(0,1)){
        case "i":
            //i9 a partir de 8va gen y en 11va gen no esta todavia
            if(nombre.slice(0,2)== "i3" || nombre.slice(0,2)== "i5" || nombre.slice(0,2)== "i7"){
                nombre = nombre.slice(2);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0" || nombre.slice(3,-2)=="0"){
                    gen.push(nombre.slice(0,1));
                }
            }else if(nombre.slice(0,2)== "i9"){
                nombre = nombre.slice(2);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(0,1)=="8" || nombre.slice(0,1)=="9" ||nombre.slice(0,2)=="10"){
                    if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0"){
                        gen.push(nombre.slice(0,1));
                    }
                }
            }
            break;
        case "c":
            if(nombre.slice(0,7)=="celeron"){
                nombre=nombre.slice(7);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(2);
                }else if(nombre.slice(0,1)=="g"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0" || nombre.slice(3,-2)=="0"){
                    switch(nombre.slice(0,1)){
                        case "3":
                            gen.push(6,7);
                            break;
                        case "4":
                            gen.push(8,9);
                            break;
                        case "5":
                            gen.push(10);
                            break;
                        default:
                            break;
                    }
                }
            }else if(nombre.slice(0,4)=="core"){
                //repetir lo de i3,i5,i7,i9
                nombre=nombre.slice(4);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(0,2)== "i3" || nombre.slice(0,2)== "i5" || nombre.slice(0,2)== "i7"){
                    nombre = nombre.slice(2);
                    if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                        nombre=nombre.slice(1);
                    }
                    if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0" || nombre.slice(3,-2)=="0"){
                        gen.push(nombre.slice(0,1));
                    }
                }else if(nombre.slice(0,2)== "i9"){
                    nombre = nombre.slice(2);
                    if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                        nombre=nombre.slice(1);
                    }
                    if(nombre.slice(0,1)=="8" || nombre.slice(0,1)=="9" ||nombre.slice(0,2)=="10"){
                        if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0" || nombre.slice(3,-2)=="0"){
                            gen.push(nombre.slice(0,1));
                        }
                    }
                }
            }
            break;
        case "p":
            if(nombre.slice(0,7)=="pentium"){
                nombre=nombre.slice(7);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(2);
                }else if(nombre.slice(0,1)=="g"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0"  || nombre.slice(3,-2)=="0" || nombre.slice(3)=="5" || nombre.slice(3,-1)=="5" || nombre.slice(3,-2)=="5"){
                    switch(nombre.slice(0,1)){
                        case "4":
                            gen.push(6,7);
                            break;
                        case "5":
                            gen.push(8,9);
                            break;
                        case "6":
                            gen.push(10);
                            break;
                        default:
                            break;
                    }
                }
            }
            break;
        default:
            break;
    }
    if(gen.length<1){
        return "";
    }else{
        return gen;
    }
}
function cpuAMD(nombre){
    let gen=[];
    switch(nombre.slice(0,1)){
        case "f":
            //i9 a partir de 8va gen y en 11va gen no esta todavia
            if(nombre.slice(0,2)== "fx"){
                nombre = nombre.slice(2);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(0,1)=="4" || nombre.slice(0,1)=="6" || nombre.slice(0,1)=="8" || nombre.slice(0,1)=="9"){
                    nombre=nombre.slice(1);
                    if(nombre.slice(2)=="0" || nombre.slice(2,-1)=="0"){
                        gen.push("fx");
                    }
                }
            }
            break;
        case "a":
            if(nombre.slice(0,2)=="a6"||nombre.slice(0,2)=="a8"||nombre.slice(0,3)=="a10"){
                nombre=nombre.slice(2);
                if(nombre.slice(0,1)=="0"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0"){
                    switch(nombre.slice(0,1)){
                        case "7":
                            gen.push("fm2+");
                            break;
                        case "9":
                            gen.push("a");
                            break;
                        default:
                            break;
                    }
                }
            }else if(nombre.slice(0,6)=="athlon"){
                nombre=nombre.slice(6);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(0,2)== "ii" || nombre.slice(0,2)== "2 " || nombre.slice(0,2)== "2-"){
                    nombre = nombre.slice(2);
                    if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                        nombre=nombre.slice(1);
                    }
                    if(nombre.slice(0,2)=="x2" || nombre.slice(0,2)=="x3" || nombre.slice(0,2)=="x4"){
                        nombre=nombre.slice(2);
                        if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                            nombre=nombre.slice(1);
                        }
                    }
                    if(nombre.slice(2)=="0" || nombre.slice(2,-1)=="0"  || nombre.slice(2,-2)=="0" || nombre.slice(2)=="5" || nombre.slice(2,-1)=="5" || nombre.slice(2,-2)=="5"){
                        gen.push("athlon ii");
                    }
                }else if(nombre.slice(0,2)=="x4"){
                    nombre = nombre.slice(2);
                    if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                        nombre=nombre.slice(1);
                    }
                    if(nombre.slice(0,1)=="9"){
                        if(nombre.slice(2)=="0"){
                            gen.push("x4");
                        }
                    }
                }
            }
            break;
        case "p":
            if(nombre.slice(0,6)=="phenom"){
                nombre=nombre.slice(6);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(0,2)== "ii" || nombre.slice(0,2)== "2 " || nombre.slice(0,2)== "2-"){
                    nombre = nombre.slice(2);
                    if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                        nombre=nombre.slice(1);
                    }
                    if(nombre.slice(0,2)=="x2" || nombre.slice(0,2)=="x3" || nombre.slice(0,2)=="x4"){
                        nombre=nombre.slice(2);
                        if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                            nombre=nombre.slice(1);
                        }
                        if(nombre.slice(2)=="0" || nombre.slice(2,-1)=="0"|| nombre.slice(2)=="5" || nombre.slice(2,-1)=="5"){
                            gen.push("phenom ii");
                        }
                    }
                    if(nombre.slice(0,2)=="x6"){
                        nombre=nombre.slice(2);
                        if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                            nombre=nombre.slice(1);
                        }
                        if(nombre.slice(0,2)=="10" || nombre.slice(0,2)=="11"){
                            if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0"|| nombre.slice(3)=="5" || nombre.slice(3,-1)=="5"){
                                gen.push("phenom ii");
                            }
                        }
                    }
                }
            }
            break;
        case "s":
            if(nombre.slice(0,7)=="sempron"){
                nombre=nombre.slice(7);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(0,1)=="1"){
                    if(nombre.slice(2)=="0" || nombre.slice(2,-1)=="0"|| nombre.slice(2)=="5" || nombre.slice(2,-1)=="5"){
                        gen.push("sempron");
                    }
                }
            }
        case "r":
            if(nombre.slice(0,5)=="ryzen"){
                nombre=nombre.slice(5);
                if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                    nombre=nombre.slice(1);
                }
                if(nombre.slice(0,1)=="3" || nombre.slice(0,1)=="5" || nombre.slice(0,1)=="7" || nombre.slice(0,1)=="9"){
                    nombre=nombre.slice(1);
                    if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                        nombre=nombre.slice(1);
                    }
                    if(nombre.slice(0,3)=="pro"){
                        nombre=nombre.slice(3);
                        if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                            nombre=nombre.slice(1);
                        }
                    }
                    if(nombre.slice(0,1)==" " || nombre.slice(0,1)=="-"){
                        nombre=nombre.slice(1);
                    }
                    if(nombre.slice(3)=="0" || nombre.slice(3,-1)=="0"|| nombre.slice(3,-2)=="0"){
                        gen.push("ryzen");
                    }
                }
            }
            break;
        default:
            break;
    }
    if(gen.length<1){
        return "";
    }else{
        return gen;
    }
}
//-----------------------------------------------------------------------
function grafica(){
    let flag=document.compatibilidades.gpu.value;
    let largoAprox=document.compatibilidades.fans.value;
    let nombre=document.compatibilidades.nombreGpu.value.toLowerCase();
    if(nombre.slice(0,3)!="amd"&&nombre.slice(0,6)!="radeon"&&nombre.slice(0,6)!="nvidia"&&nombre.slice(0,7)!="geforce"&&nombre.slice(0,8)!="ge force"&&nombre.slice(0,2)!="rx"&&nombre.slice(0,2)!="hd"&&nombre.slice(0,3)!="gtx"&&nombre.slice(0,3)!="rtx"){
        nombre="";
    }
    if(flag!=""&&nombre!=""&&largoAprox!=""){
        let gpu = new placaVideo(flag,nombre,largoAprox);
        return gpu;
    }
}
function almacenamiento(){
    let almacen=[],alm="";
    if(document.compatibilidades.disco1.value !="" && document.compatibilidades.tipoDisco1.value !=""){
        alm= new discos (document.compatibilidades.disco1.value, document.compatibilidades.tipoDisco1.value);
        almacen.push(alm);
    }
    if(document.compatibilidades.disco2.value != "" && document.compatibilidades.tipoDisco2.value !=""){
        alm= new discos (document.compatibilidades.disco2.value, document.compatibilidades.tipoDisco2.value);
        almacen.push(alm);
    }
    if(document.compatibilidades.disco3.value != "" && document.compatibilidades.tipoDisco3.value !=""){
        alm= new discos (document.compatibilidades.disco3.value, document.compatibilidades.tipoDisco3.value);
        almacen.push(alm);
    }
    if(document.compatibilidades.disco4.value != "" && document.compatibilidades.tipoDisco4.value !=""){
        alm= new discos (document.compatibilidades.disco4.value, document.compatibilidades.tipoDisco4.value);
        almacen.push(alm);
    }
    if(alm!=""){
        return almacen;
    }
}
function liquida(){
    let kit="",acum1=[],acum2=[],bomb="",watercooling;
    if(document.compatibilidades.kit1.value !="" && document.compatibilidades.tamKit1.value !=""){
        kit= new kits (document.compatibilidades.kit1.value, document.compatibilidades.tamKit1.value);
        acum1.push(kit);
    }
    if(document.compatibilidades.kit2.value != "" && document.compatibilidades.tamKit2.value !=""){
        kit= new kits (document.compatibilidades.kit2.value, document.compatibilidades.tamKit2.value);
        acum1.push(kit);
    }
    if(document.compatibilidades.bomba1.value !="" && document.compatibilidades.tipoBomba1.value !=""){
        bomb= new bombas (document.compatibilidades.bomba1.value, document.compatibilidades.tipoBomba1.value);
        acum2.push(bomb);
    }
    if(document.compatibilidades.bomba2.value != "" && document.compatibilidades.tipoBomba2.value !=""){
        bomb= new bombas (document.compatibilidades.bomba2.value, document.compatibilidades.tipoBomba2.value);
        acum2.push(bomb);
    }
    watercooling = new liquidas(acum1,acum2);
    return watercooling;
}
function caja(){
    let luces=document.compatibilidades.luces.value;
    let tamMothers=[];
    if($('input:checkbox[name=miniItx]').is(':checked')){
        tamMothers.push(document.compatibilidades.miniItx.value);
    }
    if($('input:checkbox[name=microAtx]').is(':checked')){
        tamMothers.push(document.compatibilidades.microAtx.value);
    }
    if($('input:checkbox[name=atx]').is(':checked')){
        tamMothers.push(document.compatibilidades.atx.value);
    }
    if($('input:checkbox[name=eatx]').is(':checked')){
        tamMothers.push(document.compatibilidades.eatx.value);
    }
    let largoGpu=document.compatibilidades.largo.value;
    let lados=[],aux;
    aux= new coolers (document.compatibilidades.fans1.value, document.compatibilidades.numFans1.value);
    lados.push(aux);
    aux= new coolers (document.compatibilidades.fans1.value, document.compatibilidades.numFans1.value);
    lados.push(aux);
    aux= new coolers (document.compatibilidades.fans1.value, document.compatibilidades.numFans1.value);
    lados.push(aux);
    aux= new coolers (document.compatibilidades.fans1.value, document.compatibilidades.numFans1.value);
    lados.push(aux);
    let gabin= new gabinete (luces,tamMothers,largoGpu,lados);
    return gabin;
}