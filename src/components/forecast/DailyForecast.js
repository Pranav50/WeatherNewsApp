import React, { Component } from 'react'
import { MDBCardBody,MDBCardHeader} from 'mdbreact'
import CountUp from "react-countup";
import './DailyForecast.css'

export class DailyForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getDay = (time) => {
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday ", "Friday", "Saturday"];
        return dayNames[(new Date(time).getDay())];
    }
    
    render() {
        const { data, unit, time} = this.props;

        const cel = Math.round(data.temp);
        const fahr = Math.round(data.temp * 1.8) + 32;
         
        if(!data) return null;
        const timestamp = data.ts
        const timeNew = new Date(timestamp * 1000)
        const day = this.getDay(timeNew)
        const day2 = day.slice(0,3) 

        return ( 

            <MDBCardHeader className="forecast-header" style={{height: '3.4rem'}} > 
                        <div className="day">
                            <div className="square">{day2}</div>
                        </div>
                        <div className="img">
                            <div className="inner-container">
                            <img style={{height:'2.2rem'}} src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} />
                            </div>
                        </div>
                        <div className="temp">
                            <div className="text">
                            <CountUp
                                    start={this.props.unit === "C" ? cel : fahr}
                                    end={this.props.unit === "F" ? fahr : cel}
                                    duration={2}
                            >
                            {({ countUpRef, start }) => (
                                <span style={{display:'flex'}}><h6 style={{ color: "white" }} ref={countUpRef}></h6>
                                <h6 style={{marginLeft:'0.5rem'}}>° {unit === "C" ? "C" : "F"}</h6>
                                </span>
                            )}
                            </CountUp>
                            
                            </div>
                        </div>
                        <div className="desc">
                            <div className="muted-text">{data.weather.description}</div>
                        </div>
            </MDBCardHeader> 


        )
    }
}

export default DailyForecast

