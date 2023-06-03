const userName = 'Aniket';
const twitter = 'andjak78';
const topic = 'react JS';

function upper(strings, ...values) {
  let upperCase;
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      upperCase += String(values[i - 1]).toUpperCase();
    }
    upperCase += strings[i];
  }

  return upperCase;
}

console.log(
  upper`Hello ${userName} (${twitter}), welcome to ${topic}
`
);
