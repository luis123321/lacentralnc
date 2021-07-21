import axios from 'axios'

export const getSportData = async () => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',      
    }
    const url = 'https://lasports.apk.lol/api/lines?group_id=1';
    return await axios.get(`${url}`, { headers }).then(res => res.data)
  } catch (error) {
    console.log('error', error);
    throw error
  }
}