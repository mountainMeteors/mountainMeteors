const auth = function(state = [], action) {
  switch(action.type){
    case 'SIGNUP':
      console.log('REDUC SIGNUP USER', action);


    default:
      return state;
  }
}

export default auth;
