let scelta = prompt('Scegli pari o dispari').toLocaleLowerCase(); 

let sceltaN = parseInt(prompt('Inserisci un numero da 1 a 5'));

let pcRandom =  Math.ceil(Math.random() * 5 );

let somma = calcolo(sceltaN , pcRandom);

let conclusione = fine();

console.log('conclusione',conclusione);

console.log('somma',somma);

console.log('pc random',pcRandom);

console.log('scelta', scelta );

console.log('scelta',sceltaN);


/**************************************************/
/**************************************************/
/**************************************************/
/**************************************************/


function calcolo (n1,n2) {

 let sum =  n1 + n2

 return sum

} 

function fine() {
  
  if(somma % 2 === 0 && scelta === 'pari' ){
    
    return 'Hai vinto è pari e il risultato è pari Complimenti '

  }else if(somma % 2 === 0 && scelta === 'dispari'){
  
    return 'Hai scelto dispari ma il risultato è pari hai Perso'
  
  }else if(somma % 2 !== 0 && scelta === 'pari'){

    return 'Hai scelto pari ma il risultato è dispari hai Perso'
  
  }else if(somma % 2 !== 0 && scelta === 'dispari'){

    return 'Hai scelto dispari ed hai vinto Complimenti'
  
  }else{
    return 'devi dire pari o dispari'
  }

}