import {
    TOGGLE_MODAL
} from '../constants/actionTypes';

export function toggleModal(showModal, modalContent) {
    return (dispatch, getState) => {
        dispatch({
            type: TOGGLE_MODAL,
            showModal,
            modalContent
        });
    }
}