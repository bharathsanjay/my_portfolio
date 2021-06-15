import React from 'react'
import './FooterLink.css'
import {Link} from 'react-router-dom'


function FooterLink({phrase,link,toAdress}) {
    return (
        <div className="footer-link">
            {phrase}
            <Link to={toAdress} className="footer-link-element" >
                {link}
            </Link>
            
        </div>
    )
}

export default FooterLink
