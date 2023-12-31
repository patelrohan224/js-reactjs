let nameObj = {
  fname: "rohan",
  lname: "patel",
  print: function () {
    console.log(this.fname + this.lname); // rohanpatel
  },
};

nameObj.print();

let name2 = { fname: "rohan", lname: "a" };

// call
// function borrowing
nameObj.print.call(name2); // rohana

let fn = function (pararm1) {
  console.log(this.fname + this.lname + pararm1); // rohanpatel
};

fn.call(nameObj, "arg1"); //rohanpatelarg1
fn.call(name2, "arg1"); //rohanaarg1

// apply ( diff between call and apply is way passing arguments )

let fn2 = function (pararm1, pararm2, pararm3) {
  console.log(this.fname + this.lname + pararm1 + pararm2 + pararm3); // rohanpatel
};

fn2.apply(nameObj, ["arg1", "2", "3"]); //rohanpatelarg123
fn2.apply(name2, ["arg1", "2", "3"]); //rohanaarg123

// bind method (Same as call instead of direclty calling method)
// bind give bind this method which fn2 and return copy of that method
// it dosent directly call method instead return fn which we need to invoke later

let fnBindMethod = fn2.bind(name2, "arg1", "2", "3");
fnBindMethod(); //rohanaarg123
