import styles from "./page.module.css";
import settingsIcon from "../../../../public/settings.svg";

import Image from "next/image";
import Selector from "./selector.tsx";

export default function Messages() {
  const n = 5;
  return (
    <div className={styles.column}>
      <div className={styles.left}>
        <div className={styles.header}>
          <h1>Messages</h1>
          <button className={styles.settingsButton}>
            <Image src={settingsIcon} alt="Settings Button" />
          </button>
        </div>
        <div className={styles.messages}>
          {[...Array(n)].map((e, i) => (
            <Selector
              name={"example"}
              username={"@username"}
              latestMessage={"content"}
			  id={"qq23hbaq9"}
              key={i}
            />
          ))}
        </div>
      </div>
	  <div className={styles.right}>
			<p>Please select a channel</p>
	  </div>
    </div>
  );
}
