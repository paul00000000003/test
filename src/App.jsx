import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { karakters: [], schermGeladen: false };
  }

  render() {
    return <h1>Dit is het eerste hoofdstuk</h1>;
  }
}

export default App;
