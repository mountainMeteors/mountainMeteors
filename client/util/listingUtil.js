import axios from 'axios';

exports.scrapeListing = function(url){
  console.log("URL", url)
  axios.post('/api/scrape', {
    url: url
  })
    .then(function(description){
      console.log("RESP*******", description)

      //TODO catch single dwelling edge case,
      //TODO catch undefined edge case (i.e. body)
      if (description.amenities.length === 'undefined' || description.amenities.length > 0) {
        description.amenities.dishwasher = description.amenities[0].body.includes('dishwasher');
        description.amenities.laundry = description.amenities[0].body.includes('laundry');
        description.amenities.nofee = description.amenities[0].body.toLowerCase().includes('no fee') || description.amenities[0].body.toLowerCase().includes('no-fee');
        description.amenities.gym = description.amenities[0].body.toLowerCase().includes('gym') || description.amenities[0].body.toLowerCase().includes('fitness');
      }
      //console.log('description.petsAllowed', description.petsAllowed);
      //console.log('description.petsAllowed.length', description.petsAllowed.length);
      if (description.petsAllowed.length === 1 && description.petsAllowed.length > 1) {
        description.dogsAllowed = description.petsAllowed[0].petPolicyDetails[0].toLowerCase().includes('dogs allowed');
        description.catsAllowed = description.petsAllowed[0].petPolicyDetails[1].toLowerCase().includes('cats allowed');
      }
      else if (description.petsAllowed[0] !== 'undefined' && description.petsAllowed.length > 0) {
        //console.log('description.petsAllowed', description.petsAllowed);
        if (description.petsAllowed[0].petPolicyDetails[0].toLowerCase().includes('allowed')) {
          description.dogsAllowed = description.petsAllowed[0].petPolicyDetails[0].toLowerCase().includes('dogs');
          description.catsAllowed = description.petsAllowed[0].petPolicyDetails[0].toLowerCase().includes('cats');
        }
      } else {
        description.dogsAllowed = false;
        description.catsAllowed = false;
      }


    }).catch(function(err) {
      console.log(err)
    })


}
