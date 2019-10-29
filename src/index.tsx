import * as React from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader/root";
import "./global-styles.sass";
import Header from "components/Header";
import Home from "components/Home";

const App = (): JSX.Element => {
  const LanguageSelector = (): JSX.Element => (
    <a id="language-selector">
      <i className="fas fa-language" />
    </a>
  );

  const Footer = (): JSX.Element => (
    <footer id="footer">© 2019 Kevin Caro Silva</footer>
  );

  return (
    <>
      <LanguageSelector />
      <Header />
      <Home />
      <Footer />
    </>
  );
};

render(React.createElement(hot(App)), document.getElementById("root"));
