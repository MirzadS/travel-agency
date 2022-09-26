import React, { useState } from "react";

import styles from "./ChatModalStyles.module.css";
import img1 from "../../assets/emojis.svg";
import img2 from "../../assets/microphone.svg";
import img3 from "../../assets/attachment.svg";
import img4 from "../../assets/chatbox-icon.svg";

const ChatModal = () => {
  const [chatModalVisible, setChatModalVisible] = useState(false);

  return (
    <div>
      <div
        onMouseLeave={() => setChatModalVisible(false)}
        className={styles.chatbox}
      >
        {chatModalVisible && (
          <div className={`${styles.chatboxSupport} ${styles.chatboxActive}`}>
            <div className={styles.chatboxHeader}>
              <div className={styles.chatboxContentHeader}>
                <h4 className={styles.chatboxHeadingHeader}>Ime i Prezime</h4>
              </div>
            </div>
            <div className={styles.chatboxMessages}>
              <div>
                {/* <div
                  className={`${styles.messagesItem} ${styles.messagesItemVisitor}`}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Natus, dolore.
                </div>
                <div
                  className={`${styles.messagesItem} ${styles.messagesItemOperator}`}
                >
                  Lorem, ipsum dolor.
                </div>
                <div
                  className={`${styles.messagesItem} ${styles.messagesItemVisitor}`}
                >
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div
                  className={`${styles.messagesItem} ${styles.messagesItemOperator}`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </div> */}
              </div>
            </div>
            <div className={styles.chatboxFooter}>
              <input type="text" placeholder="Pošaljite poruku..." />
              <p className={styles.chatboxSendFooter}>Pošalji</p>
            </div>
          </div>
        )}
        <div className={styles.chatboxButton}>
          <button
            onMouseEnter={() => setChatModalVisible(true)}
            // onClick={() => setChatModalVisible(!chatModalVisible)}
          >
            <img src={img4} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
