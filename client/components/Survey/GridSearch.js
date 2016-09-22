import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DropdownMenu from './DropdownMenu'
import submitButton from './submitButton'



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
    img:"http://toeuropeandbeyond.com/wp-content/uploads/2012/10/things-to-do-in-the-west-village.jpg",
    title: 'Location',
    status: "Let's take a look at where you want to live ?" ,
  },
  {
    img: "http://cdn.makeuseof.com/wp-content/uploads/2013/03/icon3.png?820756",
    title: 'Commute',
    status: "Time is of the essence. how long of a commute are you looking at? ",
  },
  {
    img: "http://www.multyshades.com/wp-content/uploads/2010/09/471.jpg",
    title: 'The basics',
    status: "How many bedrooms?",
  },
  {
    img: "https://d13yacurqjgara.cloudfront.net/users/52920/screenshots/1855173/amenities_icons.jpg",
    title: 'Extra Amenities',
    status: "There are a few other things...let's make it simple for you",
  },
  {
    img:"http://www.cvranker.com/img/workwithus/petfriendly.png",
    title: 'Pets',
    status: " Pets are our best friends. Let us get to know if you have any little furry friends",
  },
 ];


  class GridSearch extends React.Component {
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
    <submitButton{...this.props}/>

  </div>
      );
    }
  }
  GridSearch.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  };


export default GridSearch;
