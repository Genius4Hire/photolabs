/* eslint-disable */

import {useState} from 'react';

import mockPhotos from "../mocks/photos";
import mockTopics from "../mocks/topics";

export default function useApplicationData(props) {

  // initial states
  const [photos, setPhotos] = useState(mockPhotos);
  const [topics, setTopics] = useState(mockTopics);
  const [favedPhotos, setFavedPhotos] = useState([]);
  const [modalToggle, setModalToggle] = useState(null);

  // helper functions
  const modalToggler = (photo) => {
    if (photo === undefined)
      return modalToggle;
    if (photo !== null) {
      setModalToggle(photo);
      return true; // return pre-state
    } else {
      setModalToggle(null);
      return false; // return pre-state
    }
  };

  const searchForFavs = (photo) => {

    if (photo !== undefined) {
      return favedPhotos.includes(photo);
    } else {
      return (favedPhotos.length === 0) ? false : true;
    }
  };

  const addFave = (photo) => {
    const newList = [
      ...favedPhotos,
      photo
    ];
    // console.log("Faving: ", photo.id);
    setFavedPhotos(newList);
  };

  const delFave = (photo) => {
    const newList = favedPhotos.filter((element) => {
      return (element !== photo);
    });
    // console.log("Unfaving: ", photo.id);
    setFavedPhotos(newList);
  };

  const favToggler = (photo) => {
    if (searchForFavs(photo)) {
      delFave(photo);
    } else {
      addFave(photo);
    }

  };

  const state = [
    photos,
    topics,
    favedPhotos,
    modalToggle
  ];

  const helpers = [
    modalToggler,
    favToggler,
    searchForFavs,
  ];

  return {
    state,
    helpers
  };
}