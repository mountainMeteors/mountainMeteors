import Axios from 'axios';

export const SUBMIT_SURVEY = 'SUBMIT_SURVEY';
export const GET_SURVEY = 'GET_SURVEY';

const ROOT_URL ='http://localhost:2500/api';

export function submitSurvey(data) {
  console.log('#####sentData#####', data)
  const request = Axios.post(ROOT_URL + '/userSurvey',
  {
    address: data.address,
    brs: data.brs,
    price: data.price,
    amenity: data.amenity
  }
)

  return {
    type: SUBMIT_SURVEY,
    payload: request
  }
}


export function getSurvey(data){
  const request = Axios.get(ROOT_URL+ '/userSurvey')
  return {
    type: GET_SURVEY,
    payload: request
  }
}
