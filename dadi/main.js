alert ('Ciao , che dici giocchiamo a dadi ?')
// solito alert del hello x il check



var num = Math.floor(Math.random() * 6)+1;
console.log(num);
//attribuzione del codice random

var numero = prompt('Inserisci il tuo numero')
console.log(numero);
//attribuzione del codice manuale

if (num == 6 || numero == 6){
  alert("Complimenti hai Vinto !!!")
} else {
  console.log("Siamo spiacenti non hai Vinto !!!");
}
//stampa risultato
