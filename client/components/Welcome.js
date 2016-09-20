import React from 'react';
// import ListingEntry from './ListingEntry';
import { SplitButton, MenuItem } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import styles from '../styles/react-bootstrap-table.min.css';
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
        <img src="https://puu.sh/rhPY9/3aa27c1f23.jpg"/>
      </div>
    )
  }
});

export default Welcome;
