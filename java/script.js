// // Datorn “tänker” på ett nummer mellan 0 och 100
// En spelare får gissa vilket nummer
// Spelaren får veta om hen gissade för hög eller lågt 
// Spelaren får fortsätta gissa tills hen gissar rätt - då får man veta hur många gissningar det tog

let randomNumber = Math.round(Math.random() * 100);
let Antalgissningar = 0
console.log = randomNumber

const btn = document.querySelector('#guess');
btn.addEventListener('click', handleGuess)
console.log = randomNumber
function handleGuess(event) {
    event.preventDefault();

    const input = document.querySelector('#guess-input');
    const guess = input.value;
    input.value = '';




    Antalgissningar++;
    if (guess > randomNumber) {
        alert('Gissa lägra');
    }
    else if (guess < randomNumber) {
        alert('Gissa högre');

    }

    else if (guess == randomNumber) {
        alert(`Du gissade rätt! Det tog dig ${Antalgissningar} försök`);
        randomNumber = Math.round(Math.random() * 100);
        Antalgissningar = 0;

    }




}