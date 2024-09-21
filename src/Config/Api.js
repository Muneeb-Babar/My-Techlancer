// api.js
const API_URL = 'https://my-techlancer-git-main-asghar-0017s-projects.vercel.app/send-message';

export const sendMessage = async (formData) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    return response;
};
