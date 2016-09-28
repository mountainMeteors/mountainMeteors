import Demo from './SliderCompo'
import React, { Component } from 'react';



export default class Display extends React.Component {

render() {
  return (

    <div className = "demoWrapper">
    <h3>Ticks Demo</h3>
    <Demo id = "ticksSlider"
    startValue= { 200 }
    ticks = {[0, 100, 200, 300, 400]}
    ticks_labels = {["$0", "$100", "$200", "$300", "$400"]}
    ticks_snap_bounds = { 30 }
    />
    </div>

  )
}

}
