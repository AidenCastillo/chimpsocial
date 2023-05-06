import Image from "next/image";
import styles from "./globals.css";

import NavigationButton from "./navigationbar.tsx";

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
            <p>left</p>
            {/* navigation buttons with iamges*/}
            <div className="nagivation">
              <NavigationButton version="home" />
            </div>
          </div>
          <div className="column center">{children}</div>
          <div className="column right">
            <p>right</p>
          </div>
        </div>
      </body>
    </html>
  );
}
