import React from 'react';
import Form from './components/Form'; 
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MadeWithLove from './components/MadeWithLove';
import WeatherAndNews from './components/WeatherAndNews';
import moment from 'moment-timezone'
import Spinner from './components/Spinner';

// 1. WEATHER API
// weatherbit 
const WEATHER_API = process.env.REACT_APP_WEATHER_API
// process.env.REACT_APP_WEATHER_API

// 2. LOCATION API
//ipgeolocation
const LOCATION_API = process.env.REACT_APP_LOCATION_API

// 3. NEWS API
// newsapi (Limited articles for India and its location)
const NEWS_API = process.env.REACT_APP_NEWS_API

const IP_LOCATION = `https://api.ipgeolocation.io/astronomy?apiKey=${LOCATION_API}`

// weatherbit current, daily and hourly forecast
const CURRENT_API = `https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/current?`

const FORECAST_API = `https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/forecast/daily?`

const HOURLY_API = `https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/forecast/hourly?`

class App extends React.Component  { 
  constructor(props) {
    super(props);
    
    this.state = {
      isLoading: true,
      lat: '',
      lon: '',
      city: '',
      country: '',
      humidity: '',
      temp: '',
      wind: '',
      description: '',
      precip: '',
      pressure: '',
      hourlyforecast: '',
      error: '',
      sunrise: '',
      sunset: '',
      moonrise: '',
      moonset: '',
      today:'',
      timezone:'',

      maxTempCel: "",
      maxTempFahr: "",
      minTempCel: "",
      minTempFahr: "",
      unit: "C",
      cel: "",
      fahr: "",

      dayNightToggle: false,
      newWeatherOrNewsValue: "Weather",
    }
  }

  componentDidMount = async () => {
      // Tracking the location and 
      // Setting the state of latitude and longitude values
      navigator.geolocation.getCurrentPosition(async (position) => {
        this.setState({
          lat:  position.coords.latitude.toFixed(3),
          lon: position.coords.longitude.toFixed(3)
        }, () => {
            this.fetchWeather()
            //this.fetchNews()
        })
        
      },
      (error) => {
        toast.error(`${error.message}`,{
          autoClose: 3000
        });
    },
      {
        enableHighAccuracy: true,
        timeout: 50000,
        maximumAge: 1000
      }) 
      
      localStorage.getItem('dayNightToggle')
  }

  onUnitChange = (newUnit) => {
    this.setState(
      {
        unit: newUnit
      }
    );
  };

  weatherOnNewsValue = (weatherOrNewsValue) => {
    this.setState(
      {
        newWeatherOrNewsValue: weatherOrNewsValue
      }
    );
  }; 

  handleDayNightToggle = (state) => {
    this.setState({ isDayMode: state 
    });
    // console.log('STATE', this.state.isDayMode)
    
  };

  getWeather = async (suggestionOrValue, isSuggestion) => {
    if(isSuggestion) { 
      const city = suggestionOrValue.name;
      const country = suggestionOrValue.country;

      try {
        // 1. weatherbit current data
        const api_call4 = await fetch(`https://api.weatherbit.io/v2.0/current?` + 
        `city=${city}&country=${country}&key=${WEATHER_API}`)
        const data4 = await api_call4.json();
  
        // 2. weatherbit forecast data
        const api_call3 = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily` + 
        `?city=${city}&country=${country}&days=6&key=${WEATHER_API}`)
        const data3 = await api_call3.json();

        // 3. weatherbit hourly data
        const api_call2 = await fetch(`https://api.weatherbit.io/v2.0/forecast/hourly` + 
        `?city=${city}&country=${country}&hours=10&key=${WEATHER_API}`)
        const data2 = await api_call2.json();
  
        // 4. iplocation -> sunrise,sunset,moonrise and moonset
        const api_call = await fetch(`${IP_LOCATION}&lat=${data4.data[0].lat}&long=${data4.data[0].lon}`)
        const data = await api_call.json();
        
        if(city) {
        this.setState({
          cel: Math.round(data4.data[0].temp),
          fahr: Math.round(data4.data[0].temp * 1.8) +32,
          city: data4.data[0].city_name,
          country: data4.data[0].country_code,
          humidity: Math.round(data4.data[0].rh),
          wind: data4.data[0].wind_spd,
          description: data4.data[0].weather.description,
          pressure: data4.data[0].pres,
          error: "",
          precip: Math.round(data3.data[0].precip),
          dailyforecast: data3.data,
          hourlyforecast: data2.data,
          today: data4.data[0].ts,
          timezone: data4.data[0].timezone,        
          maxTempCel: Math.round(data3.data[0].max_temp),
          maxTempFahr: Math.round(data3.data[0].max_temp * 1.8) +32,
          minTempCel: Math.round(data3.data[0].min_temp),
          minTempFahr: Math.round(data3.data[0].min_temp * 1.8) +32,
          sunrise: data.sunrise,
          sunset: data.sunset,
          moonrise: data.moonrise,
          moonset: data.moonset,
          isLoading: false
        }, () => {
          localStorage.setItem('weather2', JSON.stringify(this.state))
        })
      } else if(city === '') {
        this.setState({
          cel: this.state.cel,
          fahr: this.state.fahr,
          city: this.state.city,
          country: this.state.country,
          humidity: this.state.humidity,
          wind: this.state.wind,
          description: this.state.description,
          pressure: this.state.pressure,
          dailyforecast: this.state.dailyforecast,
          hourlyforecast: this.state.hourlyforecast,
          today: this.state.today,
          timezone: this.state.timezone,
          precip: this.state.precip,
          maxTempCel: this.state.maxTempCel,
          maxTempFahr: this.state.maxTempFahr,
          minTempCel: this.state.minTempCel,
          minTempFahr: this.state.minTempFahr,
          sunrise: this.state.sunrise,
          sunset: this.state.sunset,
          moonrise: this.state.moonrise,
          moonset: this.state.moonset,
          error: toast.error("City cannot be empty",{
            autoClose: 3000
          })
        })
        
      } 
      }
      
      catch {
        toast.error('No Data Received', {
          autoClose: 3000
        })
      }
  
      localStorage.getItem('weather2')
    } 
    else {
      const city = suggestionOrValue;
      
      try {
        // 1. weatherbit current data
        const api_call4 = await fetch(`https://api.weatherbit.io/v2.0/current?` + 
        `city=${city}&key=${WEATHER_API}`)
        const data4 = await api_call4.json();
  
        // 2. weatherbit forecast data
        const api_call3 = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily` + 
        `?city=${city}&days=6&key=${WEATHER_API}`)
        const data3 = await api_call3.json();
  
        // 3. weatherbit hourly data
        const api_call2 = await fetch(`https://api.weatherbit.io/v2.0/forecast/hourly` + 
        `?city=${city}&hours=10&key=${WEATHER_API}`)
        const data2 = await api_call2.json();
  
        // 4. iplocation -> sunrise,sunset,moonrise and moonset
        const api_call = await fetch(`${IP_LOCATION}&lat=${data4.data[0].lat}&long=${data4.data[0].lon}`)
        const data = await api_call.json();
        
        if(city) {
        this.setState({
          cel: Math.round(data4.data[0].temp),
          fahr: Math.round(data4.data[0].temp * 1.8) +32,
          city: data4.data[0].city_name,
          country: data4.data[0].country_code,
          humidity: Math.round(data4.data[0].rh),
          wind: data4.data[0].wind_spd,
          description: data4.data[0].weather.description,
          pressure: data4.data[0].pres,
          error: "",
          precip: Math.round(data3.data[0].precip),
          dailyforecast: data3.data,
          hourlyforecast: data2.data,
          today: data4.data[0].ts,
          timezone: data4.data[0].timezone,        
          maxTempCel: Math.round(data3.data[0].max_temp),
          maxTempFahr: Math.round(data3.data[0].max_temp * 1.8) +32,
          minTempCel: Math.round(data3.data[0].min_temp),
          minTempFahr: Math.round(data3.data[0].min_temp * 1.8) +32,
          sunrise: data.sunrise,
          sunset: data.sunset,
          moonrise: data.moonrise,
          moonset: data.moonset,
          isLoading: false
        }, () => {
          localStorage.setItem('weather2', JSON.stringify(this.state))
        })
      } else if(city === '') {
        this.setState({
          cel: this.state.cel,
          fahr: this.state.fahr,
          city: this.state.city,
          country: this.state.country,
          humidity: this.state.humidity,
          wind: this.state.wind,
          description: this.state.description,
          pressure: this.state.pressure,
          dailyforecast: this.state.dailyforecast,
          hourlyforecast: this.state.hourlyforecast,
          today: this.state.today,
          timezone: this.state.timezone,
          precip: this.state.precip,
          maxTempCel: this.state.maxTempCel,
          maxTempFahr: this.state.maxTempFahr,
          minTempCel: this.state.minTempCel,
          minTempFahr: this.state.minTempFahr,
          sunrise: this.state.sunrise,
          sunset: this.state.sunset,
          moonrise: this.state.moonrise,
          moonset: this.state.moonset,
          error: toast.error("City cannot be empty",{
            autoClose: 3000
          })
        })
        
      } 
      }
      
      catch {
        toast.error('No Data Received', {
          autoClose: 3000
        })
      }
      localStorage.getItem('weather2')
    }    
  }

  fetchWeather = async () => {
  const {lat, lon} = this.state

  // Current Weather
  fetch(`${CURRENT_API}lat=${lat}&lon=${lon}&key=${WEATHER_API}`)
  .then(res => res.json()).then(responseJson => {
    try {
    this.setState({
    city: responseJson.data[0].city_name,
    country: responseJson.data[0].country_code,
    cel: Math.round(responseJson.data[0].temp),
    fahr: Math.round(responseJson.data[0].temp * 1.8 + 32),
    wind: responseJson.data[0].wind_spd, 
    humidity: Math.round(responseJson.data[0].rh),
    pressure: responseJson.data[0].pres,
    description: responseJson.data[0].weather.description,
    today: responseJson.data[0].ts,
    timezone: responseJson.data[0].timezone,
    isLoading: false, 
    }, () => {
      localStorage.setItem('weather', JSON.stringify(this.state))
    })
    } catch {
      toast.error('Error Code 429')
    }
    
  });

  // Sunrise, Sunset, Moonrise and Moonset
  fetch(`${IP_LOCATION}&lat=${lat}&long=${lon}`)
  .then(res => res.json()).then(responseJson => {
    try {
      this.setState({
        sunrise: responseJson.sunrise,
        sunset: responseJson.sunset,
        moonrise: responseJson.moonrise,
        moonset: responseJson.moonset,
      })
    
    } catch {
      toast.error('No Data Received')
    }
    
  }); 

  // Forecast Weather - Daily
  fetch(`${FORECAST_API}lat=${lat}&lon=${lon}&days=6&key=${WEATHER_API}`)
  .then(res => res.json()).then(responseJson => {
    try {
      this.setState({
      dailyforecast: responseJson.data,
      precip: Math.round(responseJson.data[0].precip),
      maxTempCel: Math.round(responseJson.data[0].max_temp),
      maxTempFahr: Math.round(responseJson.data[0].max_temp * 1.8) + 32,
      minTempCel: Math.round(responseJson.data[0].min_temp),
      minTempFahr: Math.round(responseJson.data[0].min_temp * 1.8) + 32,
      isLoading: false 
      } , () => {
        localStorage.setItem('weather', JSON.stringify(this.state))
      })
    } catch {
      toast.error('Too many requests')
    }
    
  });

  // Forecast Weather - Hourly
  fetch(`${HOURLY_API}lat=${lat}&lon=${lon}&hours=10&key=${WEATHER_API}`)
  .then(res => res.json()).then(responseJson => {
    try {
      this.setState({
        hourlyforecast: responseJson.data,
        isLoading: false
      }, () => {
        localStorage.setItem('weather', JSON.stringify(this.state))
      })
      
    } catch {
      toast.error('Not done yet... Stay Tuned')
    }
               
  }); 
  }

  // News API
  fetchNews = async () => {
    toast.error('Not done yet... Stay Tuned', {
      autoClose: 3000
    })
    //console.log('COUNTRY', this.state.country)
    // fetch(`http://newsapi.org/v2/top-headlines?country=IN&apiKey=${NEWS_API}`)
    // .then(res => res.json()).then(responseJson => {
    //     console.log('NEWS', responseJson)
    // })
  }

  getNews = async (suggestionOrValue, isSuggestion) => {
    if(isSuggestion) { 
      const city = suggestionOrValue.name;
      const country = suggestionOrValue.country;

      try {      
        if(city) {
          toast.error('Not done yet... Stay tuned', {
            autoClose: 3000
          })
      } else if(city === '') {
        toast.error('Not done yet... Stay tuned', {
          autoClose: 3000
        })
      } 
      }
      
      catch {
        toast.error('Not done yet... Stay tuned', {
          autoClose: 3000
        })
      }
    } 
    else {
      const city = suggestionOrValue;
      
      try {     
        if(city) {
          toast.error('Not done yet... Stay tuned', {
            autoClose: 3000
          })
      } else if(city === '') {
        toast.error('Not done yet... Stay tuned', {
          autoClose: 3000
        })
      } 
      }
      
      catch {
        toast.error('Not done yet... Stay tuned', {
          autoClose: 3000
        })
      }
    }
  }

  render() {
    const {sunrise, sunset, moonrise, moonset, country, cel, fahr, city, humidity, description, unit,
      pressure, wind, maxTempCel, minTempCel, minTempFahr, maxTempFahr, today, timezone, dailyforecast, 
      hourlyforecast, precip, isLoading} = this.state
        const sunriseTime = this.state.sunrise.slice(0,5)
        const sunsetTime = this.state.sunset.slice(0,5)
        const time  = moment.tz(this.state.timezone).format('HH:mm')

    return (
      
      <React.Fragment>
      <div className={
            this.state.isDayMode ? "main-container" : "main-container-night"
          }>
            <div className="form-container">
              <Form 
              getWeather={this.getWeather}
              fetchWeather={this.fetchWeather}
              newWeatherOrNewsValue={this.state.newWeatherOrNewsValue}
              handleDayNightToggle={this.handleDayNightToggle}
              isDayMode={this.state.isDayMode}
              getNews={this.getNews}
              fetchNews={this.fetchNews}
              />
              <ToastContainer transition={Bounce} 
              className = 'toast-background'/>    
            </div>
            {isLoading ? <Spinner/>: 
            <div className="body-container">
              <WeatherAndNews sunriseTime={sunriseTime} sunsetTime={sunsetTime} sunrise={sunrise}
              moonrise={moonrise} moonset={moonset} sunset={sunset} time={time}
              country={country} cel={cel} fahr={fahr} precip={precip}
              maxTempCel={maxTempCel} maxTempFahr={maxTempFahr}
              changeUnit={this.onUnitChange} unit={unit}
              minTempCel={minTempCel} minTempFahr={minTempFahr} 
              city={city} humidity={humidity} description={description} 
              pressure={pressure} wind={wind} today={today} 
              dailyforecast={dailyforecast} hourlyforecast={hourlyforecast} timezone={timezone}
              onWeatherOrNewsValue={this.weatherOnNewsValue} isDayMode={this.state.isDayMode}
              />  
            </div>
            }
            <div className="footer-container">
                  <MadeWithLove isDayMode={this.state.isDayMode} />
            </div>
      </div>
      
      </React.Fragment>
    );
  }
}


export default App

{/*  */}

      {/*  */}
