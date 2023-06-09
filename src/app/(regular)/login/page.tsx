"use client";
import styles from "./page.module.css";
import { pb } from "../../../utils/pocketbase.mjs";
import { useState } from "react";
import { redirect } from "next/navigation";
import { setCookie } from "cookies-next";
import Image from "next/image";
import logo from "../../../../public/logo.png";
const HOST_URL = process.env.HOST_URL;
const POCKETBASE_URL = process.env.POCKETBASE_URL;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit() {
    const data = {
    	identity: username,
    	password: password,
    };
    console.log(JSON.stringify(data));
    // const response = await fetch(`${POCKETBASE_URL}/api/collections/users/auth-with-password`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // "Access-Control-Allow-Origin": "*"
    //   },
    //   body: JSON.stringify(data),
    // })
    // const json = await response.json();
    // console.log(json)
    try {
      const authdata = await pb.collection("users").authWithPassword(
        username,
        password,
      );
      
      console.log(pb.authStore.isValid);
      setCookie('username', pb.authStore.model?.username);
      setCookie('id', pb.authStore.model?.id);
      window.location.replace(`${HOST_URL}/home`);
    } catch(error) {
      console.log(error);
      alert("Error:" + error);
    }
  }

  return (
    <main className={styles.main}>
      {/* <div className={styles.logo}>
        <Image src={logo} alt="logo" width={300} height={300}/>
      </div> */}
      <div className={styles.login_container}>
        <div className={styles.title}>
          <h1>Log In</h1>
        </div>
        <div className={styles.form}>
          <label htmlFor="username">Username</label>
          <input className={styles.login_input} type="text" id="username" name="username" onChange={e => { setUsername(e.currentTarget.value)}} required />
          <label htmlFor="password">Password</label>
          <input className={styles.password_input} type="text" id="password" name="password" onChange={e => { setPassword(e.currentTarget.value)}} required />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
          <p>Dont have an account? <a className={styles.register_link}href="/signup">Signup</a></p>
        </div>
      </div>
    </main>
  );
}
