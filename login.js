function login () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let emailBenar = "requilme@gmail.com";
    let passwordBenar = "191919";

    if (email === emailBenar && password === passwordBenar) {
        localStorage.setItem("login", "true");
        window.location.href = "portofolio.html";
    } else {
        document.getElementById("pesan").innerHTML=alert("email & password salah");
    }
}  