function sum(x) {
  return function (y) {
    if (y) {
      return sum(x + y);
    }
    return x;
  };
}
console.log(sum(1)(2)(3)(4)()); // 10
let total = sum(1)(2)(3)(4);
total(); //10

//   short hand

const sum2 = (x) => (y) => y ? sum(x + y) : x;
sum2(1)(2)(3)(4);

console.log(
  "🚀 ~ file: 8-sum(1)(2)(3)(4).js:23 ~ sum2(1)(2)(3)(4):",
  sum2(1)(2)(3)(4)() // 10
);
