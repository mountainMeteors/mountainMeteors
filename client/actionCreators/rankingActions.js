import axios from 'axios';


export const POST_RANKINGS =  "POST_RANKINGS"
export const FETCH_RANKINGS = 'FETCH_RANKINGS';

export function postRankings({ amenities, commute, extras, neighborhood, pets, rent }){
  console.log('======>>>>>>>>', "herereeee")
  const surveyRankings = axios.post('/api/rankings', {
    neighborhood, rent, pets, amenities, commute, extras
  })
  .then(function(response){
    console.log('saved successfully')
  })
  return {
    type: POST_RANKINGS,
    payload: surveyRankings
  }
}



export function fetchAnswers() {
  const request = axios.get('api/getRankings');
  console.log('+here in ACTION+++++',request)

  return {
    type: FETCH_RANKINGS,
    payload: request
  };
}
