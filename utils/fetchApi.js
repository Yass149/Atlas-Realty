import axios from "axios";

export const  { baseUrl } = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '840061b987mshf83588739c1b872p119e66jsn71dfbea7f3ba',
    },
  });
    
  return data;
}