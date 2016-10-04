import axios from 'axios';


export const POST_SURVEY_ANSWERS =  "POST_SURVEY_ANSWERS"
export const FETCH_RESPONSES = 'FETCH_RESPONSES';


export function postSurveyAnswers(surveyResponses, user_id){
  const prefs = JSON.stringify(surveyResponses)
  console.log('======>>>>>>>>', "herereeee",  prefs, 'iddddd', user_id)
  const usersSurveyResponses = axios.post('/api/surveys', {
    prefs : prefs,
    user_id: user_id
  }, {
    headers: {
      'x-access-token': window.localStorage.getItem('userToken')
    }
  })
  .then(function(response){
    console.log('saved successfully')
  })
  return {
    type: POST_SURVEY_ANSWERS,
    payload: usersSurveyResponses
  }
}



export function fetchAnswers() {
  console.log( 'reqqqq========>', request)
  const request = axios.get("api/surveys/", {
    headers: {'x-access-token': window.localStorage.getItem('userToken')}
  });
  return {
    type: FETCH_RESPONSES,
    payload:request
  };
}
