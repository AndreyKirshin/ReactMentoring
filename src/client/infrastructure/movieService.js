import axios from 'axios';

const rootApi = 'https://reactjs-cdp.herokuapp.com/';

export const loadMovies = (data) => axios({
    method: 'get',
    url: `${'https://cors-anywhere.herokuapp.com/'}${rootApi}movies`,
    dataType: 'json',
    params: {
        ...data,
        
    }
});
