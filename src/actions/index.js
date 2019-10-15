
export const showForm = (showElement) => ({
    type: 'SHOW_FORM',
    showElement,
});

export const sendForm = (input,text) => ({
    type: 'SEND_FORM',
    input,
    text,
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

export const updatePost = (title,text,id) => ({
    type: 'UPDATE_POST',
    title,
    text,
    id
});
