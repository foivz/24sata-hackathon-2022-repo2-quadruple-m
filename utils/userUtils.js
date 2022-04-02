export function getDefaultUser() {
    return {firstName: "Gost", lastName: "", imageUrl: "https://misobarisic.com/miso.webp", email: "Niste prijavljeni"}
}

export function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}

export function validatePassword(pass) {
    return pass.length > 2;
}