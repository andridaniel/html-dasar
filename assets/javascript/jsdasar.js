// ini adalah komentar satu baris

 /*ini adalah komentar
 multi 
 baris*/

 console.log("hello world")
 
// Variabel
var user = "Andri Daniel Rajagukguk"
let age = "22"
const alamat = "kuta"
console.log(`Nama : ${user}\nUmur : ${age}\nAlamat : ${alamat}`)

let creator = {
    email: "andridanielrajagukguk@gmail.com",
}
console.log(creator)



// Operator

let a = 30
let b = 6
console.log(`a = ${a}\nb = ${b}`)
console.log(`a + b = ${a + b}`)
console.log(`a - b = ${a - b}`)
console.log(`a * b = ${a * b}`)
console.log(`a / b = ${a / b}`)
console.log(`a % b = ${a % b}`)
console.log(`a > b = ${a > b}`)

//Pop Up & Kondisi
let masukkan = prompt("apa tujuan anda masuk ? ")
alert("tujuan anda " + masukkan)



if(masukkan) {
    alert(`tujuan anda ${masukkan}, ini PopUp box dalam Javascript`)
} else {
    alert("saya kecewa anda tidak memasukan tujuan anda!")
}

//type conversion & function
let nilai = 5
console.log(`Data : ${nilai}`)

function conv(num) {
    console.log(`nilai -> String : ${String(num)}`)
    console.log(`nilai -> Boolean : ${Boolean(num)}`)
}

conv(nilai)

//Perulangan (Loop)
for (let index = 0; index < 5; index++) {
    console.log(`Perulangan ke-${index}`)
}

//loop...do while
let i = 0;
do {
    console.log(`interasi ke ${i}`)
    i+=1;
} while (i < 5);

// //loop control break
// for (let i = 0; i < 5; i++){
//     if (i = 3){
//         break;
//     }
//     console.log(`break ke ${i}`)
// }

// //loop control continue
// for (let i = 0; i < 5; i++){
//     if (i = 3){
//         continue;
//     }
//     console.log(`continue ke ${i}`)
// }


