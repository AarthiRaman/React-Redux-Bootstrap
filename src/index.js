import React from "react";
import ReactDOM from "react-dom";

import Container from "react-bootstrap/Container";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Footer />
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
