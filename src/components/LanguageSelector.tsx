import * as React from "react";
import styles from "./LanguageSelector.sass";

type Props = {
  changeLanguage: (lang: string) => void;
  supportedLanguages: Array<string>;
}

type State = {
  showLanguages: boolean;
}

export default class LanguageSelector extends React.Component<Props, State> {
  state = {
    showLanguages: false
  };

  private toggleShowLanguages = (): void => {
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
    const { supportedLanguages } = this.props;

    const langClasses = showLanguages ? styles.shown : styles.hidden;
    const iconClasses = showLanguages ? styles.active : styles.inactive;

    return (
      <div id={styles.languageSelector}>
        <i className={`fas fa-language ${iconClasses}`}
           onClick={this.toggleShowLanguages}
           data-testid="toggle-show-languages"/>
        {
          showLanguages &&
          supportedLanguages.map((lang, i) =>
            <a key={i} className={langClasses} onClick={this.changeLanguage(lang)}>
              {lang}
            </a>
          )
        }
      </div>
    );
  }
}