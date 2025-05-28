"use client"

import "@/app/globals.css";
import {IoCalendarOutline, IoChevronDown, IoLocationOutline, IoLogoFacebook, IoLogoInstagram, IoLogoMedium, IoLogoTwitter, IoMailOutline, IoPhonePortraitOutline } from "react-icons/io5";
import MyImage from "../components/Image";
import avatar from "@/public/my-avatar.png";
import { useState } from "react";


export default function SideBar(){

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className={isActive ? 'sidebar active' : 'sidebar'} data-sidebar>

      <div className="sidebar-info">

        <figure className="avatar-box">
          <MyImage src={avatar} alt="Soren D. Blank" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Soren D. Blank">To Trade Your Heart</h1>

          <p className="title">A Bangladesh-based initiative for humanity</p>
        </div>

        <button onClick={toggleActive} className="info_more-btn">
          <span>Show Contacts</span>

          <IoChevronDown className="ion-icon"/>
        </button>

      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">

          <li className="contact-item">

            <div className="icon-box">
              <IoMailOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:richard@example.com" className="contact-link">sorenblank0@gmail.com</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <IoPhonePortraitOutline/>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+12133522795" className="contact-link">Mail me ~</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <IoCalendarOutline/>
            </div>

            <div className="contact-info">
              <p className="contact-title">Founded</p>

              <time dateTime="2004-11-01">April 17</time>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <IoLocationOutline/>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Bangladesh</address>
            </div>

          </li>

        </ul>

        <div className="separator"></div>

        <ul className="social-list">

          <li className="social-item">
            <a href="https://fb.me/totradeyourheart" className="social-link">
              <IoLogoFacebook />
            </a>
          </li>

          <li className="social-item">
            <a href="https://instagram.com/totradeyourheart" className="social-link">
              <IoLogoInstagram />
            </a>
          </li>


        </ul>

      </div>

    </aside>
  )
}
