import styles from "./css/trendingItem.module.css";
import Image from "next/image";
import placeholder from "../../../public/placeholder.jpg";

export default function TrendingItem() {
  return (
    <div className={styles.trendingWrapper}>
      <div className={styles.trendingItem}>
        <div className={styles.trendingHeader}>
          <p>Entertainment</p>
        </div>
        <div className={styles.trendingBody}>
          <h4>Kentucky Horse Racing</h4>
					<Image src={placeholder} alt="placeholder"/>
        </div>
      </div>
    </div>
  );
}
