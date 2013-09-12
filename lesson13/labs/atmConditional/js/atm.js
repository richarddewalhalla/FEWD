/*

This is a banking application. This program will update your balance with your deposits and withdrawls.

-	Create 3 variables: balance, transaction, and amount.
-	The starting account balance is 1000$.
-	Ask for their transaction type (deposit, withdrawl).
-	Ask for the amount to withdraw or deposit.
-	Depending on their transaction choice either add or substract the balance. 
-	Print the new balance to the console.
*/

var balance; = 1000;
var transaction; 
var amount;

transaction = prompt('(d)eposit or (w)ithdrawl or (q)uit?');
amount = parseInt(prompt('How much?'));

if (transaction == 'd') {
	balance = balance + amount;
} else if (transaction == 'w') {
	balance = balance - amount;
}	else {
	console.log('error on input!');
}

console.log('your balance: $' + balance);