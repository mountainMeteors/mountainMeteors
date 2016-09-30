import axios from 'axios';


export const POST_RANKINGS =  "POST_RANKINGS"
export const FETCH_RANKINGS = 'FETCH_RANKINGS';




export function postRankings({ amenities, commute, extras, neighborhood, pets, rent }){
  const prefs = JSON.stringify({ amenities, commute, extras, neighborhood, pets, rent })
  console.log('======>>>>>>>>', "herereeee",  prefs)

  const surveyRankings = axios.post('/api/rankings', {
    prefs : prefs
  })
  .then(function(response){
    console.log('saved successfully')
  })
  return {
    type: POST_RANKINGS,
    payload: JSON.parse(surveyRankings)
  }
}



export function fetchAnswers(user_id) {
  const request = axios.get('api/rankings');
  console.log('+here in ACTION+++++',request)

  return {
    type: FETCH_RANKINGS,
    payload: request
  };
}

/*
export function fetchAnswers(user_id) {
  const request = axios.get('api/rankings' + user_id);
  console.log('+here in ACTION+++++',request)

  return {
    type: FETCH_RANKINGS,
    payload: request
  };
}
*/
