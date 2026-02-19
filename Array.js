                // array

// cara membuat array
//  const arraySaya = ['👌','❤️','🎶']
//  console.log(arraySaya)

//  const arrayKamu = []
//  arrayKamu [0] = '😍'
//  arrayKamu [2] = '😘'
//  arrayKamu [3] = '💕'
//  console.log(arrayKamu)

//  const arrayKita = new Array('😁','👌')
//  console.log(arrayKita)

//  const arrayDia = new Array()
//  arrayDia [0] = ['sann']
//  arrayDia [1] = ['dain']
//  arrayDia [2] = ['👌']
//  console.log(arrayDia[0])

// mengecek apakah ada yang kita ingin cari dalam array tersebut

// const arrayBuah = ['🍓','🥑','🍎','🍅','🥝']
// const apel = arrayBuah.includes('🍎') // mengentahui apakah ada apel didalam arrayBuah
 
// if (apel) {
//     const posisiApel = arrayBuah.indexOf('🍎') //mengetahui posisi apel di index berapa
//     const indexBefore = posisiApel - 1 //index apel - 1
//     const indexAfter = posisiApel + 1 // index apel + 1
//     const before = indexBefore 
//     const after = indexAfter
//     console.log (`buah apel berada sebelum ${before}`)
//     console.log (`buah apel berada sesudah ${after}`)
//     console.log(`buah apel itu ada berada pada posisi ke ${posisiApel}`)
//     const buahAwal = arrayBuah.shift() //menentukan buah yang berada pada index awal bisa juga [0]
//     const buahAkhir = arrayBuah.pop() // menentukan buah yang berada pad index akhir
//     const buahAkhir = arrayBuah [arrayBuah.length-1] // menentukan buah yang berada di index akhir
//     const buahAkhir = arrayBuah [arrayBuah[0]] // menentukan buah yang berada di index akhir


//     console.log(buahAkhir)
//     console.log(buahAwal)
// } else {
//     console.log('maaf saya tidak temukan')
// }

// // membuat array tidak menggunakan index ex 0,1,2,3
//  const arraySaya = []
//  arraySaya ['sedih'] = '🥲'
//  arraySaya ['senang'] = '😁'
//  console.log(arraySaya)

// // array copy 
// const arrayBuah = ['🍓','🥑','🍎','🍅','🥝'] //contoh data orginal yang tidak bisa di ubah
// // const newArrayBuah = [...arrayBuah]// cara 1 untuk mengubah copy nya tanpa merusak ori nya
// // const newArrayBuah = arrayBuah.slice() cara 2
// // const newArrayBuah = Array.from(arrayBuah) cara 3
// // const newArrayBuah = JSON.parse(JSON.stringify(arrayBuah)) cara 4
// newArrayBuah [0] = '😁' 
// console.log(arrayBuah)
// console.log(newArrayBuah)

// const arrayBuah = ['🍓',1, {tomato : true},['eat','sann'],'🥝']
// console.log(arrayBuah[3][0]) // memanggil array 3 index 0 berarti eat jika index 1 sann

// const arraySaya = ['sann','🍓','🤮',{
//     apel: function (){
//     console.log('ini apel')
// },
// },
// ]
// arraySaya[3].apel()//memanggil function dalam array ke console.log

// combine 2 array

// const arraySaya = ['🍓','🍎','🥝']
// const arrayKamu = ['😁','😘','🤣']

// const mergeArray = arraySaya.concat(arrayKamu) // menggabungkan 2 array
// // console.log(mergeArray)
// // for (list of mergeArray) console.log(list) //mengggabungkan 2 array tanpa membuat urutan indexnya
// // for (list in mergeArray) console.log(list) //menggabungkan 2 array membuat urutan indexnya
// mergeArray.map((value, index) => console.log(value, index))// menggabungkan 2 array membuat urutannya dan buah nya// bisa juga balikkan index nya terlebih dahulu

// mengelolah data

// const data = [
//     {
//     nama : "sann",
//     stack : "js",
//     age : 20
// },
// {
//     nama : "rudi",
//     stack : "py",
//     age : 17
// },
// {
//     nama : "udin",
//     stack : "php",
//     age : 21
// }
// ]

// // data.map((values,index) => {console.log(values.nama, values.stack)}) //memunculkan hanya nama nya saja
// // //values. stack memunculkan stack nya, tapi kalau semua nya cukup values nya aja 

// data.sort((a, b) =>a.age - b.age).map((values) =>console.log(values)) // memcunculkan umur dari yang terkecil
// data.sort((a, b) =>b.age - a.age).map((values) =>console.log(values))//emcunculkan umur dari yang terbesar
// data.filter((x) =>x.age >= 20).map((values) =>console.log(values)) // memunculkan umur yang hanya lebih kecil sama dengan 20
// data.sort ((a,b) => a.age - b.age).filter((x) =>x.age >= 20).map((values) =>console.log(values))
//  // memunculkan umur yang hanya lebih kecil sama dengan 20 dan diurutin dari yang terkecil