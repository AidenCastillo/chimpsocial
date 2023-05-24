import Image from "next/image";
import styles from "./globals.css";

import NavigationButton from "../(client)/navigationbar.tsx";
import SideBar from "../(client)/sidebar.tsx";


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
          <div className="column right">
          {children}
          </div>
        </div>
      </body>
    </html>
  );
}
