const baseUrl = "https://baas.kinvey.com/";

const appKey = "kid_SkO6PdsUU";
const appSecret = "e745c3a54d1b400ca5d37d33bf930b85";

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
            this.$notify({
                group: 'auth', text: 'Wrong username or password, please try again later', width: '200px', type: 'error'
            });
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