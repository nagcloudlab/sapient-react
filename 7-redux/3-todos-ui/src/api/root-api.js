

const rootApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 1000
});


export default rootApi