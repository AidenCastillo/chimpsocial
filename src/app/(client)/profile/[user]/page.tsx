import Whoop from "@/app/components/whoop";
import styles from "./page.module.css";
import PocketBase from "pocketbase";

async function getData(username: string) {
  let res: any;
  res = await fetch(`http://127.0.0.1:3000/api/users?username=AidenCastillo`, {
    cache: "no-cache",
  });
  const data = await res.json();

  return data;
}
export default async function Profile({
  params,
}: {
  params: { user: string };
}) {
  const res = await getData(params.user);
  const whoops = res.expand.whoops;
  const n = res.expand.whoops.length;

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>{params.user}</h1>
        </div>
        {[...Array(n)].map((e, i) => (
          <Whoop
            name={res.name}
            username={res.username}
            content={whoops[i].content}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
