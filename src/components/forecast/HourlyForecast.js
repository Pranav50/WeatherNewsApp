import React, { Component } from 'react'
import { MDBCardBody,MDBCardHeader} from 'mdbreact'
import CountUp from "react-countup";
import './HourlyForecast.css'
import moment from 'moment-timezone'  

export class HourlyForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {};   
    }
    render() {
        const { data, timezone, unit, time} = this.props;
        
        const cel = Math.round(data.temp);
        const fahr = Math.round(data.temp * 1.8) + 32;

        if(!data) return null;  

        // Code for other city's local time based on their time-zone
        const local = new Date(data.timestamp_local)
        const fmt   = "h A";
        const m = moment.tz(local, fmt, timezone).utc().format(fmt);
        
        return (   
            <MDBCardHeader className="forecast-header" style={{ height: '3.5rem'}}>
                        <div className="hour">
                            <div className="square2">{m}</div>
                        </div>
                        <div className="img2">
                            <div className="inner-container">
                            <img style={{height:'2.2rem'}} src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} />
                            </div>
                        </div>
                        <div className="temp2">
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
                        <div className="desc2">
                            <div className="muted-text">{data.weather.description}</div>
                        </div>
            </MDBCardHeader>  
        )
    }
}

export default HourlyForecast