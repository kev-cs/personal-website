import * as React from "react";
import { render } from "react-dom";
import "./global-styles.sass";
import { hot } from "react-hot-loader/root";

const HotApp = hot(() => (
  <>
    <header>
      <div>
        <h1>Kevin Caro Silva</h1>
        <h2>Software developer</h2>
      </div>
      <nav>
        <a>Home</a>
        <a>About</a>
        <a>Connect</a>
        <a>Blog</a>
      </nav>
    </header>
    <main>
      <h1>Hello, I&apos;m a software developer based in Montreal, QC.</h1>
      <hr />
      <p>In a few words : Java, Javascript, and various types of scripting.</p>
      <p>
        I&apos;m a fan of Agile, clean coding, cloud development, software
        design, CI/CD, Linux, emerging technologies and simplicity.
      </p>
      <p>Currently doing Java development @ Desjardins Group.</p>
    </main>
  </>
));

render(<HotApp />, document.getElementById("root"));
