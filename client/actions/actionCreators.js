import axios from 'axios';


export const POST_SURVEY_RESPONSES =  "POST_SURVEY_RESPONSES"
// add surveyAnswer
export function postSurveyAnswers({surveyAnswers}){
  console.log('surveyAnswers', surveyAnswers);
		const postSurveyAnswers = axios.post(`/results`, { id  : {
      id: id,
      answer: answer
    },
		}) .then(response => {
				console.log('good response: ', response);
			}) .catch(response => {
				console.log('error in action Creator: ',response);
			});

  return {
    type: POST_SURVEY_RESPONSES,
    payload: postSurveyAnswers
  }

}
