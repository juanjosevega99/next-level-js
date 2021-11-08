const helloName = {
  name: 'Juan',
  hello: () => console.log(`Hello ${helloName.name}`)
};

helloName.hello();
helloName.name = 'Jose';
helloName.hello();

Object.freeze(helloName);
helloName.name = 'Vega';
helloName.hello();

const citiesList = ['Medellin', 'Cartagena', 'Santa Marta', 'Bogota', 'Nuqui'];

function topRepeatedCities(numCities) {
  const cities = {};
  citiesList.forEach(city => {
    cities[city] = !cities[city] ? 1 : (cities[city] += 1);
  });

  return Object.keys(cities)
    .map(city => ({ name: city, times: cities[city] }))
    .sort((a, b) => b.times - a.times)
    .slice(0, numCities)
    .map(city => city.name);
}

topRepeatedCities(5);
console.log(topRepeatedCities(5));
