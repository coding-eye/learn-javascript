//Scope

var a = 10;
let b = 100;
const C = 300;

function sample() {
  var a = 10;
  let b = 100;
  const C = 200;
  console.log({ a, b, C });
}

sample();

{
  let b = 2200;
  const C = 2900;
  let abc = "Code";
  console.log({ b, C, abc });
}

console.log({ a, b, C });

var z1 = 300;
var z1;
console.log(z1, z2);
let z2 = 400;
