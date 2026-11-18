// Task 3: BankAccount class
class BankAccount {
  #balance = 0;
  constructor(owner, openingBalance = 0) {
    this.owner = owner;
    this.#balance = openingBalance;
    this.history = [];
  }
  deposit(amount) {
    if (amount <= 0) return console.log("Invalid deposit amount");
    this.#balance += amount;
    this.history.push(`Deposited ${amount}`);
  }
  withdraw(amount) {
    if (amount > this.#balance) return console.log("Insufficient balance");
    this.#balance -= amount;
    this.history.push(`Withdrew ${amount}`);
  }
  get balance() { return this.#balance; }
}
const acc = new BankAccount("Anshika", 1000);
acc.deposit(500);
acc.withdraw(300);
acc.withdraw(5000);
acc.deposit(-10);
console.log(`${acc.owner}'s balance: ${acc.balance}`);
console.log("History:", acc.history);
console.log("Direct access to balance field:", acc["#balance"]);