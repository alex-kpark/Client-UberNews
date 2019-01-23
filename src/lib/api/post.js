import axios from 'axios';

export function getPost(getId) {
    return axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
}

export function getComment(getComment) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
}