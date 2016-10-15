import axios from 'axios';
import store from '../store/store';

exports.scrapeListing = function(url){
  console.log("URL", url)
  axios.post('/api/scrape', {
    url: url
  })
    .then(function(description){
      console.log("RESP*******", description)

      //TODO catch single dwelling edge case,
      //TODO catch undefined edge case (i.e. body)
      if (description.data.amenities.length === 'undefined' || description.data.amenities.length > 0) {
        // description.data.amenities.dishwasher = description.data.amenities[0].body.includes('dishwasher');
        // description.data.amenities.laundry = description.data.amenities[0].body.includes('laundry');
        description.data.amenities.nofee = description.data.amenities[0].body.toLowerCase().includes('no fee') || description.data.amenities[0].body.toLowerCase().includes('no-fee');
        // description.data.amenities.gym = description.data.amenities[0].body.toLowerCase().includes('gym') || description.data.amenities[0].body.toLowerCase().includes('fitness');
      }

      // console.log('description.data.petsAllowed.length', description.data.petsAllowed.length);
      // if (description.data.petsAllowed.length === 1 && description.data.petsAllowed.length > 1) {
      //   description.data.dogsAllowed = description.data.petsAllowed[0].petPolicyDetails[0].toLowerCase().includes('dogs allowed');
      //   description.data.catsAllowed = description.data.petsAllowed[0].petPolicyDetails[1].toLowerCase().includes('cats allowed');
      // }
      // else if (description.data.petsAllowed[0] !== 'undefined' && description.data.petsAllowed.length > 0) {
      //   //console.log('description.data.petsAllowed', description.data.petsAllowed);
      //   if (description.data.petsAllowed[0].petPolicyDetails[0].toLowerCase().includes('allowed')) {
      //     description.data.dogsAllowed = description.data.petsAllowed[0].petPolicyDetails[0].toLowerCase().includes('dogs');
      //     description.data.catsAllowed = description.data.petsAllowed[0].petPolicyDetails[0].toLowerCase().includes('cats');
      //     console.log('description.data.petsAllowed', description.data.petsAllowed);
      //   }
      // } else {
      //   description.data.dogsAllowed = false;
      //   description.data.catsAllowed = false;
      // }

      console.log("DESCRIPTION", description)
      store.dispatch({type: "SCRAPER_ACTION", payload: description})


    }).catch(function(err) {
      console.log(err)
    })


}
