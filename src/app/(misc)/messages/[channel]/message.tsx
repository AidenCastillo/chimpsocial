import styles from "./message.module.css";

type Props = {
    content: string
}

export default function Message({content}: Props) {
    return (
    <div className={styles.message_wrapper}>
        <div className={styles.message_content}>
            <p>{content}</p>
        </div>
        <div className={styles.message_footer}>
            <p>Date: 5/24/2023</p>
        </div>
    </div>
    )
}