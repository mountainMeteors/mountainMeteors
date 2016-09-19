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
    width: 800,
    height: 800,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesData = [
  {
    img: "client/assets/Piggy-bank-icon.png",
    title: 'Budget',
    question: "What is your price range ? ",
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Location',
    question: "Let's take a look at where you want to live ?" ,
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Commute',
    question: "Time is of the essence. how long of a commute are you looking at? ",
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'The basics',
    question: "How many bedrooms?",
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Extra Amenities',
    question: "There are a few other things...let's make it simple for you",
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Pets',
    question: " Pets are our best friends. Let us get to know if you have any little furry friends",
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
      <Subheader>"  Let's get to know a little bit about you"</Subheader>
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
