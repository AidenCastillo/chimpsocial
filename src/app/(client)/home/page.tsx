import Whoop from "../../components/whoop";
import Compose from "../../components/compose";
import styles from "./page.module.css";
import Image from "next/image";
import placeholder from "../../../../public/placeholder.jpg";

export default function Home() {
  
  return (
    <main>
      <div className={styles.header} data-testid={"header"}>
        <div className={styles.title}>
          <h1>Home</h1>
        </div>
        <div className={styles.categories}>
          <div className={styles.ForYou}>
            <h2>ForYou</h2>
          </div>
          <div className={styles.Following}>
            <h2>Following</h2>
          </div>
        </div>
        <div className={styles.composing} data-testid={"composing"}></div>
      </div>
      <Compose />
      <Whoop name="Chimp" username="chimpgamer" content="hello world" />
      <Whoop
        name="Tyler"
        username="bigweenie"
        content="You tried to scare me by getting in my face, then you shoved a pole at me like a little bitch. I asked if you were threatening me because of how pathetic you looked. There's a reason your cameraman panned away"
      />
    </main>
  );
}
