import axios from "axios";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: `$process.env.AIzaSyBtK_5ZtbzS2T_a0BeYThIe-LjDNZfWRjY`
    }
});