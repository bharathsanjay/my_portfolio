
import React from 'react'
import './About.css';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png'
import FooterLink from '../FooterLink/FooterLink';
import aboutAnime from './../../assets/about_anime.gif'

export default function About() {
    return (
        <div className="section-container">
            <Header
            heading = "About me"
            details = "IT undergrad | web developer|software engineer" 
            />


            <div className="about-main">
                <div className="about-main-left">
                <h3 className="about-sub-head">Student</h3>
                <p className="about-details">Pre final Engineering undergrad pursuing  b.tech in Information Technology at Rajalakshmi Engineering College.</p>
                
                <h3 className="about-sub-head">Software developer</h3>
                    <p className="about-details">Aspiring Software developer who loves to explore wide range of technologies and ways to contribute in tech.</p>

                
                </div>
                
                <div className="about-main-right">
                    <img src={aboutAnime} alt="animation" className="about-anime" />
                   
                </div>
            </div>

            <FooterLink
                phrase = "Check out my "
                link = "projects!"
                toAdress="/projects"
            />

            <div className="vector-frame">
                <img src={aboutVector} alt=""  className="about-vector"/>
            </div>
            
        </div>
    )
}
