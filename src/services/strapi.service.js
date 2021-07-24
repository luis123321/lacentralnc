import axios from 'axios';
import { strapiURL } from '../constants'

export const getAdsData = async () => {
  try {
    const url = strapiURL + '/homepage';

    return await axios.get(`${url}`).then(res => res.data)
  } catch (error) {
    console.log('error', error);
    throw error
  }
}