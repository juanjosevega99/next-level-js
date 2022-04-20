// groupBy

// export default
function groupBy(values, iteratee) {
  const obj = {};

  const isFunction = typeof iteratee === 'function';

  for (const value of values) {
    const key = isFunction ? iteratee(value) : value[iteratee];

    obj[key] ??= [];
    obj[key].push(value);
  }

  return obj;
}

const xd = groupBy([6.1, 2.4, 3.5], Math.floor());
console.log("🚀 ~ file: index.js ~ line 20 ~ xd", xd)
