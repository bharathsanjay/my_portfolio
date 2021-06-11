import React, { Component } from 'react'
import './NavBar.css'
import { slide as Menu } from 'react-burger-menu'
import {Link,withRouter} from 'react-router-dom'
class NavBar extends React.Component {
   render(){
       const {location} = this.props;

    const homeclass = location.pathname === '/' ? 'active-item' : '';
    const aboutclass = location.pathname === '/about' ? 'active-item' : '';
    const skillsclass = location.pathname === '/skills' ? 'active-item' : '';
    const projectsclass = location.pathname === '/projects' ? 'active-item' : '';



    return (
        <Menu>
        <Link to ="/" className={`menu-item ${homeclass}`} >Home</Link>
        <Link to ="/about" className={`menu-item ${aboutclass}`} >About</Link>
        <Link to ="/skills" className={`menu-item ${skillsclass}`} >Skills</Link>
        <Link to ="/projects" className={`menu-item ${projectsclass}`}>Projects</Link>

        </Menu>
      );
   }
}

export default  withRouter(NavBar)
