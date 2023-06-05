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

console.log('First', firstOld, 'and Second', secondOld);

/**
 *  Declarative approch
 */

const [first, second, third, forth, fifth, six] = data();

console.log(first, second, third, forth, fifth, six);
