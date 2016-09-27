function listings(state = [], action) {
  switch(action.type) {
    case 'GETLISTINGS':
      console.log('listings reducer triggered. listings:', action);
      console.log('assigning', Object.assign({}, state, action.payload.data));
      console.log('reducer state', state);
      // return action.payload.data;
      return Object.assign([], state, action.payload.data);

    default:
      return state;
  }
}

export default listings;
