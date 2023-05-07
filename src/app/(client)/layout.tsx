import Image from "next/image";
import styles from "./globals.css";

import NavigationButton from "./navigationbar.tsx";
import SideBar from "./sidebar.tsx";

import messagesImage from "../../../public/messages.svg";
import ChimpLogo from "../../../public/next.svg";
import exploreImage from "../../../public/vercel.svg";

export default function clientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={styles} />
      </head>
      <body>
        <div className="column">
          <div className="column left">
            {/* navigation buttons with iamges*/}
            <div className="nagivation">
              <NavigationButton version="home" />
            </div>
          </div>
          <div className="column center">
            {children}
          </div>
          <div className="column right">
            <SideBar />
          </div>
        </div>
      </body>
    </html>
  );
}
