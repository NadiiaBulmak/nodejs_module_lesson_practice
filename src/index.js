function add(...numbers) {
  let sum = 0;

  for (let n of numbers) {
    sum += n;
  }

  return sum;
}

console.log(add(1, 2, 3, 10));
console.log(add(1, 2, 3, 11));
