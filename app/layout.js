import "./globals.css";
import SideBar from "./layouts/SideBar";
import NavBar from "./layouts/NavBar";
import embed from "@/public/embed.png";

export const metadata = {
  title: "Soren D. Blank",
  description: "Im gonna be the king of the pirates.",
  image: embed,
  keywords: ["Soren", "Blank", "Soren D. Blank", "Soren Blank"],
  "og:title" : "Soren D. Blank",
  "og:description" : "Im gonna be the king of the pirates.",
  "og:image" : embed,

  "twitter:title" : "Soren D. Blank",
  "twitter:description" : "Im gonna be the king of the pirates.",
  "twitter:image" : embed,
};

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