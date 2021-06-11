import React from 'react'
import {withRouter} from 'react-router-dom'
import './GoHome.css'
import homeIconBlack from '../../assets/home_black.png'
import homeIconWhite from '../../assets/home_white.png'
class GoHome extends React.Component{

     navigateHome = () =>{
        const {history} = this.props;
        console.log(history);
        history.push('/');
    }
    render(){
        const{location} = this.props;
        const whitebtn = location.pathname === '/'

        return(
           <button className={`go-home-btn ${
            whitebtn? 'white-bkg' : 'gradient-bkg'
        }`}  onClick = {this.navigateHome}>
                <img
                className="home-icon"
                
                src={whitebtn? homeIconBlack: homeIconWhite}
                />
           </button>
        )
        
        
    }
}
export default withRouter(GoHome);