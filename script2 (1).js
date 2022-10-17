
//If else statement
let umur = prompt("Masukkan Nilai");
let convert= parseInt(umur);//convert string to int

if(isNaN (convert)) alert("masukkan angka !!");

if (umur <= 17){
    console.log("Masih Kecil");
}else if (umur >= 17 && umur <=30){
    alert("Masih Remaja");
}else if (umur > 30 && umur <=70) {
    console.log("sudah tua");
}else {
    console.log("Invalid");
}


//logical operators
let a = 15;
let b = 10;

console.log(a<20 && b>3); //jika kedua kondisi true = true
console.log(a<30 || b<5); //jika salah satu kondisi true = true



//comporasion operators
let c=10; //number
let d="10"; //string

console.log(c == d);  //true
console.log(c === d); //false`


//switch statement
let language = "English";
let greeting = null;


//switch
switch (language) {
    case "English":
        greeting = "Good Morning!";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu!";
        break;
    default:
        greeting = "Selamat Pagi!";
}

console.log(greeting);


//comporasion operators
let score =40;

if(score < 30) (console.log("D"));
if(score > 30) (console.log("C"));


// Latian conditional statement
// Nilai 1 - 30 : D
// Nilai 31 - 59: C
// Nilai 60 - 79 : B
// Nilai 80 - 100 : A 

// validasi 1 => jika nilai lebih dari 100 makan invalid number
// validasi 2 => jika nilai ada berhubungan negatif invalid number (-1)

//Latihan conditional statement
const userInput = prompt("Masukan Nilai anda?");

const checkValue = +userInput; // melakukan konversi ke interger atau number

if (isNaN(checkValue)) alert("Harap memasukan angka!"); // validasi jika value adalah number

if (checkValue < 0 || checkValue > 100) alert("Harap memasukan angka diantara 1 - 100!"); // jika value diantara 1 - 100

const nilai = "";
let nilai1 = "";

// validasi diantara angka
if (checkValue >= 0 && checkValue <= 30) alert("D");

if (checkValue >= 31 && checkValue <= 59) alert("C");

if (checkValue >= 60 && checkValue <= 79) alert("B");

if (checkValue >= 80 && checkValue <= 100) alert("A");
