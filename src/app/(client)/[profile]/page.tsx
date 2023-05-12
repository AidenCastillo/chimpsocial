
import styles from "./page.module.css";





export default function Profile({ params }: { params: { profile: string } }) {
    return (
        <div>
            <div className={styles.header}> 
                <div className={styles.title}>
                    <h1>{params.profile}</h1>
                </div>
            </div>
        </div>
    )
}