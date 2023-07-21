/* eslint-disable */

import {useState, useReducer, useEffect} from 'react';
import axios from 'axios';

// initial states
const initialState = {
  photos: [], 
  topics: [], 
  currentTopic: null,
  favedPhotos: [],
  modalPhoto: {},
  modalActive: false,
} 

const ACTIONS = {
  MODAL_TOGGLER: 'MODAL_TOGGLER',
  FAV_TOGGLER: 'FAV_TOGGLER',
  UPDATE_PHOTO_DATA: 'UPDATE_PHOTO_DATA',
  CHOOSE_NEW_TOPIC: 'CHOOSE_NEW_TOPIC',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
}

const reducer = (state, action) => {

  // helper functions

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

  // retrieve current state..

  const newState = {...state};

  // update state depending on action..

  switch (action.type) {
    case ACTIONS.MODAL_TOGGLER : 
      newState.modalActive = action.payload;
     break;

    case ACTIONS.UPDATE_PHOTO_DATA :
      newState.modalPhoto = action.payload;
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

    case ACTIONS.SET_PHOTO_DATA :
      newState.photos = action.payload;
    break;

    case ACTIONS.CHOOSE_NEW_TOPIC :
      newState.currentTopic = action.payload;
    break;
      
    case ACTIONS.SET_TOPIC_DATA :
      newState.topics = action.payload;
    break;

    default: 
      console.log(`Error trying to ${action.type}`)
    break;
  }

  // update with new state..

  return newState;
};

export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, initialState);

  // API (high latency) side effect calls

  useEffect(() => {
    const photosPromise = axios.get("/api/photos");
    const topicsPromise = axios.get("/api/topics");

    const serverDataPromises = [photosPromise, topicsPromise];
    
    Promise.all(serverDataPromises)
      .then((results) => {
        dispatch({type: 'SET_PHOTO_DATA', payload: results[0].data});
        dispatch({type: 'SET_TOPIC_DATA', payload: results[1].data});
      });
    
  }, []);

  useEffect(() => {
    let photoPromise = {};

    state.currentTopic !== null ?
      photoPromise = axios.get(`/api/topics/photos/${state.currentTopic.id}`) :
      photoPromise = axios.get("/api/photos");

    const serverDataPromises = [photoPromise];
    Promise.all(serverDataPromises)
      .then((results) => {
        dispatch({type: "SET_PHOTO_DATA", payload: results[0].data});
      });
  }, [state.currentTopic]);

  // Helper functions

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
  };

  const newTopic = (topic) => {
    dispatch({type: 'CHOOSE_NEW_TOPIC', payload: topic});
  };

  return {
    state,
    modalToggler,
    favToggler,
    onCloseModal,
    newTopic,
  };
}