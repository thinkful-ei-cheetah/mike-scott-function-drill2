'use strict';

function jediName(firstName, lastName) {
  return lastName.slice(0, 3) + firstName.slice(0, 2);
}

// console.log(jediName('Scott', 'Dowding'));

function beyond(num) {
  if (num === Infinity || num === -Infinity) {
    console.log('And beyond');
  } else if (num > 0) {
    console.log('To infinity');
  } else if (num < 0) {
    console.log('To negative infinity');
  } else {
    console.log('Staying home');
  }
}

// beyond(Infinity);
// beyond(-Infinity);
// beyond(-1);
// beyond(1);
// beyond(0);


function decode(code) {
  let decodeWord = '';
  const words = code.split(' ');
  words.forEach(element => {
    if (element[0] === 'a') {
      decodeWord += element[1];
    }
    else if (element[0] === 'b') {
      decodeWord += element[2];
    }
    else if (element[0] === 'c') {
      decodeWord += element[3];
    }
    else if (element[0] === 'd') {
      decodeWord += element[4];
    }
    else {
      decodeWord += ' ';
    }
  });
  return decodeWord;
}

// console.log(decode('craft block argon meter bells brown croon droop'));

