// How to use Set to not repeat values

const frameWorks = [
  'react',
  'next',
  'nest',
  'fastify',
  'express',
  'react',
  'redux'
];

const frameWorksNotRepeated = [...new Set(frameWorks)];
console.log(frameWorksNotRepeated);

// How works set to add in string or object

const set = new Set();

set.add(1);
set.add('Lydia');
set.add({ name: 'Lydia' });

for (let item of set) {
  console.log(item + 2);
}
