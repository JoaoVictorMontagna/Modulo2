const g=10

let bt1=document.getElementById("btn1");

function te(v){
    let t= v/g;
    return t
}
function altura(v){
    let v2= v*v
    let hmax=v2/(2*g)
    return hmax
}

bt1.onclick=function(){
    let v0= document.getElementById("v0").value;
    let saida= document.getElementById("saida");
    let saida2= document.getElementById("saida2");
    let jo= te(parseInt(v0));
    let hmaxi=altura(parseInt(v0))

    saida.innerHTML= `${jo} s`
    saida2.innerHTML= `${hmaxi} m`
}

