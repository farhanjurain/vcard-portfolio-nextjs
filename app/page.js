import MyImage from "@/app/components/Image"
import iconDesign from "@/public/icon-design.svg"
import iconDev from "@/public/icon-dev.svg"
import iconApp from "@/public/icon-app.svg"
import iconPhoto from "@/public/icon-photo.svg"
import avatar1 from "@/public/avatar-1.png"
import avatar2 from "@/public/avatar-2.png"
import avatar3 from "@/public/avatar-3.png"
import avatar4 from "@/public/avatar-4.png"
import logo1 from "@/public/logo-1-color.png"
import logo2 from "@/public/logo-2-color.png"
import logo3 from "@/public/logo-3-color.png"
import logo4 from "@/public/logo-4-color.png"
import logo5 from "@/public/logo-5-color.png"
import logo6 from "@/public/logo-6-color.png"
import quote from "@/public/icon-quote.svg"
import Link from "next/link"
import { IoCloseOutline } from "react-icons/io5"
import { IoCalendarOutline, IoChevronDown, IoLocationOutline, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoMailOutline, IoPhonePortraitOutline } from "react-icons/io5"

export default function About(){
  return (
    <article className="about active" data-page="about">

        <header>
        <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
        <p>
            I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
            I enjoy
            turning complex problems into simple, beautiful and intuitive designs.
        </p>

        <p>
            My job is to build your website so that it is functional and user-friendly but at the same time attractive.
            Moreover, I
            add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
            across your
            message and identity in the most creative way. I created web design for many famous brand companies.
        </p>
        </section>


        {/* Services */}

        <section className="service">

        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">

            <li className="service-item">

            <div className="service-icon-box">
                <MyImage src={iconDesign} alt="design icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
                <h4 className="h4 service-item-title">Web design</h4>

                <p className="service-item-text">
                The most modern and high-quality design made at a professional level.
                </p>
            </div>

            </li>

            <li className="service-item">

            <div className="service-icon-box">
                <MyImage src={iconDev} alt="Web development icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
                <h4 className="h4 service-item-title">Web development</h4>

                <p className="service-item-text">
                High-quality development of sites at the professional level.
                </p>
            </div>

            </li>

            <li className="service-item">

            <div className="service-icon-box">
                <MyImage src={iconApp} alt="mobile app icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
                <h4 className="h4 service-item-title">Mobile apps</h4>

                <p className="service-item-text">
                Professional development of applications for iOS and Android.
                </p>
            </div>

            </li>

            <li className="service-item">

            <div className="service-icon-box">
                <MyImage src={iconPhoto} alt="camera icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
                <h4 className="h4 service-item-title">Photography</h4>

                <p className="service-item-text">
                I make high-quality photos of any category at a professional level.
                </p>
            </div>

            </li>

        </ul>

        </section>


        {/* testimonials */}
        

        <section className="testimonials">

        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">

            <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

                <figure className="testimonials-avatar-box">
                    <MyImage src={avatar1} alt="Daniel lewis" width={60} data-testimonials-avatar />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>Daniel lewis</h4>

                <div className="testimonials-text" data-testimonials-text>
                <p>
                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
                </div>

            </div>
            </li>

            <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

                <figure className="testimonials-avatar-box">
                    <MyImage src={avatar2} alt="Jessica miller" width={60} data-testimonials-avatar />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>Jessica miller</h4>

                <div className="testimonials-text" data-testimonials-text>
                <p>
                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
                </div>

            </div>
            </li>

            <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

                <figure className="testimonials-avatar-box">
                    <MyImage src={avatar3} alt="Emily evans" width={60} data-testimonials-avatar />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>Emily evans</h4>

                <div className="testimonials-text" data-testimonials-text>
                <p>
                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
                </div>

            </div>
            </li>

            <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

                <figure className="testimonials-avatar-box">
                    <MyImage src={avatar4} alt="Henry william" width={60} data-testimonials-avatar />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>Henry william</h4>

                <div className="testimonials-text" data-testimonials-text>
                <p>
                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
                </div>

            </div>
            </li>

        </ul>

        </section>



        <div className="modal-container" data-modal-container>

        <div className="overlay" data-overlay></div>

        <section className="testimonials-modal">

            <button className="modal-close-btn" data-modal-close-btn>
                <IoCloseOutline className="ion-icon" />
            </button>

            <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
                <MyImage src={avatar1} alt="Daniel lewis" width={80} data-modal-img />
            </figure>

            <MyImage src={quote} alt="quote icon" width={40} data-modal-quote />
            </div>

            <div className="modal-content">

            <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

            <time dateTime="2021-06-14">14 June, 2021</time>

            <div data-modal-text>
                <p>
                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                lot of experience
                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                consectetur adipiscing
                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
            </div>

            </div>

        </section>

        </div>


        <section className="clients">

        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">

            <li className="clients-item">
            <Link href="#">
                <MyImage src={logo1} alt="client logo" />
            </Link>
            </li>

            <li className="clients-item">
            <Link href="#">
                <MyImage src={logo2} alt="client logo" />
            </Link>
            </li>

            <li className="clients-item">
            <Link href="#">
                <MyImage src={logo3} alt="client logo" />
            </Link>
            </li>

            <li className="clients-item">
            <Link href="#">
                <MyImage src={logo4} alt="client logo" />
            </Link>
            </li>

            <li className="clients-item">
            <Link href="#">
                <MyImage src={logo5} alt="client logo" />
            </Link>
            </li>

            <li className="clients-item">
            <Link href="#">
                <MyImage src={logo6} alt="client logo"/>
            </Link>
            </li>

        </ul>

        </section>

</article>
  )
}