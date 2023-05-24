import styles from "./page.module.css";
export default function Notification() {
		return (
				<div>
					<div className={styles.header}>
						<h1>Notifications</h1>
					</div>
					<div className={styles.categories}>
						<div className={styles.All}>
						<h2>All</h2>
						</div>
						<div className={styles.Verified}>
							<h2>Verified</h2>
						</div>
						<div className={styles.Mentions}>
							<h2>Mentions</h2>
						</div>
					</div>
				</div>
		)
}