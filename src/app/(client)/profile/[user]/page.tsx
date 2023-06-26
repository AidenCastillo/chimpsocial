import Whoop from "@/app/components/whoop";
import styles from "./page.module.css";
import PocketBase from "pocketbase";
import Image from "next/image";
import logo from "../../../../../public/logo.png";
import chimpGlitch from "../../../../../public/chimpGlitch.png";
import Link from "next/link";
const HOST_URL = process.env.HOST_URL;
console.log(HOST_URL);

async function getData(username: string) {
  let user: any;
  let whoops: any;
  user = await fetch(`${HOST_URL}/api/users?username=${username}`, {
    cache: "no-cache",
  });
  user = await user.json();

  whoops = await fetch(`${HOST_URL}/api/whoops?author=${user.id}`, {
    cache: "no-cache",
  });
  whoops = await whoops.json();
  console.log(whoops);

  
  return {user, whoops};
}
export default async function Profile({
  params,
}: {
  params: { user: string };
}) {
  let res: {user:any, whoops:any} = await getData(params.user);
  const following = `${res.user.following.length} Following`;
  const n = res.whoops.items.length;
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>{res.user.name}</h1>
        </div>
      </div>
      <Image src={chimpGlitch} alt="avatar" width={631} height={150}/>
      <div className={styles.bio}>
        <Image src={logo} alt="avatar" width={100} height={100}/>
        <h1>{res.user.name}</h1>
        <p>@{res.user.username}</p>
        <p>{res.user.bio}</p>
        <a className={styles.ref}href={`/profile/${res.user.username}/following`}>
          <p>{following}</p>
        </a>
        <a className={styles.ref}href={`/profile/${res.user.username}/followers`}>
          <p>{res.user.followers.length} Followers</p>
        </a>
      </div>

        {[...Array(n)].map((e, i) => (
          <Whoop
            name={res.user.name}
            username={res.user.username}
            content={res.whoops.items[i].content }
            key={i}
          />
        ))}
    </div>
  );
}
