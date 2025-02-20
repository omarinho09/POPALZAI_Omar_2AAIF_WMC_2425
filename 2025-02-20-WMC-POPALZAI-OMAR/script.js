
function isPrime(num) {
    if (num <= 2) {
        return false;

    }
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


const numberInput = document.getElementById('number-input');
const checkButton = document.getElementById('check-button');
const resultElement = document.getElementById('result');


let kommaFehler = 0;

checkButton.addEventListener('click', () => {
    const number = parseFloat(numberInput.value);


    if (isNaN(number)) {
        resultElement.textContent = 'Bitte geben Sie eine Zahl ein!';
        resultElement.style.color = 'red';
        return;
    }


    if (number % 1 !== 0) {
        kommaFehler++;
        if (kommaFehler >= 2) {
            resultElement.textContent = 'HAB GESAGT OHNE KOMMA STELLEN WAS VERSTEHST DU NICHT';
        } else {
            resultElement.textContent = 'Bitte geben Sie eine Zahl ohne Komma stellen!';
        }
        resultElement.style.color = 'red';
        return;
    }


    kommaFehler = 0;


    if (isPrime(Math.floor(number))) {
        resultElement.innerHTML = `Ist ${number} eine Primzahl?<br><br>JA<br>ist eine Primzahl`;
        resultElement.style.color = 'green';
    } else {
        resultElement.innerHTML = `Ist ${number} eine Primzahl?<br><br>NEIN<br>ist keine Primzahl`;
        resultElement.style.color = 'red';
    }
});