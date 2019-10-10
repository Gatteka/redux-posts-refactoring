
export const showForm = (showElement) => ({
    type: 'BUTTON_CLICKED',
    showElement,
});
export const sendForm = (input,area) => ({
    type: 'SEND_FORM',
    input,
    area,
});
