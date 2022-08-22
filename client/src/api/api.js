import axios from "axios";

const apiEndpoint = "http://localhost:5000/";

export const fetchPosts = async () => {
    const { data } = await axios.get(apiEndpoint);
    return data;
}
export const fetchSinglePost = async (id) => {
    const { data } = await axios.get(`${apiEndpoint + 'posts/'}${id}`);
    return data;

}

export const createPost = async (post) => {
    const { data } = await axios.post(apiEndpoint + 'posts/', post);
    return data;
}

export const updatePost = async (id, updatedPost) => {
    console.log("gelen id: ", id);
    console.log("gelen yenisi:", updatedPost)
    const { data } = await axios.patch(`${apiEndpoint + 'posts/'}${id}`, updatedPost);
    return data;
}

export const deletePost = async (id) => {
    const { data } = await axios.delete(`${apiEndpoint + 'posts/'}${id}`);
    return data;
}