export function getToken() {
    return localStorage.getItem('token');
}

export function isLoggedIn() {
    if (localStorage.getItem('token') !== null) {
        return true;
    }

    return false;
}

export function logout() {
    localStorage.removeItem('token');
    location.reload();
}

export function setToken(token) {
    localStorage.setItem('token', token);
}
