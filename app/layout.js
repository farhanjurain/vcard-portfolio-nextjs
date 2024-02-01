import "./globals.css";
import SideBar from "./layouts/SideBar";
import NavBar from "./layouts/NavBar";
import Head from "next/head";
import favicon from "@/public/favicon.ico";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Soren D. Blank</title>
        <meta name="description" content="I will be the king of the pirates." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content=""/>
        <meta property="og:description" content="I will be the king of the pirates." />
        <meta property="og:image" content=""/>
        <meta property="og:url" content=""/>
        <meta name="twitter:title" content=""/>
        <meta name="twitter:description" content="I will be the king of the pirates." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content=""/>
        <link rel="icon" href={favicon} />

      </Head>
      <body>
        <main>
          <SideBar />
          <div className="main-content">
            <NavBar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}