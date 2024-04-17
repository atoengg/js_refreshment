var name = "Bani";
let age = 27;
const isMarried = true;
let hasil = 90;

function countAverage() {
  var num1 = 4;
  let num2 = 5;
  const num3 = 10;
  console.log(name);
}

if (true) {
  var num4 = 7;
  let num5 = 8;
  const num6 = 10;
  hasil = num4 + num5 + num6;
}

function myFunction() {
  if (true) {
    var localVariable = "I'm in block scope";
    let blockVariable = "I'm also in block scope";
  }
  console.log(localVariable); // Accessible
  console.log(blockVariable); // Error: blockVariable is not defined
}

function checkCondition() {
  let result = "Before condition";
  if (true) {
    let result = "Inside condition"; // Block-scoped variable
  }
  console.log(result); // "Before condition" from the outer scope
}

// var b
// b = 7
// console.log(`ini konsep normal ${b}`)

// c = 10
// var c
// console.log(`ini konsep hoisted ${c}`)

// console.log(`ini adalah scope global: ${name}`)
// // console.log(`ini adalah scope local: ${num1}`)
// console.log(`ini adalah scope blok: ${hasil}`)

// // countAverage()
// // myFunction()
// checkCondition()

let angka = 6;

// if (angka === "6") {
//   console.log("true")
// } else {
//   console.log("false")
// }

// angka === "6" ? console.log(true) : console.log(false)

// const name = "irham"
// name = "dina"
// console.log(name)

let person = ["irham", "dina", "dina"];

// person.map((e) => {
//   console.log(e)
// })

// person.forEach((e) => {
//   console.log(`menggunakan forEach ${e}`)
// })

// for (let i = 0; i < person.length; i++){
//   console.log(`menggunakan for ${person[i]}`)
// }

// if (person.length > 0) {
//   console.log('ada isinya')
// } else {
//   console.log('tidak ada isinya')
// }

// person.length > 0 ? console.log('ada isinya') :   console.log('tidak ada isinya')

//object
// {key: value}
const human = {
  name: "irham",
  age: 27,
  isMarried: true,
  address: {
    street: "jalan kemuning",
    city: "bandung",
  },
};

// console.log(
//   `nama saya ${human.name}, saya mempunyai alamat di ${human.address.street} kota ${human.address.city}`,
// );

// konsep dasar destructuring array

function getNumber() {
  let number = [1, 2, 3, 4, 5];
  let number2 = [6, 7, 8, 9, 10];

  const gabunganNumber = [...number, ...number2];
  console.log(`gabungan angka: ${gabunganNumber}`);

  // const dataKetiga = number[3];
  // console.log(dataKetiga);
  // console.log(number[3]);

  // console.log(`number: ${number}`);

  // best practice
  const [a, , , b] = number;
  // console.log(`nilai a: ${a}`);
  // console.log(`nilai b: ${b}`);
}

// getNumber();

// konsep dasar destructuring object
function getHuman() {
  const { name, age, isMarried, address } = human;

  console.log(`nama manusia: ${name}`);
  console.log(`umur manusia: ${age}`);
  console.log(`alamat jalan: ${address.street}`);
}

// getHuman()

// konspep dasar spread operator objek
function getHuman2() {
  const human2 = { ...human };
  console.log(`nama manusia: ${human2.name}`);
}

// getHuman2()

// studi kasus sederhana

const tweets = [
  {
    author_id: 2244994945,

    username: "@programmerlog",

    created_at: "2020-02-14T19:00:55.000Z",

    id: 1228393702244134912,

    edit_history_tweet_ids: "1228393702244134912",

    text: "What did the developer write in their Valentine’s card?\n  \nwhile(true) {\n    I = Love(You);  \n}",
  },

  {
    author_id: 2244994945,

    username: "@txtdarimantan",

    created_at: "2020-02-14T19:00:55.000Z",

    id: 1228393702244134913,

    edit_history_tweet_ids: "1228393702244134912",

    text: "testt",
  },

  {
    author_id: 2244994945,

    username: "@txtdariyunif",

    created_at: "2020-02-14T19:00:55.000Z",

    id: 1228393702244134914,

    edit_history_tweet_ids: "1228393702244134912",

    text: "misi boloo",
  },
];

function getTweetsBytUsername() {
  tweets.map((item, index) => {
    console.log(`username: ${item.username}`);
  });
}

getTweetsBytUsername();
