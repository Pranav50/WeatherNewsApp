import React from 'react'
import { ArrowTooltip } from './ArrowTooltip'
import gps from '../images/gps.png'
import 'react-toastify/dist/ReactToastify.css';
import Autosuggest from 'react-autosuggest';
import { highlight } from './Helper'
import cities from 'cities.json';
import Button from 'react-bootstrap/Button'
import './Form.css';
import '../App.css'
import Github from './Github'

import { MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn} from 'mdbreact'

import countries from 'i18n-iso-countries'
import DayNightMode from './DayNightMode';
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const sectionStyle = {
    background: '#747d8c',
    opacity: '0.48',
    width: '90%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height:'99%',
    position:'absolute',
    }; 

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase(); 
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : cities.filter(data =>
    data.name.toLowerCase().slice(0, inputLength) === inputValue
  ).slice(0,4);
};
 
// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion.
const getSuggestionValue = suggestion => suggestion.name
 
const renderSuggestion = suggestion => 
(
  
  <table>
        <tbody >
          <ArrowTooltip title={suggestion.name + ', ' + countries.getName(suggestion.country,"en")} placement="top">
          <tr className="table-row">
          <td style={{ width: '88%' }} dangerouslySetInnerHTML=
          {highlight(suggestion.name, suggestion.value)}></td>
          <td style={{ width: '12%' }}>{suggestion.country}</td>
        </tr>
          </ArrowTooltip>
        </tbody>
      </table>
);

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleClearClick = this.handleClearClick.bind(this);

    this.state = {
      value: '',
      suggestions: [],
    };
  }
 
  onChange = (event, { newValue}) => {
    this.setState({
      value: newValue,
    });
  };
 
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };
 
  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, {suggestion}) => {
    this.setState({
      value: ''
    });
    const isSuggestion = true;
    if (this.props.newWeatherOrNewsValue === "Weather") {
      this.props.getWeather(suggestion, isSuggestion);
    } else {
      this.props.getNews(suggestion, isSuggestion);
    }
  }

  onClick = (e) => {
    e.preventDefault()
    const value = e.target.value
    const isSuggestion = false;
    if (this.props.newWeatherOrNewsValue === "Weather") {
      this.props.getWeather(value, isSuggestion);
    } else {
      this.props.getNews(value, isSuggestion);
    }
  }

  handleClearClick() {
    this.setState({
      value: '',
    });
  }

  render(){
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search City...',
      value,
      onChange: this.onChange
    };

    let clearButton;
    if(value.length >= 1) {
      clearButton = (
        <button
          className="close hairline"
          onClick={this.handleClearClick}
        />
      );
    }

    return (

      <div>  
 <MDBContainer style={{height: '533px', marginTop: '25px', width: "320px"}}>
 <MDBRow>
 <MDBCol>
 <MDBCard  style={sectionStyle}></MDBCard>
 <MDBCard style={{zIndex:'1', background: 'none'}}>
 <div className="github-box stack-top">
            <Github/>
  </div>
 <MDBCardBody>

   {/* Day Night Toggle */}
   <div className="day-night-toggle">
    <DayNightMode handleDayNightToggle={this.props.handleDayNightToggle} />
   </div>
   {/*  */} 

 <MDBCardHeader style={{
                      ...(this.props.isDayMode
                        ? {
                            background: "#e0f7fa",
                            transition: "0.6s ease-in-out"
                          }
                        : {
                            background: " #353b48",
                            transition: "0.6s ease-in-out"
                          }),
                      opacity: "0.7",
                      borderRadius: "10px",
                      fontFamily: "Josefin Sans"
                    }}>
      <h3 className="my-3 text-center" style={{
                        ...(this.props.isDayMode
                          ? { color: "#535c68", transition: "0.6s ease-in-out" }
                          : { color: "white", transition: "0.6s ease-in-out" })
                      }}>
      Find
                      {this.props.newWeatherOrNewsValue === "Weather"
                        ? " Weather"
                        : " News"}
      </h3>
 </MDBCardHeader>
    <br/>    
 <form>
      <div width="100%">
        <div style={{width:'90%', display:'inline-block'}}>
        {this.props.newWeatherOrNewsValue === "Weather" ? (
                          <>
                          <Autosuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={
                              this.onSuggestionsFetchRequested
                            }
                            onSuggestionsClearRequested={
                              this.onSuggestionsClearRequested
                            }
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputProps}
                            onSuggestionSelected={this.onSuggestionSelected}
                          />
                          <div className="close-icon-container">
                            {clearButton}
                          </div>
                          </>
                        ) : (
                          <>
                          <Autosuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={
                              this.onSuggestionsFetchRequested
                            }
                            onSuggestionsClearRequested={
                              this.onSuggestionsClearRequested
                            }
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputProps}
                            onSuggestionSelected={this.onSuggestionSelected}
                          />
                          <div className="close-icon-container">
                            {clearButton}
                          </div>
                          </>
                        )}
        </div>
        <ArrowTooltip title="Track Location" placement="top">
          <span style={{width:'10%', display:'inline-block', cursor:'pointer'}} 
            onClick={this.props.newWeatherOrNewsValue === "Weather" ? this.props.fetchWeather : this.props.fetchNews}>
            <img src={gps} width="25px" height="25px" />
          </span>
        </ArrowTooltip>  
      </div>
      <br/>
  
      <div className="text-center mt-4">
      <Button variant={this.props.isDayMode ? "light" : "info"} 
      className="mb-3 btn-block"
      type="submit"
      value={inputProps.value} 
      onClick={e => this.onClick(e)}
      style={{background: '#e0f7fa', opacity:'0.6', 
              borderRadius: '10px',fontFamily: 'Josefin Sans',
             boxShadow: '0 8px 6px -6px black'}}
      >Search 
      {this.props.newWeatherOrNewsValue === "Weather"
                          ? " Weather"
                          : " News"}
      </Button>
        </div>
      </form>
      </MDBCardBody>
  </MDBCard>
  </MDBCol>
  </MDBRow>
  </MDBContainer>
  </div>
    )
  }
}

export default Form;
