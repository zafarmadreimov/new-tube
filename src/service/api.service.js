import axios from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key':'c52564bbc4msh8f20238bba42ef3p161d67jsnd6e88508d1d0',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
    }
  };

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options)
        return response.data
    }
}