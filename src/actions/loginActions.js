import { 
  ON_LOGIN_CLICK,
  LOAD_USER_PHOTOS,
  LOAD_USER_COMMENTS
} from "../constants/actionTypes";

export function onLogin(){
  return (dispatch, getState) => {

    const {
      USER_URL,
      PHOTO_URL,
      COMMENTS_URL
    } = getState().config;

    async function getAsyncData(url) 
    {
      let response = await fetch(url);
      let data = await response.json()
      return data;
    }

    getAsyncData(USER_URL).then(userData => {
        dispatch({
          type: ON_LOGIN_CLICK,
          user: userData
        });
      });

    getAsyncData(PHOTO_URL).then(photoData => {
      dispatch({
        type: LOAD_USER_PHOTOS,
        recentPhotos: Array.from(photoData).slice(0, 10)
      });
    });
      
    getAsyncData(COMMENTS_URL).then(commentsData => {
      dispatch({
        type: LOAD_USER_COMMENTS,
        recentComments: Array.from(commentsData).slice(0, 10)
      });
    });
  }
}
