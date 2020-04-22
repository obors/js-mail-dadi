alert ('Ciao , che dici giocchiamo agli dadi ?')
// solito alert del hello x il check



var num = Math.floor(Math.random() * 6)+1;
console.log(num);
//attribuzione del codice random

var numero = prompt('Inserisci il tuo numero')
console.log(numero);
//attribuzione del codice manuale

if (numero >=1 && numero <= 6){ //&& num >= 1 && num <= 6){
  alert("Complimenti hai Vinto !!!")
} else if (num == numero){
  alert("Pareggio !!")
}else {
  alert("Siamo spiacenti non hai Vinto !!!");
}
//stampa risultato
