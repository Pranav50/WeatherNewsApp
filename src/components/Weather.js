import React from 'react'
import './Weather.css'
import Haze from '../Weather/Haze.js'
import HeavyRain from '../Weather/LightRain';
import LightRain from '../Weather/LightRain';
import ThunderRain from '../Weather/ThunderRain'
import ModerateRain from '../Weather/ModerateRain';
import ThunderLightRain from '../Weather/ThunderLightRain';
import BrokenClouds from '../Weather/BrokenClouds';
import ScatteredClouds from '../Weather/ScatteredClouds';
import ClearSky from '../Weather/ClearSky';
import OvercastClouds from '../Weather/OvercastClouds';
import Snow from '../Weather/Snow';
import uparrow from '../images/up-arrow.png';
import downarrow from '../images/down-arrow2.png';
import humidity from '../images/humidity.png';
import wind from '../images/wind.png';
import pressure from '../images/pressure.png';
import precip from '../images/precip.png';
import { ArrowTooltip } from './ArrowTooltip';
import FreezingRain from '../Weather/FreezingRain';
import ClearSkyNight from '../Weather/ClearSkyNight';
import moment from 'moment-timezone'
import OvercastCloudsNight from '../Weather/OvercastCloudsNight';
import NightRain from '../Weather/NightRain';
import SunnyRain from '../Weather/SunnyRain';
import CelToFahr from './CelToFahr';
import CountUp from "react-countup";
var countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));  

const Weather = props => {
    const sunriseTime = props.sunrise.slice(0,5)
    const sunsetTime = props.sunset.slice(0,5)
    const time  = moment.tz(props.timezone).format('HH:mm')

    const sendNewUnitToParent = (newUnit) => {
        props.changeUnit(newUnit);
      };

    const base_weather  = {'Haze': (<Haze/>), 'Light rain': (<LightRain/>),'Heavy rain': (<HeavyRain/>),
                          'Few clouds' : (<BrokenClouds/>), 'Scattered clouds': (<ScatteredClouds/>),
                          'Broken clouds' : (<BrokenClouds/>), 'Shower rain' : (<LightRain/>),
                          'Drizzle': (<LightRain/>), 'Thunderstorm' : (<ThunderRain/>),
                          'Snow' : (<Snow/>),'Mist' : (<Haze/>),'Freezing rain' : (<FreezingRain/>), 
                          'Smoke' : (<Haze/>),'Heavy intensity rain' : (<ThunderRain/>) ,
                          'Moderate rain' : (<ModerateRain/>),'Light intensity drizzle' : (<LightRain/>),
                          'Light intensity shower rain' : (<LightRain/>), 'Scattered Clouds': (<ScatteredClouds/>),
                          'Thunderstorm with rain' : (<ThunderRain/>),
                          'Thunderstorm with light rain' : (<ThunderLightRain/>),
                          'Very heavy rain' : (<ThunderLightRain/>), '': ''}

    const day_weather   = {'Overcast clouds': (<OvercastCloudsNight/>),'Overcast Clouds': (<OvercastCloudsNight/>), 
                          'Clear sky': (<ClearSkyNight/>), 'Rain': (<NightRain/>)}
    const night_weather = {'Overcast clouds': (<OvercastClouds/>), 'Overcast Clouds': (<OvercastClouds/>), 
                           'Clear sky': (<ClearSky/>), 'Rain': (<SunnyRain/>)}
    Object.assign(day_weather, base_weather);
    Object.assign(night_weather, base_weather);

    
            return <div className="main-container2">
                        {/* Half Container Starts */}
                        <span className="half-container">
                        {/* City Country starts */}
                        <div className="cityCountry">
                        { props.city && props.country && 
                        <h6 style={{color: '#f5f6fa', fontSize:'15px',cursor:'default', marginTop: '5%'}}>
                            <ArrowTooltip title={props.city + ', ' + countries.getName(props.country,"en")} placement="right">    
                                <span>
                                <strong>{(props.city.length > 14) ?  props.city.substr(0,14)+'...,' : props.city+', '} </strong>
                                <strong>{props.country}</strong> 
                                </span>
                            </ArrowTooltip>
                        </h6> 
                        }                   
                        </div>
                        {/* City Country ends */}

                        {/* Temp and CelToFahr starts */}
                        <div className="tempCel">
                        <div className="temper">
                        { props.temp && (props.temp === 0) ?
                            <div className="glow">0° </div> : 
                            <div>
                                <CountUp
                                        start={props.unit === "C" ? props.cel : props.fahr}
                                        end={props.unit === "F" ? props.fahr : props.cel}
                                        duration={3}
                                >
                                {({ countUpRef, start }) => (
                                <span>
                                        <h1 className="glow" style={{ color: "white" }} ref={countUpRef}></h1>
                                        
                                        {/* <h4 style={{ color: "white" }}>{' '}° </h4> */}
                                        {/* {props.unit === "C" ? "C" : "F"} */}
                                </span>
                                
                                )}
                                </CountUp>
                                </div>}
                        </div>
                        <div className="celToFahr" >
                            <CelToFahr onUnitChange={sendNewUnitToParent} />
                                <h5 style={{ color: "white" }}>{' '}°{props.unit === "C" ? "C" : "F"}</h5>
                        </div>
                        </div>
                        {/* Temp and CelToFahr ends */}

                        {/* MinTemp MaxTemp starts */}
                        <div className="minMax">
                        <div className="minTemp">
                        {   
                            props.minTemp && (props.minTemp === 0) ?    
                                <h6 style={{color: 'white'}}><strong><img src={downarrow}/>0°</strong></h6>:          
                                <span style={{display:'flex', flexWrap:'wrap'}}>
                                <img src={downarrow} />
                                <CountUp
                                start={props.unit === "C" ? props.minTempCel : props.minTempFahr}
                                end={props.unit === "F" ? props.minTempFahr : props.minTempCel}
                                duration={3}
                                >
                                {({ countUpRef, start }) => (
                                    <span style={{display:'flex'}}><h4 style={{ color: "white" }} ref={countUpRef}></h4>
                                    <h6 style={{color:'white', marginLeft:'0.5rem'}}>° {props.unit === "C" ? "C" : "F"}</h6>
                                    </span>
                                )}
                                </CountUp>
                                </span>

                        }
                        </div>
                        <div className="maxTemp">
                            {   
                            props.maxTemp && (props.maxTemp === 0) ?    
                            <h6 style={{color: 'white'}}><strong><img src={uparrow}/>0°</strong></h6>: 
                            <span style={{display:'flex', flexWrap:'wrap'}}>
                                    <img src={uparrow} />
                                    <CountUp
                                    start={props.unit === "C" ? props.maxTempCel : props.maxTempFahr}
                                    end={props.unit === "F" ? props.maxTempFahr : props.maxTempCel}
                                    duration={3}
                                    >
                                        {({ countUpRef, start }) => (
                                            <span style={{display:'flex'}}><h4 style={{ color: "white" }} ref={countUpRef}></h4>
                                            <h6 style={{color:'white', marginLeft:'0.5rem'}}>{'  '}° {props.unit === "C" ? "C" : "F"}</h6>
                                            </span>
                                        )}
                                    </CountUp>
                            </span>
                            }
                        </div>
                        </div>
                        {/* MinTemp MaxTemp ends */}
                        
                        {/* Pressure Precip starts */}
                        <div className="pressPrecip"> {/* humidPrecip -> pressPrecip */}
                        <div className="press">
                        { props.pressure &&  (props.pressure === 0) ? 
                            <span style={{display: 'flex', flexWrap:'wrap'}}>
                            <ArrowTooltip title="Pressure" placement="top">
                                <img src={pressure} height="25px" style={{marginRight: '3px'}}/>
                            </ArrowTooltip>
                            <h6 style={{color: 'white'}}>
                            <strong style={{marginLeft: '4px'}}>0{' '}mb</strong>
                            </h6>
                            </span> : 
                            <span style={{display: 'flex', flexWrap:'wrap'}}>
                            <ArrowTooltip title="Pressure" placement="top">
                                <img src={pressure} height="25px" style={{marginRight: '3px'}}/>
                            </ArrowTooltip>
                            <h6 style={{color: 'white'}}>
                            <strong style={{marginLeft: '4px'}}>{Math.trunc(props.pressure)}{' '}hpa</strong>
                            </h6>
                            </span>
                        }
                        </div>

                        <div className="precip">
                        { props.precip && (props.precip === '') ?   
                        <span style={{display: 'flex', flexWrap:'wrap'}}>
                        <ArrowTooltip title="Precipitation" placement="top">
                        <img src={precip} height="20px" style={{marginRight: '10px'}}/>
                        </ArrowTooltip>
                        <h6 style={{color: 'white'}}>
                        <strong>0%</strong></h6>
                        </span> : 
                        <span style={{display: 'flex', flexWrap:'wrap'}}>
                        <ArrowTooltip title="Precipitation" placement="top">
                        <img src={precip} height="20px" style={{marginRight: '10px'}}/>
                        </ArrowTooltip>
                        <h6 style={{color: 'white'}}><strong>{props.precip}%</strong></h6>
                        </span>
                        }   
                        </div> 
                        </div>
                        {/* Pressure Precip ends */}

                        {/* Wind Humid starts */}
                        <div className="windHumid">{/* windPress -> windHumid */}
                        <div className="wind">
                        { props.wind && (props.wind === '') ?
                        <span style={{display: 'flex', flexWrap:'wrap'}}>
                        <ArrowTooltip title="Wind" placement="top">
                            <img src={wind} height="25px" style={{marginRight: '10px'}}/>
                        </ArrowTooltip>
                        <h6 style={{color: 'white'}}>
                            <strong>0{' '}km/h</strong>
                        </h6>
                        </span> :
                        <span style={{display: 'flex', flexWrap:'wrap'}}>
                        <ArrowTooltip title="Wind" placement="top">
                            <img src={wind} height="25px" style={{marginRight: '10px'}}/>
                        </ArrowTooltip>
                        <h6 style={{color: 'white'}}>
                            <strong>{Math.trunc(props.wind * 3.6)}{' '}km/h</strong>
                        </h6>
                        </span>
                        }
                        </div>

                        <div className="humid">
                        { props.humidity && (props.humidity === '') ?
                            <span style={{display: 'flex', flexWrap:'wrap'}}>  
                            <ArrowTooltip title="Humidity" placement="top">
                                <img src={humidity} height="20px" style={{marginRight: '10px'}}/>
                            </ArrowTooltip>
                            <h6 style={{color: 'white'}}>
                                <strong>0%</strong>
                            </h6>
                            </span> :
                            <span style={{display: 'flex', flexWrap:'wrap'}}>  
                            <ArrowTooltip title="Humidity" placement="top">
                                <img src={humidity} height="20px" style={{marginRight: '10px'}}/>
                            </ArrowTooltip>
                            <h6 style={{color: 'white'}}>
                                <strong>{props.humidity}%</strong>
                            </h6>
                            </span>}
                        </div>
                        </div>
                        {/* Wind Humid ends */}
                        </span>
                        {/* Half Container Ends */}
                        
                        {/* Half Container2 Starts  */}
                        <span className="half-container2">
                        
                        {/* Desc WeatherIm starts */}
                        <div className="descWeatherIm">
                        <div className="desc" >
                        { props.description && <h5>
                        <b>{props.description}</b></h5>}
                        </div>
                        <div className="weatherIm">
                        { props.error && <h6><strong>{props.error}</strong></h6>}
                        { (time >= sunsetTime || time <= sunriseTime) ? 
                            day_weather[props.description]: night_weather[props.description]}
                        </div>
                        </div> 
                        {/* Desc WeatherIm ends */}
                        </span>
                        {/* Half Container2 Ends */}
                        
                   </div>    
            }
            

export default Weather;