import {
  ADD_FETCHED_DATA,
  ADD_FAVORITE_TERM,
  REMOVE_FAVORITE_TERM,
} from "./types.js";
import axios from "axios";
const apiUrl = "https://fakestoreapi.com/products";

export const addFavoriteTerm = (data) => {
  return {
    type: ADD_FAVORITE_TERM,
    payload: {
      title: data.title,
      description: data.description,
      price: data.price,
      image: data.image,
    },
  };
};

export const removeFavoriteTerm = (title) => {
  return {
    type: REMOVE_FAVORITE_TERM,
    payload: {
      title,
    },
  };
};

export const fetchData = () => {
  return (dispatch) => {
    return axios
      .get(apiUrl)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: ADD_FETCHED_DATA,
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
