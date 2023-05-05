import Image from "next/image";
import styles from "./globals.css"

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
              <a href="/messages">
                <button className="navigation-button">
                  <Image src="../../public/messages.svg" width="50" height="50" alt="asdfad"/>
                </button>
              </a>
            </div>
          </div>
          <div className="column center">
            {children}
          </div>
          <div className="column right">
            <p>right</p>
          </div>
        </div>
      </body>
    </html>
  );
}
