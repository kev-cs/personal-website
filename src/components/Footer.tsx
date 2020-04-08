import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";
import styles from "./Footer.sass";

class LangOptions extends React.Component<
  {
    changeLanguage: (lang: string) => void;
    supportedLanguages: Array<string>;
    toggleShowLanguages: () => void;
  },
  {}
> {
  private wrapperRef: Node;

  componentDidMount(): void {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount(): void {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  private setWrapperRef = (node: Node): void => {
    this.wrapperRef = node;
  };

  private handleClickOutside = (event: Event): void => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target as Node)) {
      this.props.toggleShowLanguages();
    }
  };

  render(): React.ReactElement {
    const {
      toggleShowLanguages,
      supportedLanguages,
      changeLanguage
    } = this.props;

    return (
      <div id={styles.langOptions} ref={this.setWrapperRef}>
        <button id={styles.closeLangOptions} onClick={toggleShowLanguages}>
          <FontAwesomeIcon icon={faTimes} style={{ verticalAlign: "middle" }} />
        </button>
        {supportedLanguages.map((lang, i) => (
          <button key={i} onClick={(): void => changeLanguage(lang)}>
            {lang}
          </button>
        ))}
      </div>
    );
  }
}

class LangSelector extends React.Component<
  {
    changeLanguage: (lang: string) => void;
    supportedLanguages: Array<string>;
  },
  { showingLanguages: boolean }
> {
  state = {
    showingLanguages: false
  };

  private toggleShowLanguages = (): void => {
    this.setState(state => ({
      showingLanguages: !state.showingLanguages
    }));
  };

  private changeLanguage = (lang: string): void => {
    if (this.state.showingLanguages) {
      this.props.changeLanguage(lang);
      this.setState({ showingLanguages: false });
    }
  };

  render(): React.ReactElement {
    return (
      <div id={styles.langSelector}>
        <a
          id={styles.toggler}
          className={this.state.showingLanguages ? styles.showingLanguages : ""}
          onClick={
            this.state.showingLanguages ? undefined : this.toggleShowLanguages
          }
        >
          <FontAwesomeIcon icon={faGlobeAmericas} />{" "}
          <FormattedMessage id="language" defaultMessage="Language" />
        </a>
        {this.state.showingLanguages && (
          <LangOptions
            toggleShowLanguages={this.toggleShowLanguages}
            changeLanguage={this.changeLanguage}
            supportedLanguages={this.props.supportedLanguages}
          />
        )}
      </div>
    );
  }
}

export class Footer extends React.Component<
  {
    changeLanguage: (lang: string) => void;
    supportedLanguages: Array<string>;
  },
  {}
> {
  render(): JSX.Element {
    return (
      <footer id={styles.footer}>
        <div id={styles.footerContentWrapper}>
          <div>© 2020 Kevin Caro Silva</div>
          <div className={styles.separator} />
          <LangSelector {...this.props} />
        </div>
      </footer>
    );
  }
}
