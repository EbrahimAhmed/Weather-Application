import React, { Component } from 'react'
import Form from './Components/Form'
import Weather from './Components/Weather'

const API_KEY = "f652b8702007f522d411b4856c3edd89";

export default class App extends Component {

  state = {
    tempreature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }


  getWeather = async (e) =>
  {
    e.preventDefault();

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`);
    const data = await api.json();

    if( city && country)
    {
      this.setState({
        tempreature : Math.trunc(data.main.temp - 273.15),
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description,
        error : ''
        })
    }else {
      this.setState({
        tempreature:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:'Please Enter The Country and City'
      })
    }
  }


  render() {
    return (
      <div className='wrapper'>
          <div className='form-container'>
            <Form getWeather={this.getWeather}/>
            <Weather
                tempreature = {this.state.tempreature}
                city = {this.state.city}
                country = {this.state.country}
                humidity = {this.state.humidity}
                description = {this.state.description}
                error = {this.state.error}
            />
            </div>
        </div>
    )
  }
}



// Math.trunc    -273.15