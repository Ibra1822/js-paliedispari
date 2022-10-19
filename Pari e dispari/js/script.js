let scelta = prompt('Scegli pari o dispari').toLocaleLowerCase(); 

let sceltaN = parseInt(prompt('Inserisci un numero da 1 a 5'));

let pcRandom =  casuale()

let somma = calcolo(sceltaN , pcRandom);

let conclusione = fine();

console.log('Quindi',conclusione);

console.log('somma',somma);

console.log('pc random',pcRandom);

console.log('scelta', scelta );

console.log('scelta',sceltaN);

let output = document.querySelector('.container')

output.prepend(`Hai scelto  ${scelta} e il numero che hai scelto è ${sceltaN} mentre il tuo pc ha scelto è ${pcRandom}  `)

let h1 = document.createElement('h1')


h1.innerHTML= conclusione;

output.append(h1)


let btn = document.getElementById('btn');


btn.addEventListener('click', function(){location.reload()});

/**************************************************/
/**************************************************/
/**************************************************/
/**************************************************/



function casuale (){

   return Math.ceil(Math.random() * 5 )

}

function calcolo (n1,n2) {

 let sum =  n1 + n2

 return sum

} 

function fine() {
  
  if(somma % 2 === 0 && scelta === 'pari' ){
    
    return 'Hai vinto la tua scelta è giusta il risultato è pari Complimenti '

  }else if(somma % 2 === 0 && scelta === 'dispari'){
  
    return 'Hai scelto dispari ma il risultato è pari ci dispiace ma hai Perso'
  
  }else if(somma % 2 !== 0 && scelta === 'pari'){

    return 'Hai scelto pari ma il risultato è dispari ci dispiace ma hai Perso'
  
  }else if(somma % 2 !== 0 && scelta === 'dispari'){

    return 'Hai scelto dispari ed hai vinto Complimenti'
  
  }else{
    return 'devi dire pari o dispari e scegliere un numero!'
  }

}