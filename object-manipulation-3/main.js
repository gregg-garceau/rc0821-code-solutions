console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [
  {
    name: 'Gregg',
    hand: null
  },
  {
    name: 'John',
    hand: null
  },
  {
    name: 'Mary',
    hand: null
  },
  {
    name: 'Cynthia',
    hand: null
  }
];

var deck = [
  {
    rank: 'Ace',
    suit: 'Spades'
  },
  {
    rank: 'Ace',
    suit: 'Clubs'
  },
  {
    rank: 'Ace',
    suit: 'Hearts'
  },
  {
    rank: 'Ace',
    suit: 'Diamonds'
  },
  {
    rank: 'Two',
    suit: 'Spades'
  },
  {
    rank: 'Two',
    suit: 'Clubs'
  },
  {
    rank: 'Two',
    suit: 'Hearts'
  },
  {
    rank: 'Two',
    suit: 'Diamonds'
  },
  {
    rank: 'Three',
    suit: 'Spades'
  },
  {
    rank: 'Three',
    suit: 'Clubs'
  },
  {
    rank: 'Three',
    suit: 'Hearts'
  },
  {
    rank: 'Three',
    suit: 'Diamonds'
  },
  {
    rank: 'Four',
    suit: 'Spades'
  },
  {
    rank: 'Four',
    suit: 'Clubs'
  },
  {
    rank: 'Four',
    suit: 'Hearts'
  },
  {
    rank: 'Four',
    suit: 'Diamonds'
  },
  {
    rank: 'Five',
    suit: 'Spades'
  },
  {
    rank: 'Five',
    suit: 'Clubs'
  },
  {
    rank: 'Five',
    suit: 'Hearts'
  },
  {
    rank: 'Five',
    suit: 'Diamonds'
  },
  {
    rank: 'Six',
    suit: 'Spades'
  },
  {
    rank: 'Six',
    suit: 'Clubs'
  },
  {
    rank: 'Six',
    suit: 'Hearts'
  },
  {
    rank: 'Six',
    suit: 'Diamonds'
  },
  {
    rank: 'Seven',
    suit: 'Spades'
  },
  {
    rank: 'Seven',
    suit: 'Clubs'
  },
  {
    rank: 'Seven',
    suit: 'Hearts'
  },
  {
    rank: 'Seven',
    suit: 'Diamonds'
  },
  {
    rank: 'Eight',
    suit: 'Spades'
  },
  {
    rank: 'Eight',
    suit: 'Clubs'
  },
  {
    rank: 'Eight',
    suit: 'Hearts'
  },
  {
    rank: 'Eight',
    suit: 'Diamonds'
  },
  {
    rank: 'Nine',
    suit: 'Spades'
  },
  {
    rank: 'Nine',
    suit: 'Clubs'
  },
  {
    rank: 'Nine',
    suit: 'Hearts'
  },
  {
    rank: 'Nine',
    suit: 'Diamonds'
  },
  {
    rank: 'Ten',
    suit: 'Spades'
  },
  {
    rank: 'Ten',
    suit: 'Clubs'
  },
  {
    rank: 'Ten',
    suit: 'Hearts'
  },
  {
    rank: 'Ten',
    suit: 'Diamonds'
  },
  {
    rank: 'Jack',
    suit: 'Spades'
  },
  {
    rank: 'Jack',
    suit: 'Clubs'
  },
  {
    rank: 'Jack',
    suit: 'Hearts'
  },
  {
    rank: 'Jack',
    suit: 'Diamonds'
  },
  {
    rank: 'Queen',
    suit: 'Spades'
  },
  {
    rank: 'Queen',
    suit: 'Clubs'
  },
  {
    rank: 'Queen',
    suit: 'Hearts'
  },
  {
    rank: 'Queen',
    suit: 'Diamonds'
  },
  {
    rank: 'King',
    suit: 'Spades'
  },
  {
    rank: 'King',
    suit: 'Clubs'
  },
  {
    rank: 'King',
    suit: 'Hearts'
  },
  {
    rank: 'King',
    suit: 'Diamonds'
  }
];

var shuffledDeck = _.shuffle(deck);
var cardsUsed = 0;

for (let i = 0; i < players.length; i++) {
  var handArray = [];

  var indexOne = Math.floor(Math.random() * (52 - cardsUsed));
  cardsUsed++;
  var cardOne = shuffledDeck[indexOne];
  shuffledDeck.splice(cardOne, 1);

  var indexTwo = Math.floor(Math.random() * (52 - cardsUsed));
  cardsUsed++;
  var cardTwo = shuffledDeck[indexTwo];
  shuffledDeck.splice(cardTwo, 1);

  handArray.push(cardOne);
  handArray.push(cardTwo);
  players[i].hand = handArray;
}

var mostPoints = 0;
var winningPlayer = '';
for (let j = 0; j < players.length; j++) {
  var playerPoints = 0;
  var playerCardOne = players[j].hand[0].rank;
  var playerCardTwo = players[j].hand[1].rank;

  switch (playerCardOne) {
    case 'Ace':
      playerPoints += 11;
      break;
    case 'Two':
      playerPoints += 2;
      break;
    case 'Three':
      playerPoints += 3;
      break;
    case 'Four':
      playerPoints += 4;
      break;
    case 'Five':
      playerPoints += 5;
      break;
    case 'Six':
      playerPoints += 6;
      break;
    case 'Seven':
      playerPoints += 7;
      break;
    case 'Eight':
      playerPoints += 8;
      break;
    case 'Nine':
      playerPoints += 9;
      break;
    case 'Ten':
    case 'Jack':
    case 'Queen':
    case 'King':
      playerPoints += 10;
      break;
  }

  switch (playerCardTwo) {
    case 'Ace':
      playerPoints += 11;
      break;
    case 'Two':
      playerPoints += 2;
      break;
    case 'Three':
      playerPoints += 3;
      break;
    case 'Four':
      playerPoints += 4;
      break;
    case 'Five':
      playerPoints += 5;
      break;
    case 'Six':
      playerPoints += 6;
      break;
    case 'Seven':
      playerPoints += 7;
      break;
    case 'Eight':
      playerPoints += 8;
      break;
    case 'Nine':
      playerPoints += 9;
      break;
    case 'Ten':
    case 'Jack':
    case 'Queen':
    case 'King':
      playerPoints += 10;
      break;
  }

  console.log(players[j].name + ' has: ' + playerPoints + ' points!');

  if (playerPoints > mostPoints) {
    mostPoints = playerPoints;
    winningPlayer = players[j].name;
  }
}

console.log('The winner is ' + winningPlayer + ' with ' + mostPoints + ' points!');
