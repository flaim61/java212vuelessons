import axios from "axios"

export const apiBase = "https://jsonplaceholder.typicode.com/";

const $api = axios.create({
    withCredentials: false,
    baseURL: apiBase,
})

export const getPosts = async () => {
    return await $api.get('/posts');
}

export const getPost = async (id) => {
    return await $api.get('/posts/'+id);
}

export const getCommentsByPostId = async (id) => {
    return await $api.get('/posts/'+id+'/comments');
}
