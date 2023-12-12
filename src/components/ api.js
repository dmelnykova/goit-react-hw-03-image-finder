import axios from 'axios';

const KEY_MY = '39897083-75dbac4ee3cbc91ee06f44220';

axios.defaults.baseURL = 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

export const fetchImage = async (query, page) => {
  
  const response = await axios.get(`/?q=${query}&page=${page}&key=${KEY_MY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data;
};