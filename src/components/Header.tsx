import * as React from "react";
import styles from "./Header.sass";
import { defineMessages, FormattedMessage } from "react-intl";

const messages = defineMessages({
  profession: {
    id: "profession",
    defaultMessage: "Software developer"
  },
  home: {
    id: "home",
    defaultMessage: "Home"
  },
  about: {
    id: "about",
    defaultMessage: "About"
  },
  connect: {
    id: "connect",
    defaultMessage: "Connect"
  }
});

export default class Header extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <header id={styles.header}>
        <div>
          <h1 id={styles.name}>Kevin Caro Silva</h1>
          <h2 id={styles.profession}>
            <FormattedMessage {...messages.profession}/>
          </h2>
        </div>
        <div id={styles.externalLinks}>
          <a href="https://github.com/kev-cs">
            <i className="fab fa-github"/>
          </a>
          <a href="https://www.linkedin.com/in/kevin-caro-silva-36670a136/">
            <i className="fab fa-linkedin"/>
          </a>
          <a href="mailto:admin@kevincs.me">
            <i className="fas fa-envelope"/>
          </a>
        </div>
      </header>
    );
  }
}
