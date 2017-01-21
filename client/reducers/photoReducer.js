import { FETCH_PHOTOS } from '../actionCreators/photoActions';


export default function (state={}, action){
  switch(action.type) {
    case FETCH_PHOTOS:
      let listingPhotos = action.payload.data;
      // console.log('photos reducer received', action.payload.data);
      state[listingPhotos.listingId] = listingPhotos.photoPaths;
      return Object.assign({}, state, action.payload.data);
      // return state;
      // return { ...state, all: action.payload.data }

    default:
      return state;
  }
}
