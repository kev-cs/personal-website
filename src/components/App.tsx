import * as React from "react";
import {IntlProvider} from "react-intl";
import Header from "components/Header";
import Home from "components/Home";

import fr from "assets/translations/fr.json";
import {Footer} from "./Footer";

const supportedLanguagesBackingArray = ["en", "fr"] as const;

const supportedLanguages: Array<string> = [...supportedLanguagesBackingArray];
type SupportedLanguage = typeof supportedLanguagesBackingArray[number];

export default class App extends React.Component<
  {},
  {
    theme: string;
    locale: string;
  }
> {
  private readonly defaultLocale: SupportedLanguage = "en";
  private readonly translations: Record<
    SupportedLanguage,
    Record<string, string>
  > = {
    en: null, // default locale used in application
    fr
  };

  state = {
    theme: "light",
    locale: navigator.language.split(/[-_]/)[0] // locale without region code
  };

  private changeLanguage = (lang: string): void => {
    this.setState({
      locale: lang
    });
  };

  render(): JSX.Element {
    const locale: SupportedLanguage = supportedLanguages.includes(
      this.state.locale
    )
      ? (this.state.locale as SupportedLanguage)
      : this.defaultLocale;

    document.body.className = `theme-${this.state.theme}`;

    return (
      <>
        <IntlProvider
          locale={locale}
          messages={this.translations[locale]}
          defaultLocale={this.defaultLocale}
        >
          <Header />
          <Home />
          <Footer
            changeLanguage={this.changeLanguage}
            supportedLanguages={supportedLanguages}
          />
        </IntlProvider>
      </>
    );
  }
}
