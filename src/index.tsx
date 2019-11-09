import * as React from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader/root";
import { IntlProvider } from "react-intl";
import Header from "components/Header";
import Home from "components/Home";
import LanguageSelector from "components/LanguageSelector";

import "./global-styles.sass";
import fr from "./assets/locales/fr.json";
import en from "./assets/locales/en.json";

const messages: Record<string, Record<string, string>> = {
  en,
  fr
};

type AppState = {
  locale: string;
}

class App extends React.Component <null, AppState> {
  state = {
    locale: navigator.language.split(/[-_]/)[0]  // language without region code
  };

  changeLanguage = (lang: string): void => {
    this.setState({
      locale: lang
    });
  };

  render(): JSX.Element {
    const Footer = (): JSX.Element => (
      <footer id="footer">© 2019 Kevin Caro Silva</footer>
    );

    const currentMessages = messages[this.state.locale] || messages["en"];

    return (
      <>
        <IntlProvider locale={navigator.language} messages={currentMessages} defaultLocale={"en"}>
          <LanguageSelector changeLanguage={this.changeLanguage}/>
          <Header/>
          <Home/>
          <Footer/>
        </IntlProvider>
      </>
    );
  }
}

render(React.createElement(hot(App)), document.getElementById("root"));
