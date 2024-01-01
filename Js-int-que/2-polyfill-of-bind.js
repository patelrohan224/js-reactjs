// polyfill is sort of broswer fall back
// ( if browser desn't have bind funciton and need to own bind function)

let nameObj = {
  fname: "rohan",
  lname: "patel",
};

const printfn = function (param1, p2) {
  console.log(this.fname + this.lname + param1 + p2);
};

let printName = printfn.bind(nameObj);
printName(); //rohanpatelundefinedundefined
printName("arg2"); //rohanpatelarg2undefined

Function.prototype.ownBindMethod = function (...args) {
  let obj = this;
  return function (...args2) {
    // this.call(args[0], ...args.slice(1));
    obj.apply(args[0], [...args.slice(1), ...args2]);
  };
};

let printNameByOwnBindMethod = printfn.ownBindMethod(nameObj, "arg1");
printNameByOwnBindMethod(); //rohanpatelarg1undefined
printNameByOwnBindMethod("arg2"); //rohanpatelarg1arg2
