import * as React from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader/root";
import { IntlProvider } from "react-intl";
import Header from "components/Header";
import Home from "components/Home";
import LanguageSelector from "components/LanguageSelector";

import "./global-styles.sass";
import fr from "./assets/translations/fr.json";

type AppState = {
  locale: string;
}

class App extends React.Component <null, AppState> {

  private readonly defaultLocale: string = "en";

  private readonly translations: Record<string, Record<string, string>> = {
    fr
  };

  state = {
    locale: navigator.language.split(/[-_]/)[0]  // locale without region code
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

    const currentMessages = this.translations[this.state.locale] || this.translations[this.defaultLocale];

    return (
      <>
        <IntlProvider locale={this.state.locale} messages={currentMessages} defaultLocale={this.defaultLocale}>
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
