
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

export const showUpdateForm = (data) => ({
    type: 'SHOW_UPDATE_FORM',
    id: data.id,
    title: data.title,
    text: data.text
});

export const showPostDetail = (data) => ({
    type: 'SHOW_POST_DETAIL_PAGE',
    id: data.id,
    title: data.title,
    text: data.text
});

export const updatePost = (title,text,id) => ({
    type: 'UPDATE_POST',
    title,
    text,
    id
});
