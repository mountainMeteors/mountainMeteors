const questions = [
 {"intro": "Let's get to know a little bit about you"}, 
  
//**Rent: let's get straight to the point
{"price": "What is your price range ?"},  
    // price range selection pop-up

// **location /neighborhood
{"location": "Let's take a look at where you want to live"},
    // list of neighorhood pop-up /drop down for users to select


 {"roomNumber": "How many bedrooms?"},
    // list of room types: studio,one-bedroom, 2-bedroom, etc..
      
   //Time is of the essence. how long of a commute are you looking at?
  {"commute": "range of commute time"}

    //Building Amenities:
      // There are a few other things...let's make it simple for you. 
      // Select the amenity that you want to have ?
  {"Amenities": "modal of Amenities for users to selec"},

    //Pets are our best friends. Let us get to know if you have any
  {"pets": "list of pets"}
      // 
]

export default questions;
