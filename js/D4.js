/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let area = function area(l1, l2) {
	return l1 * l2;
};

let lunghezza = 5;
let larghezza = 10;
let areaDelRettangolo = area(lunghezza, larghezza);

console.log("ES:1 " + areaDelRettangolo);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let crazySum = function (a, b) {
	if (a === b) {
		return (a + b) * 3;
	} else {
		return a + b;
	}
};
console.log("ES:2 " + crazySum(5, 5));
console.log("ES:2 " + crazySum(5, 6));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(a) {
	let differenza = Math.abs(a - 19);
	if (a > 19) {
		return differenza * 3;
	} else {
		return differenza;
	}
}

console.log("ES:3 " + crazyDiff(15));
console.log("ES:3 " + crazyDiff(20));
console.log("ES:3 " + crazyDiff(25));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let boundary = function (n) {
	if ((n >= 20 && n <= 100) || n === 400) {
		return true;
	} else {
		return false;
	}
};
"ES:4 " + console.log("ES:4 " + boundary(50));
console.log("ES:4 " + boundary(400));
console.log("ES:4 " + boundary(101));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(str) {
	if (str.startsWith("EPICODE")) {
		return str;
	} else {
		return "EPICODE " + str;
	}
}
console.log("ES:5");
console.log(epify("Ciao! str alterata"));
console.log(epify("EPICODE Ciao str non alterata"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(num) {
	if (num % 3 === 0 || num % 7 === 0) {
		return true;
	} else {
		return false;
	}
}

console.log("ES:6 " + check3and7(9));
console.log("ES:6 " + check3and7(14));
console.log("ES:6 " + check3and7(10));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
	return str.split("").reverse().join("");
}

console.log("ES:7 " + reverseString("Le frasi palindrome non sono le ideali per questo esempio"));
console.log("ES:7 " + reverseString("I topi non avevano nipoti"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str) {
	return str
		.split(" ")
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(" ");
}

console.log("ES:8 " + upperFirst("ciao a tutti"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
	return str.slice(1, -1);
}

console.log("ES:9 " + cutString("Hello"));
console.log("ES:9 " + cutString("EPICODE"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
	let randomNumbers = [];
	for (let i = 0; i < n; i++) {
		randomNumbers.push(Math.floor(Math.random() * 11));
	}
	return randomNumbers;
}

console.log("ES:10 " + giveMeRandom(5));
console.log("ES:10 " + giveMeRandom(10));
console.log("ES:10 " + giveMeRandom(100));
