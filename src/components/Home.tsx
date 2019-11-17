import * as React from "react";
import styles from "./Home.sass";
import { defineMessages, FormattedMessage } from "react-intl";

const messages = defineMessages({
  greeting: {
    id: "greeting",
    defaultMessage: "Hi, I'm a software developer based in Montreal, QC."
  },
  homeIntro1: {
    id: "homeIntro1",
    defaultMessage: "In a few words : Java, web dev, Linux and simplicity."
  },
  homeIntro2: {
    id: "homeIntro2",
    defaultMessage: "I'm also a fan of Agile, clean coding, cloud development, CI/CD, TDD, and more. I enjoy exploring solutions for software design and architecture."
  },
  homeIntro3: {
    id: "homeIntro3",
    defaultMessage: "Currently doing Java development at Desjardins Group."
  }
});

export default class Home extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div id={styles.home}>
        <header id={styles.greeting}>
          <FormattedMessage {...messages.greeting} />
          <hr id={styles.greetingHr}/>
        </header>
        <p>
          <FormattedMessage {...messages.homeIntro1}/>
        </p>
        <p>
          <FormattedMessage {...messages.homeIntro2}/>
        </p>
        <p>
          <FormattedMessage {...messages.homeIntro3}/>
        </p>
      </div>
    );
  }
}
