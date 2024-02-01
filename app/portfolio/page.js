"use client"

import { IoBookOutline, IoChevronDown, IoEyeOutline } from "react-icons/io5";
import "@/app/globals.css";
import { useState, useEffect } from 'react';
import MyImage from "@/app/components/Image"
import Project1 from "@/public/project-1.png";
import Project2 from "@/public/project-2.png";
import Project3 from "@/public/project-3.png";
import Project4 from "@/public/project-4.png";
import Project5 from "@/public/project-5.png";
import Project6 from "@/public/project-6.png";
import Project7 from "@/public/project-7.png";
import Project8 from "@/public/project-8.png";
import Project9 from "@/public/project-9.png";



export default function Portfolio(){
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [isSelectBoxActive, setIsSelectBoxActive] = useState(false);

    const projects = [
        { src: Project1, link : "#", alt: "finance", title: "Finance", category: "Web development" },
        { src: Project2, link : "#", alt: "orizon", title: "Orizon", category: "Web development" },
        { src: Project3, link : "#", alt: "fundo", title: "Fundo", category: "Web design" },
        { src: Project4, link : "#", alt: "brawlhalla", title: "Brawlhalla", category: "Applications" },
        { src: Project5, link : "#", alt: "dsm.", title: "DSM.", category: "Web design" },
        { src: Project6, link : "#", alt: "metaspark", title: "MetaSpark", category: "Web design" },
        { src: Project7, link : "#", alt: "summary", title: "Summary", category: "Web development" },
        { src: Project8, link : "#", alt: "task manager", title: "Task Manager", category: "Applications" },
        { src: Project9, link : "#", alt: "arrival", title: "Arrival", category: "Web development" },
      ];
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
    if (selectedCategory === 'All') {
        setFilteredProjects(projects);
    } else {
        setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
    }, [selectedCategory]);

    const handleSelectBoxClick = () => {
        setIsSelectBoxActive(!isSelectBoxActive);
      };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setIsSelectBoxActive(false);
      };


    return (
        <article className="portfolio active" data-page="portfolio">

        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">

            <ul className="filter-list">
                <li className="filter-item">
                    <button className={selectedCategory === 'All' ? 'active' : ''} onClick={() => handleCategoryChange('All')} data-filter-btn>All</button>
                </li>
                <li className="filter-item">
                    <button className={selectedCategory === 'Web design' ? 'active' : ''} onClick={() => handleCategoryChange('Web design')} data-filter-btn>Web design</button>
                </li>
                <li className="filter-item">
                    <button className={selectedCategory === 'Applications' ? 'active' : ''} onClick={() => handleCategoryChange('Applications')} data-filter-btn>Applications</button>
                </li>
                <li className="filter-item">
                    <button className={selectedCategory === 'Web development' ? 'active' : ''} onClick={() => handleCategoryChange('Web development')} data-filter-btn>Web development</button>
                </li>
            </ul>


          <div className="filter-select-box">
            <button className={`filter-select ${isSelectBoxActive ? 'active' : ''}`} onClick={handleSelectBoxClick} data-select>
            <div className="select-value" data-select-value>{selectedCategory}</div>
            <div className="select-icon">
                <IoChevronDown className="ion-icon" />
            </div>
            </button>
            {isSelectBoxActive && (
            <ul className="select-list">
                <li className="select-item">
                <button onClick={() => handleCategoryChange('All')} data-select-item>All</button>
                </li>
                <li className="select-item">
                <button onClick={() => handleCategoryChange('Web design')} data-select-item>Web design</button>
                </li>
                <li className="select-item">
                <button onClick={() => handleCategoryChange('Applications')} data-select-item>Applications</button>
                </li>
                <li className="select-item">
                <button onClick={() => handleCategoryChange('Web development')} data-select-item>Web development</button>
                </li>
            </ul>
            )}
        </div>

          <ul className="project-list">
            {filteredProjects.map((project, index) => (
              <li key={index} className="project-item  active" data-filter-item data-category={project.category}>
                <a href={project.link}>
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <IoEyeOutline className="ion-icon" />
                    </div>
                    <MyImage src={project.src} alt={project.alt} loading="lazy" />
                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </a>
              </li>
            ))}
          </ul>

        </section>

      </article>
    )
}