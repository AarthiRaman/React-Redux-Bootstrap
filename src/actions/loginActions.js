import { 
  ON_LOGIN_CLICK,
  LOAD_USER_PHOTOS
} from "../constants/actionTypes";
import {
  USER_URL,
  PHOTO_URL,
  COMMENTS_URL
} from "../constants/config";

export function onLogin(){
  return (dispatch, getState) => {

    fetch(USER_URL)
      .then(response => response.json())
      .then(userData => {
        dispatch({
          type: ON_LOGIN_CLICK,
          user: userData
        });
      });

      fetch(PHOTO_URL)
      .then(response => response.json())
      .then(photoData => {
        dispatch({
          type: LOAD_USER_PHOTOS,
          recentPhotos: photoData 
        });
    
      });

      fetch(COMMENTS_URL)
      .then(response => response.json())
      .then(commentsData => {
        console.log(commentsData);
      })
  }
}
