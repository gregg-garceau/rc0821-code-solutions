/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  var accounts = this.accounts;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].number === number) {
      return accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalAccounts = this.accounts;
  var totalBalance = 0;

  for (let i = 0; i < totalAccounts.length; i++) {
    totalBalance += totalAccounts[i].getBalance();
  }
  return totalBalance;
};
