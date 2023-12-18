const h1 = React.createElement(
  "h1",
  { id: "attributes", anything: "anything" },
  "text"
);
console.log("🚀 ~ file: script.js:6 ~ h1:", h1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);
