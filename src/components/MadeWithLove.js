import React from 'react'
import './MadeWithLove.css'

const MadeWithLove = (props) => {
    
    return (
        <div className="madeWithLove" >
        <span className={props.isDayMode ? "madeWithLove-text" : "madeWithLove-text-Night"}>
        Made with <i className="fa fa-heart pulse"></i>
        {'  '}
        by {'  '}  
        <a style={{...(props.isDayMode ? { color: "#535c68" } : { color: "white"})}} 
        href="https://www.linkedin.com/in/pranav-pawar-661b9838/" target="_blank">
        Pranav Pawar</a>
    </span>
        </div>
    )
}

export default MadeWithLove
