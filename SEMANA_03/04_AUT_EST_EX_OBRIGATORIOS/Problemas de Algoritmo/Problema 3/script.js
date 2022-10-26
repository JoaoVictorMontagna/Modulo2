let bt1=document.getElementById("btn1");
let bt2=document.getElementById("btn2");

function CtoF(d){
a = (d*1.8)+32;
return a;
}


function FtoC(d){
a=(d-32)/(1.8)
return a
}

bt1.onclick=function(){
let celsius=document.getElementById("nmr").value;
let conta=CtoF(parseInt(celsius));
let saida=document.getElementById("saida2");
saida.innerHTML=`${conta.toFixed(2)} Fº`
}

bt2.onclick=function(){
    let celsius=document.getElementById("nmr").value;
    let conta=FtoC(parseInt(celsius));
    let saida=document.getElementById("saida2");
    saida.innerHTML=`${conta.toFixed(2)} Cº`
    }
