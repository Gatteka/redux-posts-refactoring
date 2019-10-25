
export const showForm = (showElement) => ({
    type: 'SHOW_FORM',
    showElement,
});

export const createPost = (input,text) => ({
    type: 'CREATE_POST',
    input,
    text
});

export const deletePost = (id) => ({
    type: 'DELETE_POST',
    id
});

export const showUpdateForm = (id,title,text) => ({
    type: 'SHOW_UPDATE_FORM',
    id,
    title,
    text
});

export const showPostDetail = (id,title,text) => ({
    type: 'SHOW_POST_DETAIL_PAGE',
    id,
    title,
    text
});

export const updatePost = (title,text,id) => ({
    type: 'UPDATE_POST',
    title,
    text,
    id
});
