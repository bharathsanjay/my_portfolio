import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import homeAnime from './../../assets/home_anime.gif'

function Home() {
    return (
        <div className="home-container">
             <div className="header-text">
                 <h1>Welcome to my portfolio!</h1>
                 <p>This is Bharath Sanjay, an aspiring software dev</p>
             </div>
            <div className="head-btns">
                <Link to="/about" className="btn btn-white">
                    <p className="btn-text">Know more about me</p>
                </Link>
               
            </div>
                <div className="splash-image">
                    <img src={homeAnime} alt="anime" className="home-anime" />

                </div>
        </div>
    )
}

export default Home
