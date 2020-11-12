import React from 'react'
import './Weather2.css'

const FreezingRain = () => {
    return (
        <div>
        <svg className="svg" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
        viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
        <g id="rain">
       <path className="raindrop" id="drop1" fill="url(#XMLID_19_)" stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="0.5" d="
           M33.8,67.2c0,0-10.4,14.3,0,14.3C44.4,81.5,33.8,67.2,33.8,67.2z"/>
       <path className="raindrop" id="drop2" fill="url(#XMLID_19_)" stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="0.5" d="
           M48.2,67c0,0-10.4,14.3,0,14.3C58.8,81.3,48.2,67,48.2,67z"/>
       <linearGradient id="XMLID_19_" gradientUnits="userSpaceOnUse" x1="57.7887" y1="74.1052" x2="67.118" y2="74.1052">
           <stop  offset="0.4718" style={{stopColor:'#5CCAEB'}}/>
           <stop  offset="0.5339" style={{stopColor:'#51B1CD'}}/>
       </linearGradient>
       <path className="raindrop" id="drop3" fill="url(#XMLID_19_)" stroke="#000000" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="0.5" d="
           M62.4,67c0,0-10.4,14.3,0,14.3C73,81.3,62.4,67,62.4,67z"/>
        </g>
        <g id="bigCloudRain">
       
           <path id="XMLID_1_" fill="#F4F4F4" stroke="#515251" strokeWidth="0.5" strokeMiterlimit="10" strokeOpacity="8.000000e-002" d="
           M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
           c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"/>
        </g>
        <g id="snowflakes">
      <g id="flake3">
          <path fill="#5BCAEB" d="M72,78.1c0.6,0.6,0.6,1.6,0,2.2l0,0c-0.6,0.6-1.6,0.6-2.2,0l-8.7-8.7C60.5,71,60.3,70,61,69.3
              s1.7-0.4,2.3,0.2L72,78.1z"/>
          <path fill="#5BCAEB" d="M63.1,80.3c-0.6,0.6-1.6,0.6-2.2,0l0,0c-0.6-0.6-0.6-1.6,0-2.2l8.7-8.7c0.6-0.6,1.7-0.8,2.3-0.2
              c0.7,0.7,0.4,1.7-0.2,2.3L63.1,80.3z"/>
          <path fill="#5BCAEB" d="M60.2,76.3c-0.9,0-1.5-0.7-1.5-1.5l0,0c0-0.9,0.7-1.5,1.5-1.5h12.3c0.9,0,1.8,0.6,1.8,1.5
              c0,0.9-0.9,1.5-1.8,1.5H60.2z"/>
          <path id="XMLID_8_" fill="#5BCAEB" d="M68,81c0,0.9-0.7,1.5-1.5,1.5l0,0c-0.9,0-1.5-0.7-1.5-1.5V68.8c0-0.9,0.6-1.8,1.5-1.8
              c0.9,0,1.5,0.9,1.5,1.8V81z"/>
      </g>
      <g id="flake2">
          <path fill="#5BCAEB" d="M53.5,78.1c0.6,0.6,0.6,1.6,0,2.2l0,0c-0.6,0.6-1.6,0.6-2.2,0l-8.7-8.7C42,71,41.8,70,42.5,69.3
              c0.7-0.7,1.7-0.4,2.3,0.2L53.5,78.1z"/>
          <path fill="#5BCAEB" d="M44.6,80.3c-0.6,0.6-1.6,0.6-2.2,0l0,0c-0.6-0.6-0.6-1.6,0-2.2l8.7-8.7c0.6-0.6,1.7-0.8,2.3-0.2
              c0.7,0.7,0.4,1.7-0.2,2.3L44.6,80.3z"/>
          <path fill="#5BCAEB" d="M41.7,76.3c-0.9,0-1.5-0.7-1.5-1.5l0,0c0-0.9,0.7-1.5,1.5-1.5H54c0.9,0,1.8,0.6,1.8,1.5
              c0,0.9-0.9,1.5-1.8,1.5H41.7z"/>
          <path id="XMLID_17_" fill="#5BCAEB" d="M49.5,81c0,0.9-0.7,1.5-1.5,1.5l0,0c-0.9,0-1.5-0.7-1.5-1.5V68.8c0-0.9,0.6-1.8,1.5-1.8
              c0.9,0,1.5,0.9,1.5,1.8V81z"/>
      </g>
      <g id="flake1">
          <path fill="#5BCAEB" d="M35.1,78.1c0.6,0.6,0.6,1.6,0,2.2l0,0c-0.6,0.6-1.6,0.6-2.2,0l-8.7-8.7c-0.6-0.6-0.8-1.7-0.2-2.3
              c0.7-0.7,1.7-0.4,2.3,0.2L35.1,78.1z"/>
          <path fill="#5BCAEB" d="M26.3,80.3c-0.6,0.6-1.6,0.6-2.2,0l0,0c-0.6-0.6-0.6-1.6,0-2.2l8.7-8.7c0.6-0.6,1.7-0.8,2.3-0.2
              c0.7,0.7,0.4,1.7-0.2,2.3L26.3,80.3z"/>
          <path fill="#5BCAEB" d="M23.4,76.3c-0.9,0-1.5-0.7-1.5-1.5l0,0c0-0.9,0.7-1.5,1.5-1.5h12.3c0.9,0,1.8,0.6,1.8,1.5
              c0,0.9-0.9,1.5-1.8,1.5H23.4z"/>
          <path fill="#5BCAEB" d="M31.1,81c0,0.9-0.7,1.5-1.5,1.5l0,0c-0.9,0-1.5-0.7-1.5-1.5V68.8c0-0.9,0.6-1.8,1.5-1.8s1.5,0.9,1.5,1.8
              V81z"/>
      </g>
  </g>
        </svg>            
        </div>
    )
}

export default FreezingRain