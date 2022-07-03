const hostname = window.location.hostname;
const baseURL = /solinkup.com/.test(hostname) ? 'https://api.solinkup.com' : 'https://api.solinkup.net'
export default baseURL;