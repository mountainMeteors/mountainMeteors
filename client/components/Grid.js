import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DropdownMenu from './DropdownMenu'




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
    img: "http://img.freepik.com/free-photo/piggybank-with-blue-sunglasses_1101-103.jpg?size=338&ext=jpg",
    title: 'Budget',
    status: "What is your price range ? ",
  },
  {
    img:"https://thumb9.shutterstock.com/display_pic_with_logo/98341/219101932/stock-vector-seamless-new-york-city-travel-icon-souvenir-illustration-usa-background-pattern-in-vector-219101932.jpg",
    title: 'Location',
    status: "Let's take a look at where you want to live ?" ,
  },
  {
    img: "http://smartcommute.ca/wp-content/uploads/2015/06/Re-modeIcon_EN-01.jpg",
    title: 'Commute',
    status: "Time is of the essence. how long of a commute are you looking at? ",
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'The basics',
    status: "How many bedrooms?",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPj_EOfkdGxrg5OMtxrb1bwAlWUUpfWO1aVbNdvNQP9eLdcgL_Dw",
    title: 'Extra Amenities',
    status: "There are a few other things...let's make it simple for you",
  },
  {
    img:"http://www.apk20.com/image/icon-327288",
    title: 'Pets',
    status: " Pets are our best friends. Let us get to know if you have any little furry friends",
  },
 ];


 export class Grid extends React.Component {
   getChildContext() {
     return { muiTheme: getMuiTheme(baseTheme) };
   };


   render() {
     return (
  <div style={styles.root}>
    <GridList
      cellHeight={300}
      style={styles.gridList}
    >
      <Subheader>" Let's get to know a little bit about you"</Subheader>
    <DropdownMenu{...this.props}/>

      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span><b>{tile.status}</b></span>}
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
