import styles from "./sidebar.module.css";
import TrendingItem from "../components/trendingItem";
import Image from "next/image";
import search from "../../../public/search.svg";
export default function SideBar() {
	

	return (
		<div className={styles.sidebar}>
			<div className={styles.search}>
				<Image src={search} alt="search"/>
				<input type="text" placeholder="Search Twitter"/>
			</div>
		<div className={styles.whatsHappening}>
			<h2>What`s happening</h2>
			<div className={styles.trending}>
				<TrendingItem />
				<TrendingItem />

			</div>
			<div className={styles.showMore}>
				<button>Show More</button>
			</div>
		</div>
		</div>
	)
}