import React from "react";
import es6BindAll from "es6bindall";
import ReactBootstrapSlider from "react-bootstrap-slider";
// import { isPropNumberOrArray } from "./customproptypes.js";

function isPropNumberOrArray(props, propName, componentName) {
  // console.log("props[" + propName + "]=" + props[propName]);
  if (!((typeof props[propName] === "number") || (typeof props[propName] === "undefined") || Array.isArray(props[propName]))) {
    return new Error(
      [
        componentName,
        "requires that",
        propName,
        "be a number or an array."
      ].join(" ")
    );
  }
}

const wrapperDivStyles = {
  "backgroundColor": "#E0E0E0",
  "padding": "20px",
  "width": "300px"
};


const DemoSingleValueSpan = ({ id, value }) => (
  <span>
        Value: <span id={"valueSpan" + id}>{ value }</span>
    </span>
);



export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      currentValue: props.startValue
    };
    delete this.state.startValue;
    es6BindAll(this, ["changeValue", "changeAxes"]);
  }
  changeValue(e) {
    console.log("changeValue triggered");
    this.setState({ currentValue: e.target.value });
  }
  changeAxes() {
    this.setState({
      currentValue: 500,
      min: 0,
      max: 2000,
      step: 100
    });
  }


  render() {
    return (
      <ReactBootstrapSlider id = "ticksSlider"
        value={this.state.currentValue}
        change={this.changeValue}
        slideStop={this.changeValue}
        step={this.state.step}
        max={this.state.max}
        min={this.state.min}
        ticks = {[0, 100, 200, 300, 400]}
        ticks_labels = {["$0", "$100", "$200", "$300", "$400"]}
        orientation="horizontal"
        reverse={true}
        disabled="disabled" />

    )
        }
  }




// Demo.propTypes = {
//   id: React.PropTypes.string,
//   value: isPropNumberOrArray,
//   startValue: isPropNumberOrArray
// };

// function isPropMoment(props, propName, componentName) {
//     if (!moment.isMoment(props[propName])) {
//         return new Error(
//             [
//                 componentName,
//                 'requires that',
//                 propName,
//                 'be a Moment object.'
//             ].join(' ')
//         );
//       }
//     }
