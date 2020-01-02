import * as React from "react";
import { IntlProvider } from "react-intl";
import Header from "components/Header";
import Home from "components/Home";
import LanguageSelector from "components/LanguageSelector";

import fr from "assets/translations/fr.json";

type State = {
  locale: string;
}

const supportedLanguagesBackingArray = ["en", "fr"] as const;
const supportedLanguages: Array<string> = [...supportedLanguagesBackingArray];
type SupportedLanguage = typeof supportedLanguagesBackingArray[number];

export default class App extends React.Component <{}, State> {

  private readonly defaultLocale: SupportedLanguage = "en";
  private readonly translations: Record<SupportedLanguage, Record<string, string>> = {
    en: null, // default locale used in application
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
    const locale: SupportedLanguage = supportedLanguages.includes(this.state.locale) ?
      this.state.locale as SupportedLanguage : this.defaultLocale;

    const Footer = (): JSX.Element => (
      <footer id="footer"><span>© 2019 Kevin Caro Silva</span></footer>
    );

    return (
      <>
        <IntlProvider locale={locale} messages={this.translations[locale]} defaultLocale={this.defaultLocale}>
          <LanguageSelector changeLanguage={this.changeLanguage} supportedLanguages={supportedLanguages}/>
          <Header/>
          <Home/>
          <Footer/>
        </IntlProvider>
      </>
    );
  }
}

