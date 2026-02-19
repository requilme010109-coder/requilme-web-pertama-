

function gantiWarna() {
    btn1.style.background = "red"
    btn1.style.color = "black"
}

function gantiText() {
    btn2.textContent="Web ini belum selesai"
}

function oriText() {
 btn2.textContent="Klik disini"
}

function out() {
    let email = document.getElementById("email").value;
    let text  = document.getElementById("text").value;

    let emailBenar = "sann@gmail.com"
    let textBenar = "portofolio1"

    if( email === emailBenar && text === textBenar ) {
        localStorage.setItem("out","true");
        window.location.href="Portofolio.html";
    } else {
        document.getElementById("pesan"). innerHTML= alert("alamat and text salah");
    }
}