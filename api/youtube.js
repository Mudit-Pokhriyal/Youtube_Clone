import axios from 'axios';

const KEY = 'AIzaSyAFEGUJJVyoZ3FOsM8nzBXiULrU2PlW2qk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type:'video',
        maxResults:5,
        key:KEY
    }
})