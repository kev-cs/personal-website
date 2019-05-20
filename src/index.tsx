import * as React from "react";
import { render } from "react-dom";
import * as styles from "./global-styles.scss";
import { hot } from "react-hot-loader/root";

const App = hot(() => (
  <div>
    <div className={styles.root}>Hello world!</div>
  </div>
));

render(<App />, document.getElementById("root"));
