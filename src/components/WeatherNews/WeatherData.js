import React, { Component } from 'react';
import DailyHourly from '../forecast/DailyHourly';
import SunriseSunset from '../forecast/SunriseSunset';
import Spinner from '../Spinner';
import Weather from '../Weather';
import defaultDayImg from '../../images/weather_banner.jpg'
import '../../App.css'
import Github from '../Github';
    
class WeatherData extends Component {
  constructor(props) {
    super(props);

  }
    render() {
        const {country, cel, fahr, city, humidity, description, pressure, wind, isDayMode, maxTempCel, 
                minTempCel, minTempFahr, maxTempFahr, today, timezone, moonrise, moonset, sunrise, sunset, time, 
                sunriseTime, sunsetTime, dailyforecast, hourlyforecast, precip, unit, changeUnit} = this.props;

        return (
            <> 
                            <React.Fragment>
                            <div className="big-container">   
                              <div className="weather-box">
                              <Weather
                                city={city}
                                country={country}
                                humidity={humidity}
                                description={description}
                                pressure={pressure}
                                wind={wind}
                                sunrise={sunrise}
                                sunset={sunset}
                                timezone={timezone}
                                cel={cel}
                                fahr={fahr}
                                maxTempCel={maxTempCel}
                                minTempCel={minTempCel}
                                maxTempFahr={maxTempFahr}
                                minTempFahr={minTempFahr}
                                precip={precip}
                                unit={unit}
                                changeUnit={changeUnit}
                              /> 
                              </div>
                
                              <div className="timedate-box">
                                <SunriseSunset
                                  sunrise={sunrise} 
                                  sunset={sunset}
                                  moonrise={moonrise} 
                                  moonset={moonset}
                                  today={today}
                                  timezone={timezone}
                                />      
                                   
                                <DailyHourly timezone={timezone} dailyforecast={dailyforecast} 
                                  hourlyforecast={hourlyforecast} unit={unit} time={time} isDayMode={isDayMode} />
                              </div>
                              
                            </div>

                            {/* Video Background Starts */}
                            <div>
                            {
                              // Night Weather Videos
                              (time >= sunsetTime || time <= sunriseTime) ?
                               
                               description == 'Haze' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Haze_Night.gif" id="myImg" /> : 
                              [description == 'Light rain' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Light_Rain_Night.gif" id="myImg" /> : 
                              [description == 'Overcast clouds' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Overcast_Clouds_Night.gif" id="myImg" /> :
                              [description == 'Overcast Clouds' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Overcast_Clouds_Night.gif" id="myImg" /> : 
                              [description == 'Clear sky' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Clear_Sky_Night.gif" id="myImg" /> :  
                              [description == 'Few clouds' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Few_Clouds_Night.gif" id="myImg" /> : 
                              [description == 'Scattered clouds' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Scattered_Clouds_Night.gif" id="myImg" />:
                              [description == 'Scattered Clouds' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Scattered_Clouds_Night.gif" id="myImg" />: 
                              [description == 'Broken clouds' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Broken_Clouds_Night.gif" id="myImg" /> : 
                              [description == 'Shower rain' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Shower_Rain_Night.gif" id="myImg" /> : 
                              [description == 'Rain'? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Rain_Night.gif" id="myImg" />:
                              [description == 'Drizzle'? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Drizzle_Night.gif" id="myImg" />:
                              [description == 'Freezing rain' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Freezing_Rain_Night.gif" id="myImg" />: 
                              [description == 'Thunderstorm' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Thunderstorm_Night.gif" id="myImg" />: 
                              [description == 'Snow' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Snowfall_Night.gif" id="myImg" />:
                              [description == 'Light Snow' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Light_Snowfall_Night.gif" id="myImg" />:
                              [description == 'Heavy Snow' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Heavy_Snowfall_Night.gif" id="myImg" />: 
                              [description == 'Mist' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Mist_Night.gif" id="myImg" />: 
                              [description == 'Smoke' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Smoke_Night.gif" id="myImg" />: 
                              [description == 'Heavy intensity rain' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Heavy_Rain_Night.gif" id="myImg" />:
                              [description == 'Moderate rain' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Moderate_Rain_Night.gif" id="myImg" />:
                              [description == 'Light intensity drizzle' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather-night/Light_Drizzle_Night.gif" id="myImg" /> :
                              <img src={defaultDayImg} id="myImg" height="20px" />]
                              ]]]]]]]]]]]]]]]]]]]]  
                              :
                              // Day Weather Videos 
                            description == 'Haze' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Freezing_Rain.gif" id="myImg" /> : 
                            [description == 'Light rain' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Light_Rain.gif" id="myImg" /> : 
                            [description == 'Overcast clouds' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Overcast_Clouds.gif" id="myImg" /> :
                            [description == 'Overcast Clouds' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Overcast_Clouds.gif" id="myImg" /> :  
                            [description == 'Clear sky' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Clear_Sky.gif" id="myImg" /> :  
                            [description == 'Few clouds' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Few_Clouds.gif" id="myImg" /> : 
                            [description == 'Scattered clouds' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Scattered_Clouds.gif" id="myImg" />:
                            [description == 'Scattered Clouds' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Scattered_Clouds.gif" id="myImg" />: 
                            [description == 'Broken clouds' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Broken_Clouds.gif" id="myImg" /> : 
                            [description == 'Shower rain' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Shower_Rain.gif" id="myImg" /> : 
                            [description == 'Rain'? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Rain.gif" id="myImg" />:
                            [description == 'Drizzle'? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Drizzle.gif" id="myImg" />:
                            [description == 'Freezing rain' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Freezing_Rain.gif" id="myImg" />: 
                            [description == 'Thunderstorm' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Thunderstorm.gif" id="myImg" />: 
                            [description == 'Snow' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Snowfall.gif" id="myImg" />:
                            [description == 'Light Snow' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Light_Snowfall.gif" id="myImg" />:
                            [description == 'Heavy Snow' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Heavy_Snowfall.gif" id="myImg" />: 
                            [description == 'Mist' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Mist.gif" id="myImg" />: 
                            [description == 'Smoke' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Smoke.gif" id="myImg" />: 
                            [description == 'Heavy intensity rain' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Heavy_Rain.gif" id="myImg" />:
                            [description == 'Moderate rain' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Moderate_Rain.gif" id="myImg" />:
                            [description == 'Light intensity drizzle' ? <img src="https://media.githubusercontent.com/media/Pranav5000/WeatherApp/master/src/images/weather/Light_Drizzle.gif" id="myImg" /> :
                            <img src={defaultDayImg} id="myImg" height="20px" />]
                            ]]]]]]]]]]]]]]]]]]]]
                             }
                            
                            </div>
                            {/* Video Background Ends */}
                            </React.Fragment>
   

            </>
        );
    }
}

export default WeatherData;