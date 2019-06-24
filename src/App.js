// your code is goin to go here,for now
// throw new Error("lol");
const App = () => {
  return React.createElement(
    "div", // what kind of element is that
    { id: "something-important" }, // empty object - all the attributes that you want to give it to the components. // pass into the child element into the div.
    React.createElement("h1", {}, "Adopt Me!")
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
