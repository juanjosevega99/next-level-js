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
