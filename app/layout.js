import "./globals.css";
import SideBar from "./layouts/SideBar";
import NavBar from "./layouts/NavBar";
import Head from "next/head";

const metadata = {
  title: "Soren D. Blank",
  description: "Im gonna be the king of the pirates.",
  image: embed,
  keywords: ["Soren", "Blank", "Soren D. Blank", "Soren Blank"],
  "og:title" : "Soren D. Blank",
  "og:description" : "Im gonna be the king of the pirates.",
  "og:image" : "https://next-vcard-portfolio.vercel.app/embed.png",

  "twitter:title" : "Soren D. Blank",
  "twitter:description" : "Im gonna be the king of the pirates.",
  "twitter:image" : "https://next-vcard-portfolio.vercel.app/embed.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={metadata["og:title"]} />
        <meta property="og:description" content={metadata["og:description"]} />
        <meta property="og:image" content={metadata["og:image"]} />

        <meta name="twitter:title" content={metadata["twitter:title"]} />
        <meta name="twitter:description" content={metadata["twitter:description"]} />
        <meta name="twitter:image" content={metadata["twitter:image"]} />

        <link rel="icon" href="/favicon.ico" />
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