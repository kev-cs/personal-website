import * as React from "react";
import styles from "./WebsiteDevNotice.sass";
import { defineMessages, FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const messages = defineMessages({
  devNoticeTitle: {
    id: "devNoticeTitle",
    defaultMessage: "Slowly but surely"
  },
  devNoticeMessage: {
    id: "websiteDevMessage",
    defaultMessage: "I'm currently developing this website, more coming soon!"
  }
});

export class WebsiteDevNotice extends React.Component {
  render(): JSX.Element {
    return (
      <div id={styles.webDevNotice}>
        <FontAwesomeIcon icon={faExclamationCircle} className={styles.icon}/>
        <div>
          <h2><FormattedMessage {...messages.devNoticeTitle}/></h2>
          <p>
            <FormattedMessage {...messages.devNoticeMessage}/>
          </p>
        </div>
      </div>
    );
  }
}