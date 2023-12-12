import axios from 'axios';

const KEY = '39897083-75dbac4ee3cbc91ee06f44220';

const perPage = 12;
export const loadImages = async (search, page) => {  
    const url = `https://pixabay.com/api/?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    const response = await axios(url);
    return response.data;
};