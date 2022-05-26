const strArr = ['1, 3, 4, 7, 13', '1, 2, 4, 13, 15'];

function findIntersectionV1() {
  const strArr = ['1, 3, 4, 7, 13', '1, 2, 4, 13, 15'];

  const lists = strArr.map(str => str.split(', '));
  const firstList = lists[0];
  const secondList = lists[1];

  const matchMap = {};
  const resultArr = [];

  firstList.forEach(num => (matchMap[num] = true));

  secondList.forEach(num => {
    if (matchMap[num]) {
      resultArr.push(num);
    }
  });

  if (resultArr.length > 0) {
    return resultArr.join(',');
  }

  return false;
}

function findIntersectionV2() {
  const firstArray = strArr[0].split(', ');
  const secondArray = strArr[1].split(', ');
  const result = firstArray.filter(x =>
    secondArray.find(firstArray => firstArray === x)
  );
  return result.length > 0 ? result.join(',') : 'false';
}

console.log(findIntersectionV2(strArr));
