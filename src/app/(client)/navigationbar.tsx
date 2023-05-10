"use client";

import Image from "next/image";
import logo from "../../../public/logo.png";
import homeIcon from "../../../public/home.svg";
import exploreIcon from "../../../public/search.svg";
import messageIcon from "../../../public/message-square.svg";
import listIcon from "../../../public/list.svg";
import profileIcon from "../../../public/user.svg";
import notificationIcon from "../../../public/bell.svg";
import bookmarkIcon from "../../../public/bookmark.svg";
import moreIcon from "../../../public/more-horizontal.svg";
import styles from "./navigationbar.module.css";
import Link from "next/link";
// import { Link } from "react-router-dom";

type Props = {
  version: string;
};

export default function NavigationButton({ version }: Props) {

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
          <div className={styles.notificationsButton}>
            <Link href="/notifications">
            <button>
              <Image src={notificationIcon} alt="Notifications" />
              Notifications
            </button>
            </Link>
          </div>
          <div className={styles.messagesButton}>
            <Link href="/messages">
            <button>
              <Image src={messageIcon} alt="Messages" />
              Messages
            </button>
            </Link>
          </div>
          <div className={styles.bookmarksButton}>
            <Link href="/bookmarks">
            <button>
              <Image src={bookmarkIcon} alt="Bookmarks" />
              Bookmarks
            </button>
            </Link>
          </div>
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
          <div className={styles.moreButton}>
            <button>
              <Image src={moreIcon} alt="More" />
              More
            </button>
          </div>
          <div className={styles.whoopButton}>
            <button>Whoop</button>
          </div>
        </div>
      </section>
  );
}
