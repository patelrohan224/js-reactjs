// debouncing method

let counter = 0;
const getData = () => {
  console.log("counter", counter++);
};

const debounce = (fn, i) => {
  //   return function () {
  //     setTimeout(() => {
  //         fn()
  //     }, i);
  //   };

  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer); // if next key stroke happen current one will clear
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, i);
  };
};

const debounceCall = debounce(getData, 300);
