export const showForm = (showElement) => ({
    type: 'SHOW_FORM',
    showElement,
});

export const createPost = (data) => ({
    type: 'CREATE_POST',
    title: data.title,
    text: data.text,
});

export const deletePost = (data) => ({
    type: 'DELETE_POST',
    data
});

export const showUpdateForm = (data,showElement) => ({
    type: 'SHOW_UPDATE_FORM',
    id: data.id,
    showElement: showElement,
    title: data.title,
    text: data.text
});

export const setPostsFilter = (filter) => ({
    type: 'SET_FILTER',
    filter: filter,
});

export const showPostDetail = (data) => ({
    type: 'SHOW_POST_DETAIL_PAGE',
    id: data.id,
    title: data.title,
    text: data.text
});

export const updatePost = (data) => ({
    type: 'UPDATE_POST',
    title: data.title,
    text: data.text,
    id: data.id

});
