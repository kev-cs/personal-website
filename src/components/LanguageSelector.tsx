import * as React from "react";
import styles from "./LanguageSelector.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

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

    const langClasses = styles.langOption;
    const iconClasses = styles.icon;

    return (
      <div id={styles.languageSelector} className={showLanguages? styles.active : styles.inactive}>
        <FontAwesomeIcon icon={faLanguage} className={iconClasses}
           onClick={this.toggleShowLanguages}
           data-testid="toggle-show-languages"/>
        {
          showLanguages &&
          supportedLanguages.map((lang, i) =>
            <button key={i} className={langClasses} onClick={this.changeLanguage(lang)}>
              {lang}
            </button>
          )
        }
      </div>
    );
  }
}