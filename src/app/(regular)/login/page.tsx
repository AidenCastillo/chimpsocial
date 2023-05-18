"use client";
import styles from "./page.module.css";
const HOST_URL = process.env.HOST_URL

export default function Login() {
	async function handleSumbit() {
		const username = document.getElementById("username") as HTMLInputElement;
		const password = document.getElementById("password") as HTMLInputElement;
		const data = {
			username: username.value,
			password: password.value,
		};
		const response = await fetch(`${HOST_URL}/api/users/auth`, {
			method: "POST",
			body: JSON.stringify(data),
		});
		const json = await response.json();
		if (json.message == "Success") {
      window.location.href = "/home";
    } else {
      alert("Incorrect username or password");
    }
	}

  return (
    <main className={styles.main}>
      <div className={styles.login_container}>
        <div className={styles.title}>
          <h1>Log In</h1>
        </div>
        <form className={styles.form} onSubmit={handleSumbit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
          />
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}
