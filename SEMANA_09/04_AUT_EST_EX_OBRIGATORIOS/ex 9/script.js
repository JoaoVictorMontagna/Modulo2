


function calculo(){
    let valor=document.getElementById("valor").value;
    let pct=document.getElementById("pct").value;
    let tempo=document.getElementById("tempo").value;
    let resultado=document.getElementById("resultado");

    let formatadorDinehiro=new Intl.NumberFormat("pt-Br",{
        style:"currency",
        currency:"BRL",
        minimumFractionDigits:2,
    });

    pctcerta=pct/100;
    multiplicador=1+pctcerta;
    multiplicadorfinal=Math.pow(multiplicador,tempo);
    fim=valor*multiplicadorfinal;
    
    
    resultado.innerHTML=formatadorDinehiro.format(fim);
}

function jurosimples(){
    let valor=document.getElementById("valor").value;
    let pct=document.getElementById("pct").value;
    let tempo=document.getElementById("tempo").value;
    let resultado=document.getElementById("resultado");
    let formatadorDinehiro=new Intl.NumberFormat("pt-Br",{
        style:"currency",
        currency:"BRL",
        minimumFractionDigits:2,
    });

    pctcerta=pct/100;
    juros=valor*pctcerta*tempo;
    fim=parseInt(valor)+parseInt(juros);

    resultado.innerHTML=formatadorDinehiro.format(fim);


}

function impressaoMaluca(){
    texto = document.getElementById("texto").value;
    divSaida = document.getElementById("saida");
    saida = '';
    espacos = '';
    for (let caractere of texto){
        saida += '<br>' + espacos + caractere;
        espacos += '&nbsp &nbsp';
    }
    divSaida.innerHTML = saida;
}