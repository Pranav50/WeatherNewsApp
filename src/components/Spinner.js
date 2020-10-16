import React from 'react'
import spinner from '../images/weather2.gif'

const Spinner = () => {
    return (
        <div>
            <img 
                src={spinner}
                alt="Loading..."
                style={{ width: '50px', margin: '240px 260px', display:'block'}}
            />
        </div>
    )
}

export default Spinner
