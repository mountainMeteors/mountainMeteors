import React from 'react';
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

//Formatting
const rentDisplay = cell => '$' + cell;
const intToBool = cell  => cell === 0 ? 'yes' : 'no';



class Listing extends React.Component{
  constructor(props){
    // console.log('constructor props', props);
    super(props);

    // this.state = {
    //   showArchived: false, //Remember this might need to be 0/1
      // listingsFiltered: this.props.listings
    // }

    // this.toggleArchive = this.toggleArchive.bind(this)
    // this.props.listingsFiltered = this.props.listings;
  }

  // componentWillMount() {
  //   console.log('this.props.listings', this.props.listings);
  //   this.setState({listingsFiltered: this.props.listings})
  // }

  componentDidMount() {
    console.log('Listing props', this.props);

  }

  componentDidUpdate() {
    console.log('Listing changed', this.props);
    // this.props.listingsFiltered = this.props.listings;
  }

  // toggleArchive() {
  //   this.setState({showArchived: !this.state.showArchived});
  // }

  render() {
    return (
      <div>
        <Button bsStyle="info" bsSize="small" onClick={this.toggleArchive}>Archived</Button>
        <BootstrapTable data={this.props.listings} hover={true} pagination={true}>
          <TableHeaderColumn dataField="location" isKey={true} dataSort={true}>
            Address
          </TableHeaderColumn>
          <TableHeaderColumn dataField="rent" dataSort={true} dataFormat={rentDisplay}>
            Rent
          </TableHeaderColumn>
          <TableHeaderColumn dataField="pets" dataSort={true}>
            Pets
          </TableHeaderColumn>
          <TableHeaderColumn dataField="gym" dataSort={true} dataFormat={intToBool}>
            Gym
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
};

export default Listing;
