import * as React from "react";
import * as styles from "./Header.sass";

export default class Header extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <header id={styles.header}>
        <div>
          <h1 id={styles.name}>Kevin Caro Silva</h1>
          <h2 id={styles.profession}>Software developer</h2>
        </div>
        <div id={styles.externalLinks}>
          <a>
            <i className="fab fa-github" />
          </a>
          <a>
            <i className="fab fa-linkedin" />
          </a>
          <a>
            <i className="fas fa-envelope" />
          </a>
          <a>
            <i className="fas fa-comment-alt" />
          </a>
        </div>
        <nav id={styles.mainNav}>
          <a>Home</a>
          <a>About</a>
          <a>Connect</a>
        </nav>
      </header>
    );
  }
}