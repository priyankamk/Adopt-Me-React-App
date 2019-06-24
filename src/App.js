// throw new Error("lol");
const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Jessi"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Pomeranian")
  ]);
};

const App = () => {
  return React.createElement(
    "div", // what kind of element is that
    { id: "something-important" }, // empty object - all the attributes that you want to give it to the components. // pass into the child element into the div.
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet), //if you dint aff {} or adopt me or any other name - it means it doesnot have children.
      React.createElement(Pet),
      React.createElement(Pet)
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
