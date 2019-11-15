console.log("Fala ai")
let frutas = ["Banana", "Laranja", "maça", "Pera"];
// var i;
// for (i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }
console.log(frutas)

// frutas.splice(0, 3, "Melão", "Melancia");
// this.frutas = frutas.push("Goiaba")
let num = [1, 2, 3, 4, 5];
num = num.filter(function (n) { return n !== 2 });

frutas = frutas.filter(function (n) { return n !== "Banana" && n !== "maça" })

console.log(num)
console.log(frutas)
