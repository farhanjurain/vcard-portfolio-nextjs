"use client"

import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar(){

    const pathname = usePathname();

    return (
        <nav className="navbar">

        <ul className="navbar-list">

          <li className="navbar-item">
            <Link href="/" className={pathname == "/" ? "navbar-link active" : "navbar-link"} data-nav-link>About</Link>
          </li>

          <li className="navbar-item">
            <Link href="/resume" className={pathname == "/resume" ? "navbar-link active" : "navbar-link"} data-nav-link>Resume</Link>
          </li>

          <li className="navbar-item">
            <Link href="/portfolio" className={pathname == "/" ? "navbar-link active" : "navbar-link"} data-nav-link>Portfolio</Link>
          </li>

          <li className="navbar-item">
            <Link href="/blog" className={pathname == "/" ? "navbar-link active" : "navbar-link"} data-nav-link>Blog</Link>
          </li>

          <li className="navbar-item">
            <Link href="/contact" className={pathname == "/" ? "navbar-link active" : "navbar-link"} data-nav-link>Contact</Link>
          </li>

        </ul>

      </nav>
    );
}