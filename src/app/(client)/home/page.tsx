import Tweet from "../../components/tweet";
import styles from "./css/page.module.css";


export default function Home() {


    
    return (
        <main>
            <div className={styles.header}>
                <h1>Home</h1>

            </div>
            <Tweet name="Chimp" username="chimpgamer" content="hello world"/>
            <Tweet name="Tyler" username="bigweenie" content="You tried to scare me by getting in my face, then you shoved a pole at me like a little bitch. I asked if you were threatening me because of how pathetic you looked. There's a reason your cameraman panned away"/>
        </main>
    )
}