// const h1 = React.createElement(
//   "h1",
//   { id: "attributes", anything: "anything" },
//   "text"
// );
// console.log("🚀 ~ file: script.js:6 ~ h1:", h1);

/**
<div id="parent">
  <div id="child">
    <h1>h1</h1>
    <h2>h2</h2>
  </div>
  <div id="child2">
    <h1>h1</h1>
    <h2>h2</h2>
  </div>
</div>;
 */

// const div = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { id: "child" }, "h1")
//   )
// );

const div = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1"),
    React.createElement("h2", {}, "h2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1"),
    React.createElement("h2", {}, "h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div); // it will replace this root elements of html to above div
