// let hewan = ["Ayam","Bebek","Angsa","Kelinci","Paus"];
// let keluarga = ["ayah","bunda","mama","anak","anak tiri"];
// hewan.forEach((satuan)=>{
//     if(satuan == "anjing"||satuan == "kucing"){
//         console.log(satuan);

//     }
// })

// var data =0;
// hewan.forEach(function (data){
//     console.log(data)
// })
// console.log(data)

// console.log(hewan.map(function(data){
//     return "mantap"
// }))
// const mapHewan = hewan.map(data => "kelinci")
// console.log(mapHewan);

// console.log(hewan.includes("kucing"))

// console.log(hewan.some(data => data =="kucing"))

// let nilai = [40,20,60,30,50]

// let penampung = nilai.every(data=> data > 10)
// let penampungReduce = nilai.reduce((total,nilai)=>{
//     total = total+nilai
//     return total
// },100)
// let penampungSort = nilai.sort(function(a,b){ return b-a})
// console.log(penampungSort)  
// let penampungSort1 = nilai.sort((a, b) => a > b ? 1 : -1)
// console.log(penampungSort1) 
// let penampungSort2 = hewan.sort()
// console.log(penampungSort2) 
// console.log(penampung)

// console.log(penampungReduce) 

// let arrayGabung = nilai.concat("hewan","mantap",2,3,4,hewan)
// console.log(arrayGabung);


/*const kendaraan = {
    type:"motor",
    roda:"4",
    merk:"toyota",
    warna:"hitam",
    tahun:2013,
    noMesin:000
}
const {type:tipe, merk:merek, isMobil=false} = kendaraan

console.log(tipe)
console.log(merek)
console.log(isMobil)

// console.log(kendaraan)

const [,,aqil,dedi,ilham]=nilai

console.log(aqil)
console.log(dedi)
console.log(ilham)
*/


/*const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

// menginisialisasi nilai baru melalui object destruction
const [aqil,dedi,ilham,...data] = nilai;
 
console.log(...nilai);
console.log(aqil);
console.log(dedi);
console.log(ilham);
console.log(data);
*/


//Spreading operator penggunaan rest
// console.log(Math.max(...nilai))

// function data(...item){
//     console.log(item[9])
//     for(let angka of item){
//         if(angka== "mantap"){
//             console.log(angka)

//         }
//     }
// }

// data(1,2,3,4,5,200,300,400,500,"mantap")








/*

// fungsi reguler fungsi deklarasi
function namaFunction(parameter){

}

// fungsi reguler fungsi ekspresi
const data = function(parameter){

}

//Arrow function fungsi ekspresi
const namaVariable = (parameter,parameter2) =>{

} 


nilai.map((parameter)=>{})
nilai.map(function(parameter){})
*/

//Latihan yang sudah di pelajari 
/*let nilai=[60,75,30,70,80]


const average = (...item)=>{
    let hasil=0;
    let panjang=item.length;
    for(let data of item){
        hasil=hasil+data;
    }
    return hasil/panjang

}

console.log(average(...nilai))*/

// //belajar class
// class Mahasiswa{
//     constructor(nama,nim,alamat){
//         this._nama = nama;
//         this.nim=nim;
//         this.alamat = alamat;
//     }
//     dataMahasiswa(){
//         console.log(`nama: ${this.nama}`)
//         console.log(`nim: ${this.nim}`)
//         console.log(`alamat: ${this.alamat}`)
//     }
//     getNama(){
//         return this._nama;
//     }
// }

// const classBaru = new Mahasiswa("Kakek sugiono","2017480099","jl.asikasik");
// classBaru.dataMahasiswa();
// // setTimeout(()=>{console.log(classBaru.getNama())},500)

// const executorFunction = (ok, tidak) => {
//     const isCoffeeMakerReady = true;
//     if(isCoffeeMakerReady) {
//         ok("Kopi berhasil dibuat");
//         // setTimeout(()=>{
//         //     ok("Kopi berhasil dibuat");
//         // },5000)
//     } else {
//       tidak("Mesin Kopi tidak bisa digunakan!")
//     }
// }
    
// const makeCoffee = new Promise(executorFunction);
// console.log(makeCoffee.then(()=>{console.log("done")}).catch(()=>{console.log("gagal")}));
// console.log(makeCoffee.then(()=>{}).then(()=>{}).catch(()=>{}));


const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18,
    nilai: [1,2,3,4,5,6]
}
 
let firstName="";
let age= "";
let nilai= [];
 
// menginisialisasi nilai baru melalui object destruction
({firstName, age,nilai} = profile);
 

console.log(firstName);
console.log(age);
console.log(...nilai);

console.log(nilai.filter((data,index,lstData)=>{
    console.log(index);
    console.log(lstData)
    if(data % 2 !== 0){
        return data;
    }
}))