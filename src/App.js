// throw new Error("lol");
const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

const App = () => {
  return React.createElement(
    "div", // what kind of element is that
    { id: "something-important" }, // empty object - all the attributes that you want to give it to the components. // pass into the child element into the div.
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Huskus",
        animal: "Dog",
        breed: "Pomeranian"
      }), //if you dint use {} or adopt me or any other name: "Jessi", animal: "Dog", breed: "Pomeranian" /type of animal/or attributes - it means it doesnot have children.
      React.createElement(Pet, {
        name: "Jessi",
        animal: "Bird",
        breed: "Parrot"
      }),
      React.createElement(Pet, {
        name: "Peppy",
        animal: "cat",
        breed: "Mixed"
      })
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
