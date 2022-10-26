

let bt1=document.getElementById("btn1");
function contafinal(q,vu){
 vf=q*vu;
 return vf;   
}


bt1.onclick=function(){

let quanti=document.getElementById("quantidade").value;
let valoruni=document.getElementById("vu").value;
if (quanti>100 && quanti<=200){
    quanti=quanti*(1.25);

}else if (quanti>200){
    quanti=quanti*(1.5)
}
let saida=document.getElementById("saida");
let conta=contafinal(parseFloat(quanti),parseFloat(valoruni));




saida.innerHTML=`R$ ${conta.toFixed(2)}`


}

