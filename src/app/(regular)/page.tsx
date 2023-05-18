import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.float_container}>
        <div className={styles.child_left}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="logo" />
          </div>
        </div>
        <div className={styles.child_right}>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <h1>Happening Now</h1>
            </div>
            <div className={styles.login_container}>
              <a href="/login">
                <button className={styles.loginButton}>Log In</button>
              </a>
              <a href="/signup">
                <button className={styles.signupButton}>Sign Up</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
