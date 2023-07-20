/* eslint-disable */

import {useState, useReducer} from 'react';

import photos from "../mocks/photos";
import topics from "../mocks/topics";

// initial states
const initialState = {
  photos: photos, 
  topics: topics, 
  favedPhotos: [],
  selectedPhoto: {},
  modalActive: false,
} 

export const ACTIONS = {
  MODAL_TOGGLER: 'MODAL_TOGGLER',
  FAV_TOGGLER: 'FAV_TOGGLER',
  UPDATE_PHOTO_DATA: 'UPDATE_PHOTO_DATA'
}

const reducer = (state, action) => {

  const addFave = (photo) => {
    const newList = [
      ...state.favedPhotos,
      photo
    ];
    return newList;
  };

  const delFave = (photo) => {
    const newList = state.favedPhotos.filter((element) => {
      return (element !== photo);
    });
    return newList;
  }; 

  const newState = {...state};

  switch (action.type) {
    case ACTIONS.MODAL_TOGGLER : 
      newState.modalActive = action.payload;
     break;

    case ACTIONS.UPDATE_PHOTO_DATA :
      newState.selectedPhoto = action.payload;
    break;
  
    case ACTIONS.FAV_TOGGLER : 
      // const favToggler = (photo) => {
        const isFav = state.favedPhotos.findIndex(photo => photo.id === action.payload.id)
      if (isFav !== -1) {
        newState.favedPhotos = delFave(action.payload);
      } else {
        newState.favedPhotos = addFave(action.payload);
      }
    break;

    case ACTIONS.SEARCH_FOR_FAVS : 
      if (action.payload !== undefined) {
        newState.favedPhotos = state.favedPhotos.includes(action.payload);
      } else {
        if (state.favedPhotos.length === 0) {
          newState.favedPhotos = false;
        } else {
          newState.favedPhotos = true;
        }
      };
    break;

    default: 
      console.log(`No actions were met with type ${action.type}`)
  }
  return newState;
};

export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, initialState);

  // helper functions
  const modalToggler = (photo) => {
    if (state.modalActive) return;

    dispatch({type: 'UPDATE_PHOTO_DATA', payload: photo})
    dispatch({type: 'MODAL_TOGGLER', payload: !state.modalActive});
  };

  const favToggler = (photo) => {
    dispatch({type: 'FAV_TOGGLER', payload: photo});
  };

  const onCloseModal = () => {
    dispatch({type: 'MODAL_TOGGLER', payload: false})
  }

  // console.log("Current state",state);
  
  return {
    state,
    modalToggler,
    favToggler,
    onCloseModal,
  };
}