import logo from "../../../public/logo.png";
import Image from "next/image";
import styles from "./css/whoop.module.css";

type Props = {
	name: string;
	username: string;
	content: string;
}

export default function Whoop({name, username, content}: Props) {
	return (
		<article>
			<div className={styles.whoop}>
				<div className={styles["whoop-Header"]}>
					<div className={styles["whoop-Header-Right-Text"]}>
						<button>...</button>
					</div>
					<div className={styles["whoop-Header-Left"]}>
						<Image src={logo} alt="profile"/>

						<div className={styles["whoop-Header-Left-Text"]}>
							<h3>{name}</h3>
							<p>@{username}</p>
						</div>
					</div>
					<div className={styles["whoop-Body"]}>
						<p>{content}</p>
					</div>
				</div>
			</div>
		</article>
	)
}