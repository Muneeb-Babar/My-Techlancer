// api.js
const Api=import.meta.env.VITE_API_URL
const apiEmail= import.meta.env.VITE_EMAIL_API 

export const sendMessage = async (formData) => {
    const response = await fetch(Api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    return response;
};

export const sendEmail = async (formData) => {
    console.log(formData);
    
    const response = await fetch(apiEmail, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    return response;
};
