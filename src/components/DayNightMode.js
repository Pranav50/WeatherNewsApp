import React from 'react';
import './DayNightMode.css'
import '../App.css'

const DayNightMode = (props) => {
    const onClick=(event)=>{
        props.handleDayNightToggle(event.target.checked)
    }

    return (
            <div className="switch" style={{position:'relative', width:'8.6rem'}}> 
                <label htmlFor="toggle">
                <input id="toggle" className="toggle-switch" type="checkbox" onClick={onClick} />
                    <div className="sun-moon">
                        <div className="dots">
                        </div>
                    </div>
                    <div className="background">
                            <div className="stars1"></div>
                            <div className="stars2"></div>
                    </div>
                </label>
            </div>
    );
};

export default DayNightMode;