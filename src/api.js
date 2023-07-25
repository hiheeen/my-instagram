import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
    headers: {
        'X-CSRFToken': getCookie('csrftoken'),
    },
    withCredentials: true,
});

// (1) GET : getAllFeeds()
// - URL : http://127.0.0.1:8000/api/v1/feeds
const getAllFeeds = () => {
    //전체 게시글을 가져오는 API
    return instance.get('feeds').then((res) => console.log(res.data));
};
