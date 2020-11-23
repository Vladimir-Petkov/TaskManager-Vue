const baseUrl = "https://baas.kinvey.com/";

const appKey = "kid_r1_LPPP6I";
const appSecret = "500d0a41c3464b568b7948c9940ed6d7";

const requester = {
    get(endpoint, module, type) {
        const headers = this.makeHeaders(type, 'GET');
        const url = `${baseUrl}${module}/${appKey}/${endpoint}`;

        return fetch(url, headers);
    },
    post(endpoint, module, type, data) {
        const headers = this.makeHeaders(type, 'POST', data);
        const url = `${baseUrl}${module}/${appKey}/${endpoint}`;

        return fetch(url, headers);
    },
    put(endpoint, module, type, data) {
        const headers = this.makeHeaders(type, 'PUT', data);
        const url = `${baseUrl}${module}/${appKey}/${endpoint}`;

        return fetch(url, headers);
    },
    del(endpoint, module, type) {
        const headers = this.makeHeaders(type, 'DELETE');
        const url = `${baseUrl}${module}/${appKey}/${endpoint}`;

        return fetch(url, headers);
    },
    handler(response) {

        if (response.status >= 400) {
            throw new Error(`Something went wrong. Error: ${response.statusText}`);
        }

        if (response.status !== 204) {
            response = response.json();
        }

        return response;
    },
    makeAuth(type) {
        return type === 'Basic'
            ? 'Basic ' + btoa(appKey + ':' + appSecret)
            : 'Kinvey ' + sessionStorage.getItem('authtoken');
    },
    makeHeaders(type, httpMethod, data) {
        const headers = {
            method: httpMethod,
            headers: {
                'Authorization': this.makeAuth(type),
                'Content-Type': 'application/json'
            }
        };

        if (httpMethod === 'POST' || httpMethod === 'PUT') {
            headers.body = JSON.stringify(data);
        }

        return headers;
    },
};

export default requester;