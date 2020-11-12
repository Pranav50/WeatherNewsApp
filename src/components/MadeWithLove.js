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
    </span> <span style={{...(props.isDayMode ? { color: "#535c68" } : { color: "white"})}}>|</span> {props.isDayMode ? <a target="_blank" href="https://github.com/Pranav50/WeatherNewsApp"><img style={{marginBottom:'0.7rem', height:'25px', width:'25px'}} src={github} /></a> : <a href="https://github.com/Pranav50/WeatherNewsApp" target="_blank"><img style={{marginBottom:'0.7rem', height:'25px', width:'25px'}} src={githubWhite} /></a>}
        </div>
    )
}

export default MadeWithLove
