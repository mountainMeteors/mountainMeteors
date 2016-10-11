import axios from 'axios';
import request from 'superagent';

export const UPLOAD_PHOTOS = 'UPLOAD_PHOTOS';
export const FETCH_PHOTOS = 'FETCH_PHOTOS ';



export function uploadPhotos(listingPhotos, listing_Id){
	// console.log('actionnnnnn=======>', listingPhotos, listing_Id)
  const listingId = listing_Id ||  undefined;
		var listingImages = listingPhotos.photos;
	console.log(listingImages);
var  req = request.post('/api/uploads/');
    listingImages.forEach((file) => {
    	req.attach(file[0].name, file[0]);
    });
    req
    .field('listingId', listingId)
    // .send ({listingId:listingId})
    .end(function(err,res){
    	if (err) console.log(err)
    		else console.log(res)
    })
  return {
  	type : UPLOAD_PHOTOS,
  	payload: req
  }

}

export function  fetchPhotos (listingId){
  // console.log(listingId, 'acccccction===>')
  const request = axios.get('api/uploads/' + listingId)
  // console.log('paths=====>',request)

  return {
    type: FETCH_PHOTOS,
    payload: request
  }
}
