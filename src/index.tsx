import * as React from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader/root";
import "./global-styles.sass";

import App from "components/App";

render(React.createElement(hot(App)), document.getElementById("root"));
