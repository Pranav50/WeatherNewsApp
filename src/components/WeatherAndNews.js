import React, {createContext} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import WeatherData from './WeatherNews/WeatherData';
import Form from './Form'
import NewsData from './WeatherNews/NewsData';
import Github from './Github';

const ContextData = createContext()

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'none',
    /*
    width: 300,
    marginLeft:60,
    marginTop:2 
    */
  },
  active: {
    background: 'rgba(117, 245, 239, 0.54)',
    opacity: 0.7,
    color: '#535c68',
    outline: 'none',
    "&:focus": {
      outline: 'none'
    }
  } 

}));

const WeatherAndNews = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleWeatherOrNews = (e) => {
    const weatherOrNewsValue = e.target.textContent;
    // console.log("Value", weatherOrNewsValue);
    props.onWeatherOrNewsValue(weatherOrNewsValue);
  };

  const handleChangeIndex = index => { 
    setValue(index);
  };

  const {country, cel, fahr, city, humidity, description, pressure, wind, maxTempCel, minTempCel, 
    maxTempFahr, minTempFahr, today, timezone, moonrise, moonset, sunrise, sunset, time, sunriseTime, 
    sunsetTime, dailyforecast, precip, hourlyforecast, unit, changeUnit, isDayMode} = props 

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{background: 'transparent'}}>
        <Tabs
          value={value} 
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className={value === 0 ? classes.active : ""} 
          label="Weather"  style={{
            ...(props.isDayMode
            ? { color: "#535c68", transition: "0.6s ease-in-out" }
            : { color: "white", transition: "0.6s ease-in-out" }),
            fontFamily: 'Oxygen'}} {...a11yProps(0)}
          onClick={handleWeatherOrNews}
          />
          <Tab className={value === 1 ? classes.active : ""}
           label="News"  style={{
            ...(props.isDayMode
              ? { color: "#535c68", transition: "0.6s ease-in-out" }
              : { color: "white", transition: "0.6s ease-in-out" }), 
            fontFamily: 'Oxygen'}} {...a11yProps(1)}
           onClick={handleWeatherOrNews}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
            <WeatherData sunriseTime={sunriseTime} sunsetTime={sunsetTime} sunrise={sunrise}
               moonrise={moonrise} moonset={moonset} sunset={sunset} time={time} precip={precip}
               country={country} cel={cel} fahr={fahr} city={city} humidity={humidity} description={description} 
               pressure={pressure} wind={wind} maxTempCel={maxTempCel} minTempCel={minTempCel} 
               maxTempFahr={maxTempFahr} minTempFahr={minTempFahr} today={today} unit={unit} changeUnit={changeUnit}
               timezone={timezone} dailyforecast={dailyforecast} hourlyforecast={hourlyforecast} isDayMode={isDayMode} />
            
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <NewsData isDayMode={isDayMode} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default WeatherAndNews