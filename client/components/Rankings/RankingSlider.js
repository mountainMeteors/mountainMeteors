import React from 'react';
import { Component } from 'react';
const ReactDOM = require('react-dom');
import Slider from 'react-rangeslider'


class RankingSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      neighborhood: 5,
      rent: 5,
      pets: 5,
      amenities: 5,
      commute: 5,
      extras: 5
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);


  }
// state[criteria] = value
  handleChange = (criteria,value) => {
    console.log('======',criteria, value)
    this.setState({
      [criteria]: value
    })
  }

  onFormSubmit (event) {              //onSubmit fn
    event.preventDefault();           //Stops refresh
    var rankings = {            //Obj holding user details
      neighborhood: this.state.neighborhood,
      rent: this.state.rent,
      pets: this.state.pets,
      amenities: this.state.amenities,
      commute: this.state.commute,
      extras: this.state.extras
    }
    console.log("this+++++",this)
    console.log(rankings)
    // this.props.postSurveyAnswers(rankings);
  }

  render () {
    const { value } = this.state
    return (
      <div>
      <form onSubmit={this.onFormSubmit}>
      /*neighborhood*/
      <div className='horizontal-slider'>
      <h4>How important is neighborhood ?</h4>
      <Slider
      min={0}
      max={5}
      value={this.state.neighborhood}
      onChange={(value) => this.handleChange("neighborhood",value)}
      />
      <div className='value'>
      Ranking: {this.state.neighborhood}
      </div>
      <hr />
      </div>


      /*Rent */
      <div className='horizontal-slider'>
      <h4>How important is rent budget from 1 to 5?</h4>
      <Slider
      min={0}
      max={5}
      value={this.state.rent}
      onChange={(value) => this.handleChange("rent", value)}
      />
      <div className='value'>Ranking:{this.state.rent}</div>
      <hr />
      </div>


      /*Pets*/
      <div className='horizontal-slider'>
      <h4>How important is having pet accommodation ?</h4>
      <Slider
      min={0}
      max={5}
      value={this.state.pets}
      onChange={(value) => this.handleChange("pets", value)}
      />
      <div className='value'>Ranking:{this.state.pets}</div>
      <hr />
      </div>

      /*amenities*/
      <div className='horizontal-slider'>
      <h4>How important are amenities ?</h4>
      <Slider
      min={0}
      max={5}
      value={this.state.amenities}
    onChange={(value) => this.handleChange("amenities", value)}
      />
      <div className='value'>Ranking: {this.state.amenities}</div>
      <hr />
      </div>


      /*amenities*/
      <div className='horizontal-slider'>
      <h4>How important is commute time? </h4>
      <Slider
      min={0}
      max={5}
      value={this.state.commute}
    onChange={(value) => this.handleChange("commute", value)}
      />
      <div className='value'>
      Ranking:{this.state.commute}</div>
      <hr />
      </div>


      /*extras*/
      <div className='horizontal-slider'>
      <h4>How important is having extras ?</h4>
      <Slider
      min={0}
      max={5}
      value={this.state.extras}
          onChange={(value) => this.handleChange("extras", value)}
      />
      <div className='value'>Ranking: {this.state.extras}</div>
      <hr />
        </div>

        <button type="submit" className="btn btn-block btn-primary">Submit</button>

        </form>
          </div>


    )
  }
}


export default RankingSlider;
