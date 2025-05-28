"use client"

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
import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"

export default function About(){

    const clients = [
      { logo: logo1, alt: 'client logo', link: '#'},
      { logo: logo2, alt: 'client logo', link: '#'},
      { logo: logo3, alt: 'client logo', link: '#'},
      { logo: logo4, alt: 'client logo', link: '#'},
      { logo: logo5, alt: 'client logo', link: '#'},
      { logo: logo6, alt: 'client logo', link: '#'},
    ];

    const [modalActive, setModalActive] = useState(false);
    const [modalData, setModalData] = useState({
      imgSrc: '',
      imgAlt: '',
      title: '',
      text: '',
    });

    const testimonials = [
        { avatar: avatar1, name: 'Daniel Lewis', text: "Working with Soren D. was an absolute pleasure. His expertise in crafting a compelling corporate identity truly impressed us. Richard&apos;s extensive experience and genuine concern for understanding our client needs set him apart. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We are delighted with the outcome and highly recommend Richard for his exceptional work." },
        { avatar: avatar2, name: 'Jessica Miller', text: "Soren D. is a creative and talented designer. He designed a corporate identity for our company. We were very pleased with the work done. Richard&apos;s a lot of experience and is very concerned about the needs of the client. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We are delighted with the outcome and highly recommend Richard for his exceptional work." },
        { avatar: avatar3, name: 'Emily Evans', text: "Soren D. is a creative and talented designer. He designed a corporate identity for our company. We were very pleased with the work done. Richard&apos;s a lot of experience and is very concerned about the needs of the client. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We are delighted with the outcome and highly recommend Richard for his exceptional work." },
        { avatar: avatar4, name: 'Henry William', text: "Soren D. is a creative and talented designer. He designed a corporate identity for our company. We were very pleased with the work done. Richard&apos;s a lot of experience and is very concerned about the needs of the client. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We are delighted with the outcome and highly recommend Richard for his exceptional work." },
      ];

    
    const handleTestimonialClick = (testimonial) => {
        setModalData({
          imgSrc: testimonial.avatar,
          imgAlt: testimonial.name,
          title: testimonial.name,
          text: testimonial.text,
        });
        setModalActive(true);
      };
    
    const closeModal = () => {
        setModalActive(false);
      };

  return (
    <article className="about active" data-page="about">

        <header>
        <h2 className="h2 article-title">About us</h2>
        </header>

        <section className="about-text">
        <p>
            FREE PALESTINE.FREE GAZA.
        </p>

        <p>
            Standing with Palestine — from the river to the sea, advocating freedom, dignity, and urgent aid for those in need. 
            A Bangladesh-based initiative for humanity.
            
        </p>
        </section>


        {/* Services */}

        <section className="service">

        <h3 className="h3 service-title">What we&apos;re doing</h3>

        <ul className="service-list">

            <li className="service-item">

            <div className="service-icon-box">
                <MyImage src={iconDesign} alt="design icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
                <h4 className="h4 service-item-title">Fugu bhai kanna kore</h4>

                <p className="service-item-text">
                The most modern and high-quality kanna at a professional level.
                </p>
            </div>

            </li>

            <li className="service-item">

            <div className="service-icon-box">
                <MyImage src={iconDev} alt="Web development icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
                <h4 className="h4 service-item-title">Ghedghedi</h4>

                <p className="service-item-text">
                High-quality development of ghedghedi of mishka at the professional level.
                </p>
            </div>

            </li>

            <li className="service-item">

            <div className="service-icon-box">
                <MyImage src={iconApp} alt="mobile app icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
                <h4 className="h4 service-item-title">shamne HSC</h4>

                <p className="service-item-text">
                Professional development of Army in Exam halls.
                </p>
            </div>

            </li>

            <li className="service-item">

            <div className="service-icon-box">
                <MyImage src={iconPhoto} alt="camera icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
                <h4 className="h4 service-item-title">Poor jurain</h4>

                <p className="service-item-text">
                I make high-quality khabar er chobi.
                </p>
            </div>

            </li>

        </ul>

        </section>


        {/* Proofs */}
        

        <section className="testimonials">

        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">

        {testimonials.map((testimonial, index) => (
            <li className="testimonials-item" key={index} onClick={() => handleTestimonialClick(testimonial)}>
                <div className="content-card" data-testimonials-item>

                    <figure className="testimonials-avatar-box">
                        <MyImage src={testimonial.avatar} alt={testimonial.name} data-testimonials-avatar />
                    </figure>

                    <h4 className="h4 testimonials-item-title" data-testimonials-title>{testimonial.name}</h4>

                    <div className="testimonials-text" data-testimonials-text>
                    <p>
                        {testimonial.text}
                    </p>
                    </div>
                </div>
            </li>
          ))}
        
        </ul>
        </section>

        {modalActive && (
        <div className="modal-container active" data-modal-container>
          <div className="overlay active" data-overlay onClick={closeModal}></div>
          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn onClick={closeModal}>
              <IoCloseOutline className="ion-icon" />
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <MyImage src={modalData.imgSrc} alt={modalData.imgAlt} data-modal-img />
              </figure>
              <MyImage src={quote} class="quote-icon" alt="quote icon" data-modal-quote />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>{modalData.title}</h4>
              <div data-modal-text>
                <p>{modalData.text}</p>
              </div>
            </div>
          </section>
        </div>
      )}


        <section className="clients">

        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">

        {clients.map((client, index) => (
          <li className="clients-item" key={index}>
            <Link href={client.link}>
              <MyImage src={client.logo} alt={client.alt} />
            </Link>
          </li>
      ))}

        </ul>

        </section>

</article>
  )
}
