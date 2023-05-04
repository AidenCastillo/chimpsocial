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
