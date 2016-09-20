import React from 'react';
// import ListingEntry from './ListingEntry';
import { SplitButton, MenuItem } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import styles from '../../styles/react-bootstrap-table.min.css';
// import {Table, Thead, Th, Tr} from 'reactable';

const Welcome = React.createClass({
  render() {
    return (
      <div>
        <p>Welcome to seekPad!</p>
        <p>The days of a stressful apartment search are over. There are so many
        things to consider in finding the right home for you, and we'll help you
        cover all the bases.</p>
        <p>Come log in, and we'll get you started!</p>
        <img src="https://media2.popsugar-assets.com/files/2011/07/29/1/192/1922441/26997b08161a923a_ApartmentMoving32.jpg"/>
      </div>
    )
  }
});

export default Welcome;
