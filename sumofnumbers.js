const test = [1, 2, 3, 4, 5];

function sumFor(sample) {
  let sum = 0;
  for (let i = 0; i < sample.length; i++) {
    sum += sample[i];
  }
  return sum;
}
function sumWhile(sample) {
  let sum = 0;
  let i = 0;
  while (i < sample.length) {
    sum += sample[i];
    i++;
  }
  return sum;
}
function sumRecursion(sample, length) {
  if (length > 0) {
    return (sumRecursion(sample, length - 1) + sample[length - 1]);
  }
  return 0;
}
function sumTheSimpleWay(sample) {
  let sum = 0;
  sum = _.reduce(sample, function (memo, num) {
    return memo + num;
  });
  return sum;
}

console.log(sumFor(test));
console.log(sumWhile(test));
console.log(sumRecursion(test, test.length));
console.log(sumTheSimpleWay(test));

// 13:33
