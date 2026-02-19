
// //return > console.log

// //cara pertama

// // function addName() {
// //     return 'sann' 
// // }

// // alert(addName())

// //  memanggil 1 nama 

// // function addName(fullName) {
// //     console.log(fullName)
// // }
// // addName('sann')

// // memanggil 2 data

// // function addName(fistname,lastname){
// //  console.log(fistname,lastname)
// // }

// // addName('sann','fiery')

// // cara ketiga
// // function addName(fistname,lastname){
// //  console.log('nama saya:',fistname)
// //  console.log('nama teman:',lastname)
// // }

// // addName('sann','fiery')

// // ketika memiliki banyak data yang ingin dimunculkan dalam sebuah console.log

// // function addName(){
// //     console.log(arguments)
// // }

// // addName('sann','eben','rian','fiery') // menyatakan bahwa data nya berbentuk argument

// // untuk memisahkan antar nama 

// // function minName(){
// //     console.log('haloo saya :',arguments[0]) // jika memanggil hanya di index 0 dan bisa juga ditambahin kalimat
// //     console.log(arguments[1])//index 1
// // }

// // minName ('sann','fiery','eben','rian')

// // function maxName(){
// //     for (let i = 0; i < arguments.length; i++){ //i = index 0 i maka lebih kecil dari arguments length; i bisa di tambahkan  seberapa pun
// // console.log(arguments)                          
// //     }
// // }

// // maxName('sann')


//                             //MATERI 2
// //FUNCTION DITAMPUNG KEDALAM SEBUAH VARIABEL

// // CARA 1

// // const minName = function addName(fistname,lastname){
// //  console.log(fistname,lastname)
// // }

// // minName('sann','renn') // add name diubah ke variabel const yaitu fullName

// const fullName = new Function(
//     'fistname',
//     'lastname',
//     "console.log (fistname,lastname)",
// )
// fullName ('sann','renn')

// // const sum = new Function (
// //     'x','y',"return x+y"
// // )

// // console.log(sum(1,2))

//             //row function
// //cara 1 - keyword new function
// const sum1 = new Function('x','y','console.log(x+y)')
// sum1(4,9)

// //cara 2 - standar function
// function sum2(x , y) {
// console.log(x * y)
// }

// sum2(3,6)

// //cara 3 arrow function
// const sum3=(x,y) => {
//     console.log(x*y)
// }

// sum3(4,7)

// // hoisting


// // console.log(data) // jika tidak menggunakan function atau menggunakan const maka 
// // const data = 1 // console .log tidak dapat membaca karena console.log dapat membaca jika const 
//                 //berada di atas console .log

// // console.log(sann)  // maka terjadi undifine
// //  var sann = 2


// sum2(3,6)
//  function sum2(x , y) {  // berbeda dengan function dimana pun tipe data nya atau number nya
// console.log(x * y)  // function dapat membacanya
// }

// // maka hoisting berlaku pada function


// function sum2(x , y) { 
//     if (x *y == 18) {  // jika x dikali y sama dengan 18 maka dibaca hahaahhaahh
// console.log("hahahhahah")}
// }


// // menggunakan random math

// // function randommize(){
// //     console.log(~~(Math.random() * 1000)) // maka perkalian nya secara random
// // }

// // randommize()

// function randomsize () {
//     const randomNumber = ~~(Math.random() * 1000)
//     if (randomNumber > 200) {
//         console.log('woww lebih 200 bos') // jika perkalian dari math number lebih 200 maka wow lebih 200 bos
//     } else{                     // jika else maka tidak terjadi apa apa
//         console.log(randomNumber)
//     }
// }

// randomsize()


                    //Tugas

// // 1. MEMBUAT PERHITUNGAN MATEMATIKA 


//  -LUAS LINGKARAN.
function luasLingkaran (phi,jari,jari){
    console.log('Luas dari Lingkaran dengan rumus phi * jari * jari adalah',phi*jari*jari)
//  console.log(phi*jari*jari)
}
luasLingkaran(314,7,7)


// 2 LUAS SEGITIGA.
function luasSegitiga ( alas,tinggi) {
    let luas = 0.5 * alas * tinggi
   return (luas)
}

 console.log('Luas dari segitiga dengan rumus 0.5 * alas * tinggi adalah',luasSegitiga(10,8))

//3 LUAS PERSEGI PANJANG
function luasPersegiPanjang (panjang,lebar) {
   let luass = panjang * lebar 
   return (luass)

}

console.log('Luas dari persegi panjang dengan rumus tinggi * lebar adalah',luasPersegiPanjang(20,9))


//4 LUAS JAJARGENJANG 
function luasJajarGenjang (alas,tinggi) {
    console.log('Luas dari jajar genjang dengan rumus  alas * tinggi adalah',alas*tinggi)
}

luasJajarGenjang(20,40)

//     2. TOTAL GAJI SATU BULAN DENGAN INPUT MINIMAL

//1 NAMA KARYAWAN

function fullName (){
    console.log ('Nama Karyawan',arguments)
}

fullName('sann','ferr','ann', 'benn')


//2 GAJI PER HARI

function gajiPerHAri (gaji,hari) {
    var gaji = gaji * hari
    return(gaji)
}

console.log('Gaji karyawan per hari sebesar Rp',gajiPerHAri(100,1))

//3 JUMLAH HARI MASUK KERJA
function hariMasuk () {
   let tanggal= new Date()
   let bulan = 1
   let tahun = 2026
 }
   
console.log(tanggal + bulan + tahun)
  




