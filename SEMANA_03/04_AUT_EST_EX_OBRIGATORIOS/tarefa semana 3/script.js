//Exercicio 1
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
try{
    bt1.onclick=function(){
        let v0= document.getElementById("v0").value;
        let saida= document.getElementById("saida1");
        let saida2= document.getElementById("saida2");
        let jo= te(parseInt(v0));
        let hmaxi=altura(parseInt(v0))

        saida.innerHTML= `${jo} s`
        saida2.innerHTML= `${hmaxi} m`
    }
}catch(error){
    console.log("deu ruim");
}
//Exercicio 2

let bt2=document.getElementById("btn2");

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

try{
    bt2.onclick=function(){
        let a=document.getElementById("a").value;
        let b=document.getElementById("b").value;
        let c=document.getElementById("c").value;
        let saida2=document.getElementById("saida2");
        let saida3=document.getElementById("saida3");
        let xvertice=xv(parseInt(a),parseInt(b))
        let yvertice=yv(parseInt(a),parseInt(b),parseInt(c))

        saida2.innerHTML= `Xv= ${xvertice}`
        saida3.innerHTML= `Yv= ${yvertice}`
    }
}catch(error){
    console.log("deu ruim")
}

//ex3
let bt3=document.getElementById("btn3");
let bt4=document.getElementById("btn4");

function CtoF(d){
a = (d*1.8)+32;
return a;
}


function FtoC(d){
a=(d-32)/(1.8)
return a
}
try{
    bt3.onclick=function(){
    let celsius=document.getElementById("nmr").value;
    let conta=CtoF(parseInt(celsius));
    let saida=document.getElementById("saida4");
    saida.innerHTML=`${conta.toFixed(2)} Fº`
    }
}catch(error){
    console.log("deu ruim")
}
try{
    bt4.onclick=function(){
        let celsius=document.getElementById("nmr").value;
        let conta=FtoC(parseInt(celsius));
        let saida=document.getElementById("saida4");
        saida.innerHTML=`${conta.toFixed(2)} Cº`
        }
    }catch(error){
        console.log("deu ruim")
    }

    //exercicio 4
    
    let bt5=document.getElementById("btn5");
function contafinal(q,vu){
 vf=q*vu;
 return vf;   
}

try{
    bt5.onclick=function(){
    let quanti=document.getElementById("quantidade").value;
    let valoruni=document.getElementById("vu").value;
    if (quanti>100 && quanti<=200){
        quanti=quanti*(1.25);

    }else if (quanti>200){
        quanti=quanti*(1.5)
    }
    let saida5=document.getElementById("saida5");
    let conta=contafinal(parseFloat(quanti),parseFloat(valoruni));
    saida5.innerHTML=`R$ ${conta.toFixed(2)}`
    }
    
    
    
}catch(error){
    console.log("deu ruim")
}

