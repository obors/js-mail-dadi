// check della mail nella lista
var newMail = prompt("Ciao , vediamo se sei nella lista :)?");

//creazione dell´array proba <data base mails>
var mails = ['p.pippo@hotamail.org', 'v2020bianco@amail.co', 'ochiocciola@oil.com', 'ochiocciola@oil.com', 'p.pippozzo200@rootamail.org', "pozzo200@rootamail.org", 'orchiola@oil.com', 'ochiocciola800@oil.com', 'ochiocciola8@oil.com', 'oca8080@oil.com'];
console.log(mails);



//confermma della presenza della mail
//conferma mail non presente nella lista
for (var i = 0; i < mails.length; i++) {
 if (newMail==mails[i])
 alert("Complimenti mail riscontrata !!!")
}else if (newMail!=mails[i]) {
 alert("Siamo spiacenti mail non riscontrata !!!")
}


//inserimento di un´ulteriore mail nella lista
var newMail = prompt("Ti andrebbe di aggiungere la tua mail per ricevere ogni tipo di spam?");
mails.push(newMail);


// for (var i = 0; i > mails.length; i++) {
// if (newMail!=mails[i]);
// alert("Spiacenti mail non riscontrata !!!");
// }




//Confesso di essermi incasinato immensamente.... faccio ora fatica a capire quello che e vero e quello che e falso //debugger// ha aiutato ma incasinato nello stesso tempo passo al l´altro
