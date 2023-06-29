const userName = 'Aniket';
const twitter = 'andjak78';
const topic = 'react JS';

function upper(static, ...dynamic) {
  dynamic.forEach((value, index) => {
    dynamic[index] = value.toUpperCase();
  });

  let str = static[0];

  for (let i = 0; i < dynamic.length; i++) {
    str += dynamic[i] + static[i + 1];
  }

  console.log(str);
}

// console.log(upper`Hello ${userName} (${twitter}), welcome to ${topic}`);

// const longString = `                            Hello ${userName} (${twitter}), welcome to ${topic}                               `;

// console.log(longString);

// console.log(longString.trimEnd());
// console.log(longString.trim());

/**
 *
 * Destructring
 *
 */

/**
 *  Imperative approch
 */
function data() {
  return [1, 2, 3, 4, 5];
}

var temp = data();

const firstOld = temp[0];
const secondOld = temp[1];

// console.log('First', firstOld, 'and Second', secondOld);

/**
 *  Declarative approch
 */

const amount = data();

const tempArray = [];

tempArray[0] = amount[0];
tempArray[2] = amount[1];
tempArray[10] = amount[2];
tempArray[50] = amount[3];

// console.log(tempArray[49]);

/**
 *  Swap values between variables
 */

let a = 10;
let b = 20;

[a, b] = [b, a];

// console.log(a, b);

/**
 * Object destructring
 *
 */

function objData() {
  return { a: 1, b: 3, c: 5 };
}

const { a: objFrist, b: objSecond } = objData();

//console.log(objFrist, objSecond);

// Name argument
function lookupRecord({ store = null, id = null }) {
  if (store && id) {
    console.log(store);
    console.log(id);
  } else {
    console.log('Something is missing');
  }
}

lookupRecord({ id: 300, store: 'person-record' });

lookupRecord({ id: 600, store: 'Record-600' });

/***
 *  Find Index
 * Find in array
 */

const testArray = [1, 2, 3, 4, 5, 6, 7];

console.log(testArray.findIndex((ele) => ele >= 6));
console.log(testArray.find((ele) => ele > 6));
