import * as React from "react";
import * as styles from "./Home.sass";
import { FormattedMessage } from "react-intl";

export default class Home extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div id={styles.home}>
        <header id={styles.greeting}>
          <FormattedMessage id="greeting" />
        </header>
        <hr id={styles.greetingHr} />
        <p>
          <FormattedMessage id="homeIntro1" />
        </p>
        <p>
          <FormattedMessage id="homeIntro2" />
        </p>
        <p>
          <FormattedMessage id="homeIntro3" />
        </p>
      </div>
    );
  }
}
