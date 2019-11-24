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
          <a>
            <i className="fab fa-github"/>
          </a>
          <a>
            <i className="fab fa-linkedin"/>
          </a>
          <a>
            <i className="fas fa-envelope"/>
          </a>
          <a>
            <i className="fas fa-comment-alt"/>
          </a>
        </div>
      </header>
    );
  }
}
