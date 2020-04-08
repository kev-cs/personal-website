import * as React from "react";
import styles from "./Header.sass";
import {defineMessages, FormattedMessage} from "react-intl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

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
          <a href="https://github.com/kev-cs" aria-label="My Github">
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a href="https://www.linkedin.com/in/kevin-caro-silva-36670a136/" aria-label="My LinkedIn page">
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
          <a href="mailto:admin@kevincs.me" aria-label="My email to contact me">
            <FontAwesomeIcon icon={faEnvelope}/>
          </a>
        </div>
      </header>
    );
  }
}
