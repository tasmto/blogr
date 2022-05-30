import axios from 'axios';
import { response } from 'express';
import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_DELETE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_UPDATE_REQUEST,
  POST_UPDATE_FAIL,
  POST_UPDATE_SUCCESS,
  POST_CREATE_REVIEW_REQUEST,
  POST_CREATE_REVIEW_FAIL,
  POST_CREATE_REVIEW_SUCCESS,
  POST_CREATE_REVIEW_RESET,
  POST_TOP_REQUEST,
  POST_TOP_SUCCESS,
  POST_TOP_FAIL,
} from '../constants/postConstants';

export const listPosts =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: POST_LIST_REQUEST });

      const { data } = await axios.get(
        `/api/posts?keyword=${keyword}&pageNumber=${pageNumber}`
      );

      dispatch({ type: POST_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: POST_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? response.data.message
            : error.message,
      });
    }
  };

export const listPostDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: POST_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/posts/${id}`);

    dispatch({ type: POST_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePost = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`/api/posts/${id}`, config);

    dispatch({
      type: POST_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: POST_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createPost = (type, template) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      `/api/posts/`,
      { type: type || '', template: template || '' },
      config
    );

    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatePost = (post) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`/api/posts/${post._id}`, post, config);

    dispatch({
      type: POST_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createPostReview =
  (postId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: POST_CREATE_REVIEW_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      await axios.post(`/api/posts/${postId}/reviews`, review, config);

      dispatch({
        type: POST_CREATE_REVIEW_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: POST_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listTopPosts =
  (limit = 4) =>
  async (dispatch) => {
    try {
      dispatch({ type: POST_TOP_REQUEST });

      const { data } = await axios.get(`/api/posts/top?limit=${limit}`);

      dispatch({ type: POST_TOP_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: POST_TOP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
