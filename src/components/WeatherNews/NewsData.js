import React from 'react';
import puc from '../../images/page-under-construction.png';

const NewsData = (props) => {

        return (
            <div style={{...props.isDayMode ? {color:"#535c68", transition: "0.6s ease-in-out" } : 
            {color: 'white', transition: "0.6s ease-in-out"}, textAlign: 'center'}}>
                <h2>News Data</h2>
                <p>PAGE UNDER CONSTRUCTION</p>
                <img src={puc} height="120rem" />
                <span style={{textAlign:'left'}}>
                <h4>Salient Features</h4>
                <ul>
                    <li>Weather news of your city</li>
                    <li>Nation News</li>
                    <li>Gobal News</li>
                    <li>Beautiful and Crisp UI</li>
                    <li>Easy to use</li>
                    <li>And much more...</li>
                </ul>
                </span>
            </div>
        );
}

export default NewsData;