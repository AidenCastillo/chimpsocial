"use client";

import Whoop from "../../components/whoop";
import Compose from "../../components/compose";
import styles from "./page.module.css";
import Image from "next/image";
import placeholder from "../../../../public/placeholder.jpg";
import { useState, useEffect } from "react";
import { pb } from "../../../utils/pocketbase.mjs";
import { Record } from "pocketbase";
import { ObjectType } from "typescript";

export default function Home() {
  const [whoops, setWhoops] = useState<Record[]>([]);


  useEffect(() => {
    async function getFollowingWhoops() {
      const fetchedWhoops = [];
      const following = pb.authStore.model?.following;
      for (let i = 0; i < following.length; i++) {
        let res = await pb.collection("whoops").getList(1, 50, {
          filter: `author = "${following[i]}"`,
          expand: "author"
        });
        fetchedWhoops.push(...res.items);
      }
      setWhoops(fetchedWhoops);
    }
    //sleep for 1 second
    setTimeout(() => {

    }, 1000);
    getFollowingWhoops();
    console.log(whoops);
  }, [])


  return (
    <main>
      <div className={styles.header} data-testid={"header"}>
        <div className={styles.title}>
          <h1>Home</h1>
        </div>
        <div className={styles.categories}>
          <div className={styles.ForYou}>
            <h2>ForYou</h2>
          </div>
          <div className={styles.Following}>
            <h2>Following</h2>
          </div>
        </div>
        <div className={styles.composing} data-testid={"composing"}></div>
      </div>
      <Compose />
      {[...Array(whoops.length)].map((e, i) => (
          <Whoop
            /* tslint:disable */
            name={whoops[i]["expand" as keyof ObjectType]["author"]["name"]}
            username={whoops[i]["expand" as keyof ObjectType]["author"]["username"]}
            content={whoops[i]["content"]}
            key={i}
            /* tslint:enable */
          />
        ))}
    </main>
  );
}
