  // chiedo all'utente di inserire una parola, e salvo il valore
   let parolaInserita = prompt('inserisci una parola palindroma').toLowerCase()

//dichiaro la funzione di nome isPalindroma, che prende come argomento una parola

 function isPalindroma (checkPali){
 let parolaInvertita = ''

 for (let i =  checkPali.length - 1; i >= 0; i-- ){
 parolaInvertita += checkPali[i];
  
  }
  return parolaInvertita;
  
}
  
if(parolaInserita === isPalindroma(parolaInserita)) {
  console.log('Parola palindroma')
} else {
  console.log('Parola non palindroma')
}

