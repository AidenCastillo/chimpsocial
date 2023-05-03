import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.float_container}>
        <div className={styles.float_child}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="logo" />
          </div>
        </div>
        <div className={styles.float_child}>
          <div className={styles.title}>
            <p>Happening Now</p>
          </div>
        </div>
      </div>
    </main>
  );
}
