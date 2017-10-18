import axios from 'axios';
//
// export const GET_DIST = 'GET_DIST';
//
// export const getDistance = function(){
//
//   const request = axios.post('', {
//
//   })
// }
//
// return {
//   type: 'GET_DIST',
//   payload: request
// }

exports.getDistance = function(){
  const request = axios.post('/api/dist', {
      key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
      unit: 'Imperial',
      origin: '125 St.Marks Place, New York, NY 10009',
      destination: '1216 Broadway, New York, NY 10001',
      travelMode: 'DRIVING'
  })
  .catch(function (error) {
    console.error(error);
  });
}
