

let btn = document.getElementById('btn');

let testo = document.getElementById('testo')

let h1 = document.createElement('h1')

h1.innerHTML=`Inserisci qua sotto una parola palindroma è il pc ti dara la conferma se lo è`;

let title = document.querySelector('.container-title')

title.append(h1)

let ris= document.querySelector('.ris');


btn.addEventListener('click', function(){
  
  // chiedo all'utente di inserire una parola, e salvo il valore
  let parolaInserita = testo.value;
  
  // //dichiaro la funzione di nome isPalindroma, che prende come argomento una parola
  function isPalindroma (checkPali){
    let parolaInvertita = ''
   
    for (let i =  checkPali.length - 1; i >= 0; i-- ){
    parolaInvertita += checkPali[i];  
     
     }
     return parolaInvertita;
     
   }  
     
   if(parolaInserita === isPalindroma(parolaInserita)) {
  
    ris.innerHTML =` 
    La parola che hai inserito <strong> ${parolaInserita} </strong> è palindroma
    
    `
  } else {

    ris.innerHTML =` 
    La parola che hai inserito <strong> ${parolaInserita} </strong> non è palindroma
    
    `
   }  
  
  
  
  
  
})   



