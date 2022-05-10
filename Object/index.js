const dog = {
  breed: 'husky',
  age: 6
};

for (const [key, value] of Object.entries(dog)) {
  console.log(`${key}: ${value}`);
}

for (const key of Object.keys(dog)) {
  console.log(`${key}`);
}
