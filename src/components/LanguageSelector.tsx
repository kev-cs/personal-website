import * as React from "react";
import * as styles from "./LanguageSelector.sass";

type LanguageSelectorProps = {
  changeLanguage: (lang: string) => void;
}

type LanguageSelectorState = {
  showLanguages: boolean;
}

export default class LanguageSelector extends React.Component<LanguageSelectorProps, LanguageSelectorState> {
  state = {
    showLanguages: false
  };

  private toggleShowLangues = (): void => {
    this.setState((state) => ({
      showLanguages: !state.showLanguages
    }));
  };

  private changeLanguage(lang: string): () => void {
    return (): void => {
      const { changeLanguage } = this.props;
      const { showLanguages } = this.state;

      if (showLanguages) {
        changeLanguage(lang);
        this.setState({ showLanguages: false });
      }
    };
  }

  render(): JSX.Element {
    const { showLanguages } = this.state;
    const langClasses = showLanguages ? styles.shown : styles.hidden;
    const iconClasses = showLanguages ? styles.active : styles.inactive;

    return (
      <div id={styles.languageSelector}>
        <i className={`fas fa-language ${iconClasses}`} onClick={this.toggleShowLangues}/>
        <a className={langClasses} onClick={this.changeLanguage("fr")}>fr</a>
        <a className={langClasses} onClick={this.changeLanguage("en")}>en</a>
      </div>
    );
  }
}