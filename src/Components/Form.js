import React from 'react'

export default function Form(props) {
  return (
    <form onSubmit={props.getWeather}>
          <input type="text" name="country" placeholder='Country....'/>
          <input type="text" name="city" placeholder='City....'/>
          <button> Get Weather </button>

      </form>
  )
}
