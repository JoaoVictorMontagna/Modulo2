

let bt1=document.getElementById("btn1");

function xv(a,b){
   b=b*-1;
   a=2*a;
   return b/a

}
function yv(a,b,c){
    let delta=(b*b)-(4*a*c)
    delta=delta*-1
    a=4*a
    return delta/a
}

bt1.onclick=function(){
    let a=document.getElementById("a").value;
    let b=document.getElementById("b").value;
    let c=document.getElementById("c").value;
    let saida=document.getElementById("saida");
    let saida2=document.getElementById("saida2");
    let xvertice=xv(parseInt(a),parseInt(b))
    let yvertice=yv(parseInt(a),parseInt(b),parseInt(c))

    saida.innerHTML= `Xv= ${xvertice}`
    saida2.innerHTML= `Yv= ${yvertice}`
}


