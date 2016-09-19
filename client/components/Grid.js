import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';




const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesData = [
  {
    img: <img src="../assets/Piggy-bank-icon.png"/>,
    title: 'Budget',
    Status: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Location',
    Status: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Commute',
    Status: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'The basics',
    Status: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Extra Amenities',
    Status: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Pets',
    Status: 'fancycravel',
  },
 ];


  export class Grid extends React.Component {
    getChildContext() {
      return { muiTheme: getMuiTheme(baseTheme) };
    }
    render() {
      return (


  <div style={styles.root}>
    <GridList
      cellHeight={200}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span> View <b>{tile.status}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
      );
    }        
  }
  Grid.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  };

export default Grid