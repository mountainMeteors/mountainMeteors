import axios from 'axios';
import request from 'superagent';

export const UPLOAD_PHOTOS = 'UPLOAD_PHOTOS';
export const FETCH_PHOTOS = 'FETCH_PHOTOS ';



export function uploadPhotos(listingPhotos, listingId){
	var listingImages = listingPhotos.photos;
  var req = request.post('/api/uploads/');

  listingImages.forEach((file) => {
  	req.attach(file[0].name, file[0]);
  });

  req.field('listingId', listingId)
  // .send ({listingId:listingId})
  .end(function(err,res){
  	if (err) console.error(err)
  })

  return {
  	type : UPLOAD_PHOTOS,
  	payload: req
  }

}

export function fetchPhotos (listingId){
  const request = axios.get('api/uploads/' + listingId)

  return {
    type: FETCH_PHOTOS,
    payload: request
  }
}
