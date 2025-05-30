import "./globals.css";
import SideBar from "./layouts/SideBar";
import NavBar from "./layouts/NavBar";

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
  title: "To Trade Your Heart",
  description: "FREE PALESTINE.",
  image: "https://i.ibb.co/1YK2QWV9/Blue-White-Modern-Digital-Marketing-Instagram-Post-Potrait.png",
  keywords: ["To Trade Your Heart", "TTYH", "Trade Your Heart"],
  openGraph: {

    images: [
      {
        url: "https://i.ibb.co/1YK2QWV9/Blue-White-Modern-Digital-Marketing-Instagram-Post-Potrait.png",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://i.ibb.co/1YK2QWV9/Blue-White-Modern-Digital-Marketing-Instagram-Post-Potrait.png",
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
