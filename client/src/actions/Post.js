import * as api from '../api/api';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        // console.log(data);
        dispatch({ type: 'FETCH_POSTS', payload: data })

    } catch (error) {
        console.log(error.message);
    }
}


export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}
