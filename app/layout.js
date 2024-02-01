import "./globals.css";
import SideBar from "./layouts/SideBar";
import NavBar from "./layouts/NavBar";
import ogImage from "@/public/og-img.png"

// export const metadata = {
//   title: "Soren D. Blank",
//   description: "Im gonna be the king of the pirates.",
//   image: "https://next-vcard-portfolio.vercel.app/embed.png",
//   keywords: ["Soren", "Blank", "Soren D. Blank", "Soren Blank"],
//   "og:title" : "Soren D. Blank",
//   "og:description" : "Im gonna be the king of the pirates.",
//   "og:image" : "https://next-vcard-portfolio.vercel.app/embed.png",

//   "twitter:title" : "Soren D. Blank",
//   "twitter:description" : "Im gonna be the king of the pirates.",
//   "twitter:image" : "https://next-vcard-portfolio.vercel.app/embed.png",
// };

export const metadata = {
  title: "Soren D. Blank",
  description: "Im gonna be the king of the pirates.",
  image: "https://next-vcard-portfolio.vercel.app/embed.png",
  keywords: ["Soren", "Blank", "Soren D. Blank", "Soren Blank"],
  openGraph: {

    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height
      },
    ],
  },
  twitter: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height
      },
    ]
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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