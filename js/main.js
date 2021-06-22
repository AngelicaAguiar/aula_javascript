function clicou(){
    document.getElementById("agradecimento").innerHTML ="<b>Obrigada por clicar</b>";
}


function redirecionar(){
        window.open("https://globallabs.academy/");
        window.location.href = "https://globallabs.academy/";
}


function trocar(){
    Element.innerHTML = "oBRIGADA POR PASSAR O MOUSE";
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    // alert("trocar texto");
}

function voltar(){
    Element.innerHTML = "PASSE O MOUSE AQUI";
}

function load(){
    alert("pagina carregada");
}

function funcaochange(Elemento){
    console.log(Elemento.value)
}



    //console.log(document.getElementById("Agradecimento"));

    // alert("Obrigada por clicar");








/*function soma(n1,n2){
    return n1+n2;
}

function validaIdade (idade){
    var validar;
    if (idade>=18){
        validar =true
    }else{
        validar=false
    }
    return validar;
}

var idade = prompt ("Qual sua idade?");
console.log(validaIdade(idade));
*/


/*var d= new Date();
alert(d.getMinutes());
alert(d.getMonth())
*/



/*var count;
for(count=0; count<=5; count++)
alert (count);
*/


/*var count =0;
while(count<=5){
    console.log(count);
    alert(count);
    count ++;
};
*/

/*var count =0;
while(count<=5){
    console.log(count);
    count = count +1;
};




/*var idade = prompt ("Qual sua idade?");
if (idade >=18) {
    alert ("Maior de idade");
}
else{
    alert ("Menor de idade");
}
*/



/*var frutas = [{nome:"maca", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log (frutas);
alert(frutas[1].nome);
*/



/*var fruta = {nome:"maca", cor:"vermelha"}
console.log (fruta.nome);
alert(fruta.cor);
*/

/*var lista = ["maça", "Pera", "laranja"];
lista.push ("Uva");
lista.pop();
console.log (lista);
console.log (lista.length);
console.log (lista.reverse());
console.log(lista);
console.log(lista.toString());
console.log(lista.join (" | "));
*/


/*var nome = "Angelica Aguiar";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
alert (nome +"tem" +idade + "anos");
alert (idade+idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
alert (frase.replace("Japão","Brasil"));
*/