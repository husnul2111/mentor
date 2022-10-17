// // Perulangan for
for(let i=0;i<=10;i++){
    if(i % 2 == 0){
        console.log("Genap")
    }else{
        console.log("Ganjil");
    }
}


let array = ["Agis", "Tira", 23];
let object = [{
    fname: "Agis",
    lname: "Tira",
    umur: 23,
}]

// // // Perulangan Map
array.map((key) => console.log(key));

// // // Perulangan for in
for(key in object){
    console.log(key);
}


// // // Perulangan for of
for({fname,lname,umur} of object){
    console.log(fname,lname,umur);
}

let i=0;

// // Perulangan While
while(i<= 10){
    console.log(i);
    i++;
}

// Perulangan Do While
do {
    console.log(i);
    i++;
}while(i<=10);


// Buatlah sebuah perulangan dari angka 1-50
// Dengan Kondisi jika angka yang bisa di bagi 3 maka print ("Apa")
// Jika angka yang bisa dibagi 5 maka print ("Boleh")
// Jika angka yang bisa dibagi 3 dan 5 maka print ("ApaBoleh")
// Selain itu maka print angka.

for(let i=0;i<=50;i++){
    if(i % 3 == 0 && i % 5 ==0){
        console.log('Apaboleh');
    }else if(i % 3 == 0){
        console.log("Apa");
    }else if(i % 5 == 0){
        console.log("Boleh")
    }else{
        console.log(i);
    }
}