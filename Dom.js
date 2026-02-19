// // // mengubah title pada index html di js

// // // console.log(document.title) // memeriksa title sebelum di ganti
 //mengganti document dalam body

// // // document.title ='requilme'
// // // console.log(document.title)


// mengubah body pada js 
const body = document.body


console.log(body)


const namaKamu = document.createElement('p')
namaKamu.innerHTML= 'haloo ini pasep'

const namaSaya = document.createElement('b')
namaSaya.innerText = 'haloo ini sann'
// body.append(h1)

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')
const h1  = document.querySelector('.haa1')

const defaultText ='klik ini1'
btn1.textContent = defaultText

btn1.style.border =' none'
btn1.style.margin = '10px'
btn1.style.padding = '10px'
btn1.style.fontSize ='10px'
btn1.style.background = 'tomato'


function onclickBtn() {
    btn1.style.background ='yellow'
    const newText = document.createElement('p')
    newText.textContent ='halooo bungg'
    body.append(newText)
}

function onmouseBtn () {
btn1.textContent ='aduhh'

} 

function onmouseOut () {
    btn1.textContent = defaultText
}

btn2.style.border =' none'
btn2.style.margin = '10px'
btn2.style.padding = '10px'
btn2.style.fontSize ='10px'
btn2.style.color='black'
btn2.style.background='yellow'

h1.style.color='yellow'

function ubahText () {
    const textBaru = document.createElement('h1')
    textBaru.textContent ='Santuri requilme simatupang'
    body.append(textBaru)
}
    
function ubahWarna () {
   textBaru.btn2.style.background ='green'
     const textBaru = document.createElement('h1').style.color= blue;
    textBaru.textContent ='Santuri requilme simatupang'
    body.append(textBaru)
    
}








