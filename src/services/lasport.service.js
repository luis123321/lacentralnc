import axios from 'axios'

export const getSportData = async () => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'api-key:933aa73b-085f-41b0-b94d-209c36de0c21',
      'Access-Control-Allow-Origin' : '*',      
    }
    const url = 'https://lasports.apk.lol/api/lines?group_id=1';
    return await axios.get(`${url}`, { headers }).then(res => res.data)
  } catch (error) {
    console.log('error', error);
    throw error
  }
}