// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(
	"------------------------------------------------------------------------ESERCIZI FUNCTION ENTRA------------------------------------------------------------------------"
);

function checkArray(numbers) {
	let sum = 0;
	numbers.forEach((number) => {
		if (number > 5) {
			console.log(`ES:1 EXTRA ${number} è maggiore di 5`);
			sum += number;
		} else {
			console.log(`ES:1 EXTRA ${number} non è maggiore di 5`);
		}
	});
	return sum;
}

let randomNumbers = giveMeRandom(10);
console.log("ES:1 EXTRA " + "Array generato:", randomNumbers);
let sum = checkArray(randomNumbers);
console.log("ES:1 EXTRA " + "Somma dei valori maggiori di 5:", sum);

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let shoppingCartTotal = function (shoppingCart) {
	let total = 0;
	shoppingCart.forEach((item) => {
		total += item.price * item.quantity;
	});
	return total;
};

let shoppingCart = [
	{ price: 12.99, name: "Prodotto A", id: 1, quantity: 2 },
	{ price: 4.99, name: "Prodotto B", id: 2, quantity: 1 },
	{ price: 19.99, name: "Prodotto C", id: 3, quantity: 3 },
];

let totalDue = shoppingCartTotal(shoppingCart);
console.log("ES:2 EXTRA " + "Totale dovuto:", totalDue);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart(newItem) {
	shoppingCart.push(newItem);
	return shoppingCart.length;
}

let newProduct = { price: 6.99, name: "Prodotto D", id: 4, quantity: 2 };
let newTotalItems = addToShoppingCart(newProduct);
console.log("ES:3 EXTRA " + "Numero totale di elementi nell'array:", newTotalItems);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(shoppingCart) {
	if (shoppingCart.length === 0) {
		return "Il carrello è vuoto";
	}

	let maxItem = shoppingCart[0];
	for (let i = 1; i < shoppingCart.length; i++) {
		if (shoppingCart[i].price > maxItem.price) {
			maxItem = shoppingCart[i];
		}
	}
	return maxItem;
}

let mostExpensive = maxShoppingCart(shoppingCart);
console.log("ES:4 EXTRA " + "Oggetto più costoso:", mostExpensive);

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart(shoppingCart) {
	if (shoppingCart.length === 0) {
		return null;
	}
	return shoppingCart[shoppingCart.length - 1];
}

let latestItem = latestShoppingCart(shoppingCart);
console.log("ES:5 EXTRA " + "Ultimo elemento nel carrello:", latestItem);

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
