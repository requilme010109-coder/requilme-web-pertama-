if (localStorage.getItem("login") !=="true") {
    window.location.href = "login.html";
}

function logout () {
    localStorage.removeItem("login");
    window.location.href = "login.html";
}

if (localStorage.getItem("out") !=="true") {
    window.location.href = "portofolonav.html";
}

function logoout() {
    localStorage.removeItem("out");
    window.location.href = "portofolonav.html" };