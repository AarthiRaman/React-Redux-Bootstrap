import { LOAD_USER_PHOTOS } from "../constants/actionTypes";

const initialState = {
    recentPhotos: []
};

export default function activityReducers(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_PHOTOS:
      return {
        ...state,
        recentPhotos: action.recentPhotos
      };

    default:
      return state;
  }
}
