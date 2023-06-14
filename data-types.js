//undefined

let b;
var c;
console.log({ b, c });

//typeof

console.log(typeof b);
//z

let z = undefined;
console.log(typeof z);

//null

let obj = null;
console.log({ obj });
console.log(typeof obj);

//Boolean true false

let f1 = false;
let f2 = true;

console.log({ f1, f2 });

console.log(typeof f1, typeof f2);

//Number

let n1 = 78;
let n2 = 90.03;

console.log({ n1, n2 });

console.log(typeof n1, typeof n2);

//String

let s1 = "Code";
let s2 = "John";

console.log({ s1, s2 });

let s3 = `Hello, Coding`;
console.log({ s3 });

console.log(typeof s1, typeof s2, typeof s3);

let sym = Symbol();

console.log(sym);
console.log(typeof sym);

let bigN1 = 938646948356348563485634n;
console.log({ bigN1 });
console.log(typeof bigN1);

//Object
let stu = {
  name: "John",
  age: 22,
};

console.log(stu);
console.log(typeof stu);
