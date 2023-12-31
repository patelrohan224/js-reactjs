// Currying is a functional programming technique that transforms a
// function with multiple arguments into a sequence of functions,
// each taking a single argument

// 2 ways of functionl currying ( bind and closure )

// using bind method
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyBind = multiply.bind(this, 1);
multiplyBind(2); //2

let multiplyBind2 = multiply.bind(this, 1, 6);
multiplyBind2(10); //6

let multiplyBind3 = multiply.bind(this);
multiplyBind3(2, 5); //10

// using fn closure

let multiplyFn = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyClFn = multiplyFn(2);
multiplyClFn(3); // 6
multiplyFn(2)(3); //6
