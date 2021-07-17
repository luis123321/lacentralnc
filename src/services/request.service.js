import axios from 'axios';
import { baseURL, storageTokenKey } from '../constants';

export const get = async (url) => {
  try {
    const accessToken = localStorage.getItem(storageTokenKey);
    const headers = {
      Authorization: accessToken
    }
    return await axios.get(`${baseURL}${url}`, { headers }).then(res => res.data)
  } catch (error) {
    console.log('error', error);
    throw error
  }
}

export const post = async (url, body) => {
  try {
    const accessToken = localStorage.getItem(storageTokenKey);
    const headers = {
      Authorization: accessToken
    }
    return await axios.post(`${baseURL}${url}`, body, { headers }).then(res => res.data)
  } catch (error) {
    throw error
  }
}

export const guest_get = async (url) => {
  try {
    const headers = {
      Authorization: 'guest'
    }
    return await axios.get(`${baseURL}${url}`, { headers }).then(res => res.data)
  } catch (error) {
    throw error
  }
}

export const guest_post = async (url, body) => {
  try {
    const headers = {
      Authorization: 'guest'
    }
    return await axios.post(`${baseURL}${url}`, body, { headers }).then(res => res.data)
  } catch (error) {
    throw error
  }
}