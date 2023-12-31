// event capturing / also know as event trikleing

// bubbling up and tickling down

// div#grand parent
// div#parent
// div#child

// on click of child bubbling up -> child->parent->grandparent
// and same event capturing will grandparent -> parent-> child

// on parent of child bubbling up -> parent->grandparent
// and same event capturing will parent-> child

// true - capturing down
// false - bubbling up

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grand parent");
  },
  true // true || false
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent");
  },
  false // true || false
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child");
  },
  true // true || false
);

// false
// true
// false

// then op is while click on child
// parent
// child
// grand parent

// false
// true
// true
// then op is while click on child
// parent
// child
// grand parent

// true
// false
// true
// then op is while click on child
// grand parent
// child
// parent

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grand parent");
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("parent");
    e.stopPropagation();
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child");
  },
  false
);
// false
// false -> e.stopPropagation();
// false
// then op is while click on child
// child
// parent

// false
// false
// false -> e.stopPropagation();
// then op is while click on child
// child

// true
// true -> e.stopPropagation();
// true
// then op is while click on child
// grand parent
// parent
