//import {  rnppUrl,  GATEWAY_URL, API_KEY, SECRET_KEY, BEARER_TOKEN } from './routers.js';

const requesttoBackendJson = async (method, endpoint, data = null) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(endpoint, options);
    const responseData = await response.json();

    if (!response.ok) {
        return false
    }

    return responseData;
};

/*
const requesttoBackendAutantikation = async () => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            apiKey: API_KEY,
            secretKey: SECRET_KEY
        })
    };

    const response = await fetch(GATEWAY_URL, options);
    const responseData = await response.json();

    if (!response.ok) {
        return false;
    }

    return responseData.bearerToken;
};*/


const requesttoBackendFormat = async (method, endpoint, BEARER_TOKEN, data = null) => {
    const options = {
        method,
        headers: {
            'Authorization': `Bearer ${BEARER_TOKEN}`
        },
        body: data // Assuming data is FormData
    };

    const response = await fetch(endpoint, options);
    const responseData = await response.json();

    if (!response.ok) {
        return false;
    }

    return responseData;
};



const requesttoBackendAtrubi = async (method, endpoint, BEARER_TOKEN) => {
    const options = {
        method,
        headers: {
            'Authorization': `Bearer ${BEARER_TOKEN}`
        }
    };

    const response = await fetch(endpoint, options);
    const responseData = await response.json();

    if (!response.ok) {
        return false;
    }

    return responseData;
};


const requesttoBackendRaw = async (method, endpoint, data = null) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(apiUrlfine + endpoint, options);
    const responseData = await response.json();

    if (!response.ok) {
        return false
    }

    return responseData;
};

//export { requesttoBackendJson, requesttoBackendFormat, requesttoBackendRaw };

