import logo from "../../../public/logo.png";
import Image from "next/image";
import styles from "./css/tweet.module.css";

type Props = {
	name: string;
	username: string;
	content: string;
}

export default function Tweet({name, username, content}: Props) {
	return (
		<article>
			<div className={styles.tweet}>
				<div className={styles["tweet-Header"]}>
					<div className={styles["tweet-Header-Right-Text"]}>
						<button>...</button>
					</div>
					<div className={styles["tweet-Header-Left"]}>
						<Image src={logo} alt="profile"/>

						<div className={styles["tweet-Header-Left-Text"]}>
							<h3>{name}</h3>
							<p>@{username}</p>
						</div>
					</div>
					<div className={styles["tweet-Body"]}>
						<p>{content}</p>
					</div>
				</div>
			</div>
		</article>
	)
}