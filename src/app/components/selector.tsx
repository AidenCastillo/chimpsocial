import styles from "./css/selector.module.css"

type Props = {
    name: string,
    username: string,
    latestMessage: string,
    id: string
}

export default function Selector({name, username, latestMessage, id}: Props) {
    return (
        <div className={styles.wrapper}>
            <a href={`messages/${id}`}>
            <div className={styles.header}>
                <p>{name}</p>
                <p>{username}</p>
            </div>
            <div className={styles.content}>
                {latestMessage}
            </div>
            </a>
        </div>
    )
}