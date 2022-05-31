function countAge() {
  const data = 'key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47';
  let count = 0;

  data.match(/age=[0-9]{1,2}/g).forEach(age => {
    const a = age.match(/[0-9]{1,2}/g);
    if (+a >= 50) {
      count++;
    }
  });
  return count;
}

console.log(countAge());
