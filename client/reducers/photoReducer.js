import { FETCH_PHOTOS } from '../actionCreators/photoActions';

// const INITIAL_STATE = { all: [], photoFiles:null };

export default function (state={}, action){
    // console.log('reducer data', action.payload);
  switch(action.type) {
    case FETCH_PHOTOS:
      let listingPhotos = action.payload.data;
      console.log('photos reducer received', action.payload.data);
      state[listingPhotos.listingId] = listingPhotos.photoPaths;
      return state;
      // return { ...state, all: action.payload.data }

    default:
      return state;
  }
}

// export default function (state=[], action){
//     // console.log('reducer data', action.payload);
//   switch(action.type) {
//     case FETCH_PHOTOS:
//       console.log('photos reducer received', action.payload.data);
//       return { ...state, all: action.payload.data }
//
//     default:
//       return state;
//   }
// }
