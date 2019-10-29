import * as React from "react";
import * as styles from "./Home.sass";

export default class Home extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div id={styles.home}>
        <header id={styles.greeting}>
          Hi, I&apos;m a software developer based in Montreal, QC.
        </header>
        <hr id={styles.greetingHr} />
        <p>
          In a few words : Java, Javascript, and various types of scripting.
        </p>
        <p>
          I&apos;m a fan of Agile, clean coding, cloud development, software
          design, CI/CD, Linux, emerging technologies and simplicity.
        </p>
        <p>Currently doing Java development at Desjardins Group.</p>
      </div>
    );
  }
}
