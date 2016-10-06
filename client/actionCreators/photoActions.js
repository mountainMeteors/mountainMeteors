import axios from 'axios';
import request from 'superagent';

export const UPLOAD_PHOTOS = 'UPLOAD_PHOTOS';


//    headers: {
      // 'x-access-token': window.localStorage.getItem('userToken')
    // }

export function uploadPhotos(listingPhotos){
	console.log('actionnnnnn=======>', listingPhotos)

		var listingImages = listingPhotos.photos;
	console.log(listingImages);
var  req = request.post('/api/uploads');
    listingImages.forEach((file) => {
    	req.attach(file[0].name, file[0]);
    });
    req.end(function(err,res){
    	if (err) console.log(err)
    		else console.log(res)
    })
  return {
  	type : UPLOAD_PHOTOS,
  	payload: { listingPhotos }
  }

}




