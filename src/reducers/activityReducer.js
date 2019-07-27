import { 
  LOAD_USER_PHOTOS,
  LOAD_USER_COMMENTS,
  TOGGLE_MODAL
 } from "../constants/actionTypes";

const initialState = {
  recentPhotos: [],
  recentComments: [],
  showModal: false,
  modalContent: {}
};

export default function activityReducers(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_PHOTOS:
      return {
        ...state,
        recentPhotos: action.recentPhotos
      };

    case TOGGLE_MODAL:
      return {
        ...state,
        showModal: action.showModal,
        modalContent: action.modalContent
      };

    case LOAD_USER_COMMENTS:
      return {
        ...state,
        recentComments: action.recentComments
      };

    default:
      return state;
  }
}
