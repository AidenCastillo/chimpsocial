"use client";

import Image from "next/image";
import logo from "../../../public/next.svg";
import homeIcon from "../../../public/home.svg";
import exploreIcon from "../../../public/search.svg";
import messageIcon from "../../../public/message-square.svg";
import listIcon from "../../../public/list.svg";
import profileIcon from "../../../public/user.svg";
import styles from "./navigationbar.module.css";
import Link from "next/link";
// import { Link } from "react-router-dom";

type Props = {
  version: string;
};

export default function NavigationButton({ version }: Props) {
  // var link = "test";
  // var image = "test";
  // if (version == "home") {
  //   link = "/home";
  //   image = homeImage;
  // } else if (version == "explore") {
  //   link = "/explore";
  //   image = exploreImage;
  // } else if (version == "messages") {
  //   link = "/messages";
  //   image = messageImage;
  // } else if (version == "lists") {
  //   link = "/lists";
  //   image = listImage;
  // } else if (version == "profile") {
  //   link = "/profile";
  //   image = profileImage;
  // }

  return (
    
    <section className={styles.navigation}>
        <div className={styles["navigation-items"]}>
          <div className={styles.logo}>
            <Image src={logo} alt="chimpLogo"></Image>
          </div>
          <div className={styles.homeButton}>
            <Link href="/home">
            <button>
              <Image src={homeIcon} alt="Home" />
              Home
            </button>
            </Link>
          </div>
          <div className={styles.exploreButton}>
            <Link href="/explore">
            <button>
              <Image src={exploreIcon} alt="Explore" />
              Explore
            </button>
            </Link>
          </div>
          {/* <div className={styles.notificationsButton}>
            <Link to="/notifications">
            <button>
              <Image src={notificationIcon} alt="Notifications" />
              Notifications
            </button>
            </Link>
          </div> */}
          <div className={styles.messagesButton}>
            <Link href="/messages">
            <button>
              <Image src={messageIcon} alt="Messages" />
              Messages
            </button>
            </Link>
          </div>
          {/* <div className={styles.bookmarksButton}>
            <Link to="/bookmarks">
            <button>
              <Image src={bookmarkIcon} alt="Bookmarks" />
              Bookmarks
            </button>
            </Link>
          </div> */}
          <div className={styles.listsButton}>
            <Link href="/lists">
            <button>
              <Image src={listIcon} alt="Lists" />
              Lists
            </button>
            </Link>
          </div>
          <div className={styles.profileButton}>
            <Link href="/profile">
            <button>
              <Image src={profileIcon} alt="Profile" />
              Profile
            </button>
            </Link>
          </div>
          {/* <div className={styles.moreButton}>
            <button>
              <Image src={moreIcon} alt="More" />
              More
            </button>
          </div> */}
          <div className={styles.tweetButton}>
            <button>Tweet</button>
          </div>
        </div>
      </section>
  );
}
