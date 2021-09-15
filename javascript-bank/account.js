/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var deposit = new Transaction('deposit', amount);
    this.transactions.push(deposit);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var withdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawal);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  var transactions = this.transactions;
  var deposits = 0;
  var withdrawals = 0;
  if (transactions.length !== 0) {
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].type === 'deposit') {
        deposits += transactions[i].amount;
      } else if (transactions[i].type === 'withdrawal') {
        withdrawals += transactions[i].amount;
      }
    }
  }
  var balance = deposits - withdrawals;
  return balance;
};
