"use client";

import styles from "./page.module.css";
import { pb } from "../../../utils/pocketbase.mjs";
import { useState } from "react";
import { setCookie } from "cookies-next";
const HOST_URL = process.env.HOST_URL;

export default function Signup() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");



	async function handleSubmit() {
		const data = {
			email: email,
			name: name,
			username: username,
			password: password,
			passwordConfirm: confirmPassword,
			bio: "",
			following: [],
			followers: [],
			emailVisible: false,
		};

		try {
			const response = await pb.collection("users").create(JSON.stringify(data));
			console.log(response);
			const authdata = await pb.collection("users").authWithPassword(data.username, data.password);
			console.log(pb.authStore.isValid);
			setCookie('username', pb.authStore.model?.username);
			setCookie('id', pb.authStore.model?.id);
			window.location.replace(`${HOST_URL}/home`)
		} catch(error) {
			console.log(error);
			alert("Error:" + error);
		}
	}
	
	return (
		<main className={styles.main}>
			<div className={styles.signup_container}>
				<div className={styles.title}>
					<h1>Sign Up</h1>
				</div>
				<div className={styles.form}>
					<label htmlFor="email">Email</label>
					<input type="text" id="email" name="email" onChange={e => { setEmail(e.currentTarget.value)}} required />
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" onChange={e => { setName(e.currentTarget.value)}} required />
					<label htmlFor="username">Username</label>
					<input type="text" id="username" name="username" onChange={e => { setUsername(e.currentTarget.value)}} required />
					<label htmlFor="password">Password</label>
					<input type="text" id="password" name="password" onChange={e => { setPassword(e.currentTarget.value)}} required />
					<label htmlFor="confirm_password">Confirm Password</label>
					<input type="text" id="confirm_password" name="confirm_password" onChange={e => { setConfirmPassword(e.currentTarget.value)}}required />
					<button onClick={handleSubmit}>Submit</button>
				</div>
			</div>
		</main>
	)
}