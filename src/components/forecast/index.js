import React, { Component } from 'react'
import DailyForecast from './DailyForecast';
import HourlyForecast from './HourlyForecast';

export class ForecastDays extends Component {
    constructor(props) {
        super(props);
        this.state = {} 
    }
    render() {
        const { dailyforecast, hourlyforecast, time, unit} = this.props;
        
        return (
            <div>
            {
                dailyforecast && dailyforecast.slice(1).map((data, idx) => {
                    return <DailyForecast data={data} time={time} unit={unit} key={idx} />
                })
            }
            {
                 hourlyforecast && hourlyforecast.slice(5).map((data, idx) => {
                    return <HourlyForecast data={data} time={time} unit={unit} key={idx} />
                }) 
            }
            
            

            </div>
        )
    }
}

export default ForecastDays
