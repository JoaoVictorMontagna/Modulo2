
function calculo1(){


    let nmr1=document.getElementById("nmr1").value;
    let nmr2=document.getElementById("nmr2").value;
    let nmr3=document.getElementById("nmr3").value;
    let saida1=document.getElementById("saida1");
    saida1.innerHTML=""
    if (nmr3-nmr2>10){
        saida1.innerHTML="digite valores que a diferença entre o menor e o mairo sera menor que 10"
       
    } else{
        while (parseInt(nmr2)<parseInt(nmr3)+1){
            conta=parseInt(nmr1)*parseInt(nmr2);
    
    
            console.log(nmr2);
            saida1.innerHTML = saida1.innerHTML +" " +nmr1 + " x " + nmr2 + "=" +conta + "    ,";
            nmr2=parseInt(nmr2)+1;
        }
    
    }
  
}

function calculo2(){


    let nmr1=document.getElementById("nmr1").value;

    let saida2=document.getElementById("saida2");


    let stringValor = parseInt(nmr1).toString();

    let arrayValor = stringValor.split('');

    let arrayReversa = arrayValor.reverse();

    let stringValorReversoVirgulas = arrayReversa.toString();

    let stringDoValorReverso = stringValorReversoVirgulas.replaceAll(',', '')
    if (stringValor === stringDoValorReverso){
        saida2.innerHTML="SIM, o numero é um palindromo"
        console.log(stringValor + ' ' + stringDoValorReverso)
    } else{
        saida2.innerHTML="Não, o numero não um palindromo"
        console.log(stringValor + ' ' + stringDoValorReverso)
    }

  
  
}
let lista=[]
function calculo3(){


        saida = document.getElementById("saida3");
        limi = parseInt(document.getElementById("nmr2").value)+1;
        lista = [];
        i = 1
        while(i < limi){

            if(i%3 === 0){
                lista.push('pi');
        }else{
            lista.push(i);
        }
            i += 1;
    }

        saida.innerHTML = lista;
}

function calculo4(){


    saida = document.getElementById("saida3");
    let xazulejo=document.getElementById("xazulejo").value;
    let xparede=document.getElementById("xparede").value;
    let yazulejo=document.getElementById("yazulejo").value;
    let yparede=document.getElementById("yparede").value;
    converterxparede=xparede*100;
    calcularcomprimento=converterxparede/xazulejo;
    converteryparede=yparede*100;
    calcularaltura=converteryparede/yazulejo;
    resultado=calcularaltura*calcularcomprimento;

    resultadocomporcentagem=resultado*1.05;

    resultadofinal=Math.ceil(resultadocomporcentagem);



    saida.innerHTML = resultadofinal  + " Azulejos";
}
