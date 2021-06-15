import React from 'react'
import './Header.css'



export default function Header({heading,details}) {
    return (
        <div className="header-container">
            <h1>{heading}</h1>
            <p>{details}</p>

           
        </div>

    )
}
