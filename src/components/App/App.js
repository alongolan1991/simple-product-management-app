import React from "react";
import "./App.css";
import Header from "../Header/Header.js";
import ProductContainer from "../Products/ProductCotainer";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <ProductContainer />
      </>
    );
  }
}

export default App;
