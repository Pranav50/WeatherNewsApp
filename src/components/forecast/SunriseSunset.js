import React, {useState, createContext} from 'react'
import sunrise_img from '../../images/sunrise3.png'
import sunset_img from '../../images/sunset3.png'
import moonrise_img from '../../images/moonrise2.png'
import moonset_img from '../../images/moonset2.png' 
import { ArrowTooltip } from '../ArrowTooltip';
import './SunriseSunset.css'
import '../../App.css'
import Clock from 'react-live-clock';
import morning_sun from '../../images/morning-sun.png'
import afternoon_sun from '../../images/afternoon-sun.png'
import evening_sun from '../../images/evening-sun.png'
import night from '../../images/moon.png'
import midnight from '../../images/moon-bats.png' 
import moment from 'moment-timezone'

export const TimeContext = createContext()

const SunriseSunset = (props) => {
    const sunrise = props.sunrise
    const sunset = props.sunset
    const moonrise = props.moonrise
    const moonset = props.moonset

    const sunriseTime = props.sunrise.slice(0,5)
    const sunsetTime = props.sunset.slice(0,5)

    const timeStr = sunrise.split(':');
    const timeStr2 = sunset.split(':');
    const timeStr3 = moonrise.split(':');
    const timeStr4 = moonset.split(':');

    const sunrise2 = timeStr[0] >= 12 && (timeStr[0]-12 || 12) + ':' + timeStr[1] + ' PM' || (Number(timeStr[0]) || 12) + ':' + timeStr[1] + ' AM';
    const sunset2 = timeStr2[0] >= 12 && (timeStr2[0]-12 || 12) + ':' + timeStr2[1] + ' PM' || (Number(timeStr2[0]) || 12) + ':' + timeStr2[1] + ' AM';
    const moonrise2 = timeStr3[0] >= 12 && (timeStr3[0]-12 || 12) + ':' + timeStr3[1] + ' PM' || (Number(timeStr3[0]) || 12) + ':' + timeStr3[1] + ' AM';
    const moonset2 = timeStr4[0] >= 12 && (timeStr4[0]-12 || 12) + ':' + timeStr4[1] + ' PM' || (Number(timeStr4[0]) || 12) + ':' + timeStr4[1] + ' AM';

    const time2  = moment.tz(props.timezone).format('HH:mm')
    
    return (
        <React.Fragment>
            <div className="main-body">
                <div className="clock-date">
                    <span className="clock">
                    {/* Live Clock Starts */}
                        <Clock format={'hh:mm:ss A'} ticking={true} timezone={props.timezone} /> 
                    {/* Live Clock Ends */}

                    </span>
                    
                
                    <span className="date">
                        {/* Date Starts */}
                            <Clock className="day" format={'dddd'} timezone={props.timezone} />,{' '}
                            <Clock className="date" format={'MMMM Do YYYY'} timezone={props.timezone} />
                        {/* Date Ends */}
                    </span>
                </div>
                <div className="sumnoon-phase">
                    {/* Sun or Moon Image Starts */}
                    <span className="sunmoon">
                    {
                        ((time2) >= sunriseTime && (time2) <= '11:59') ? <ArrowTooltip title="Morning" placement="top"><img src={morning_sun} height="50px" width="50px"/></ArrowTooltip> :
                        ((time2) >= '12:00' && (time2) <= '15:59') ? <ArrowTooltip title="Afternoon" placement="top"><img src={afternoon_sun} height="50px" width="50px" /></ArrowTooltip> :
                        ((time2) >= '16:00' && (time2) <= sunsetTime) ? <ArrowTooltip title="Evening" placement="top"><img src={evening_sun} height="50px" width="50px"/></ArrowTooltip> :
                        ((time2) > sunsetTime && (time2) <= '23:59') ? <ArrowTooltip title="Night" placement="top"><img src={night} height="50px" width="50px"/></ArrowTooltip> : 
                        <ArrowTooltip title="Mid-Night" placement="top"><img src={midnight} height="50px" width="50px"/></ArrowTooltip>
                        }
                    </span>
                    {/* Sun or Moon Image Ends */}

                    <span className="phase">
                    {/* SunriseSunset Starts */}
                    <div className="phasetime" style={{ color: '#ced6e0', fontSize:'1vw'}}>
                    <ArrowTooltip placement="top" title="Sunrise">
                        <img src={sunrise_img} />
                    </ArrowTooltip><br/>
                    <strong style={{fontSize: '11px', fontFamily: 'Montserrat'}}>
                        {sunrise2 === '12:undefined AM' ? <ArrowTooltip title="No Data" placement="top"><span style={{cursor:'default'}}>NA</span></ArrowTooltip> : sunrise2}
                    </strong>
                    </div>
                    <div className="phasetime" style={{ color: '#ced6e0', fontSize:'1vw'}}>
                    <ArrowTooltip placement="top" title="Sunset">
                        <img src={sunset_img} />
                    </ArrowTooltip><br/>
                    <strong style={{fontSize: '11px', fontFamily: 'Montserrat'}}>
                        {sunset2 === '12:undefined AM' ? <ArrowTooltip title="No Data" placement="top"><span style={{cursor:'default'}}>NA</span></ArrowTooltip> : sunset2}
                    </strong>
                    </div>
                    <div className="phasetime" style={{ color: '#ced6e0', fontSize:'1vw'}}>
                    <ArrowTooltip placement="top" title="Moonrise">
                        <img src={moonrise_img} />
                    </ArrowTooltip><br/>
                    <strong style={{fontSize: '11px', fontFamily: 'Montserrat'}}>
                        {moonrise2 === '12:undefined AM' ? <ArrowTooltip title="No Data" placement="top"><span style={{cursor:'default'}}>NA</span></ArrowTooltip> : moonrise2}
                    </strong>
                    </div>
                    <div className="phasetime" style={{ color: '#ced6e0', fontSize:'1vw'}}>
                    <ArrowTooltip placement="top" title="Moonset">
                        <img src={moonset_img} />
                    </ArrowTooltip><br/>
                    <strong style={{fontSize: '11px', fontFamily: 'Montserrat'}}>
                        {moonset2 === '12:undefined AM' ? <ArrowTooltip title="No Data" placement="top"><span style={{cursor:'default'}}>NA</span></ArrowTooltip> : moonset2}
                    </strong>
                    </div>

                    {/* SunriseSunset Ends */}
                    </span>
                </div>
            </div>
        </React.Fragment>
    ) 
}



export default SunriseSunset
