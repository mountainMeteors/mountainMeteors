import axios from 'axios';
import request from 'superagent';


//    headers: {
      // 'x-access-token': window.localStorage.getItem('userToken')
    // }

export function uploadPics(props){

const name =props.title || 'undefined';
var request = request.post('/api/uploads').
set ({headers: {
	authorization: localStorage.getItem('userToken')
}})
  // if (prop.files) {
  // 	for (var i=0; i<)
  // }

}

