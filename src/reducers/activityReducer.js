import { 
  LOAD_USER_PHOTOS,
  TOGGLE_MODAL
 } from "../constants/actionTypes";

const initialState = {
  recentPhotos: [],
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

    default:
      return state;
  }
}
