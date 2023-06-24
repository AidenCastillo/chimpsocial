import styles from "./page.module.css";
import Image from "next/image";
import settingsIcon from "../../../../../public/settings.svg";
import Selector from "../../../../app/components/selector";
import Message from "./message.tsx";

export default function Channel() {
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
        <div className={styles.selector_wrapper}>
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
        <div className={styles.channel_wrapper}>
					<div className={styles.channel_header}>
						<button>I</button>
					</div>
					<div className={styles.channel_card}>
						<h1>BigBoy</h1>
					</div>
					<div className={styles.channel_messages}>
						<Message content={"test"}/>
					</div>
					<div className={styles.channel_compose}>

					</div>
				</div>
      </div>
    </div>
  );
}
