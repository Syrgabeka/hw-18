// declaration
// declaration
// declaration
// 1 задача
function hello() {
  document.body.innerHTML = "Hello";
}
hello();

// 2 задача
const a = +prompt("2 задача Введите первое число");
const b = +prompt("2 задача Введите второе число");
function plus(a, b) {
  alert(a + b);
}
plus(a, b);

// 3 задача
const q = +prompt("3 задача Введите число для введения в квадрата");
function kvadrat(q) {
  alert(Math.pow(q, 2));
}
kvadrat(q);

// 4 задача
const x = prompt("4 задача Введите имя");
function plusName(x) {
  alert("Hello " + x);
}
plusName(x);

// 5 задача
const c = prompt("5 задача Введите первое слово");
const v = prompt("5 задача Введите второе слово");
function plusStrit(c, v) {
  alert(`${c}  ${v}`);
}
plusStrit(c, v);

// 6 задача
const m = +prompt("6 задача Введите число");
function chetnoe(m) {
  if (m % 2 === 0) {
    alert("Число чётное");
  } else {
    alert("Число нечётное");
  }
  return;
}
chetnoe(m);

// 7 задача
const p = +prompt("7 задача Введите первое число");
const o = +prompt("7 задача Введите второе число");
function bigNumber(p, o) {
  if (p > o) {
    alert(p);
  } else {
    alert(o);
  }
}
bigNumber(p, o);

// 8 задача

// 9 задача
const name = prompt("9 задача Введите имя");
const age = +prompt("9 задача Введите возраст");
function nameAge(name, age) {
  alert(`Привет, ${name}! Тебе ${age} лет.`);
}
nameAge(name, age);

// 10 задача
const oneNumber = +prompt("10 задача Введите первое число");
const twoNumber = +prompt("10 задача Введите второе число");
function bigNumber(oneNumber, twoNumber) {
  if (oneNumber <= 10 || twoNumber <= 10) {
    alert(oneNumber + twoNumber);
  } else if (oneNumber > twoNumber) {
    alert(oneNumber - twoNumber);
  } else if (oneNumber < twoNumber) {
    alert(twoNumber - oneNumber);
  } else {
    alert("Что-то пошло не так");
  }
}
bigNumber(oneNumber, twoNumber);

// 11 задача
const baatir = +prompt("11 задача Введите номер квартиры");

function batirNumber() {
  if (baatir <= 20) {
    alert("В первом подъезде");
  } else if (baatir <= 48) {
    alert("Во втором подъезде");
  } else if (baatir <= 90) {
    alert("В третьем подъезде");
  } else {
    alert("Условие не выполнено!");
  }
}
batirNumber();

// // expression;
// // expression;
// // expression;
// // 1 задача
// const hello = function () {
//   document.body.innerHTML = "Hello";
// };
// hello();

// // 2 задача
// const a = +prompt("2 задача Введите первое число");
// const b = +prompt("2 задача Введите второе число");
// const plus = function (a, b) {
//   alert(a + b);
// };
// plus(a, b);

// // 3 задача
// const q = +prompt("3 задача Введите число для введения квадрата");
// const kvadrat = function (q) {
//   alert(Math.pow(q, 2));
// };
// kvadrat(q);

// // 4 задача
// const x = prompt("4 задача Введите имя");
// const plusName = function (x) {
//   alert("Hello " + x);
// };
// plusName(x);

// // 5 задача
// const c = prompt(`5 задача Введите первое слово`);
// const v = prompt("5 задача Введите второе слово");
// const plusStrit = function (c, v) {
//   alert(`${c} ${v}`);
// };
// plusStrit(c, v);

// // 6 задача
// const m = +prompt("6 задача Введите число");
// const chetnoe = function (m) {
//   if (m % 2 === 0) {
//     alert("Число чётное");
//   } else {
//     alert("Число нечётное");
//   }
//   return;
// };
// chetnoe(m);

// // 7 задача
// const p = +prompt("7 задача Введите первое число");
// const o = +prompt("7 задача Введите второе число");
// const bigNumber = function (p, o) {
//   if (p > o) {
//     alert(p);
//   } else {
//     alert(o);
//   }
// };
// bigNumber(p, o);

// // 8 задача

// // 9 задача
// const name = prompt("9 задача Введите имя");
// const age = +prompt("9 задача Введите возраст");
// const nameAge = function (name, age) {
//   alert(`Привет, ${name}! Тебе ${age} лет.`);
// };
// nameAge(name, age);

// // 10 задача
// const oneNumber = +prompt("10 задача Введите первое число");
// const twoNumber = +prompt("10 задача Введите второе число");
// const difference = function (oneNumber, twoNumber) {
//   if (oneNumber <= 10 || twoNumber <= 10) {
//     alert(oneNumber + twoNumber);
//   } else if (oneNumber > twoNumber) {
//     alert(oneNumber - twoNumber);
//   } else if (oneNumber < twoNumber) {
//     alert(twoNumber - oneNumber);
//   } else {
//     alert("Что-то пошло не так");
//   }
// };
// difference(oneNumber, twoNumber);

// // 11 задача
// const baatir = +prompt("11 задача Введите номер квартиры");

// const batirNumber = function () {
//   if (baatir <= 20) {
//     alert("В первом подъезде");
//   } else if (baatir <= 48) {
//     alert("Во втором подъезде");
//   } else if (baatir <= 90) {
//     alert("В третьем подъезде");
//   } else {
//     alert("Условие не выполнено!");
//   }
// };
// batirNumber();

////arrow
////arrow
////arrow
// // 1 задача
// const hello = () => {
//   document.body.innerHTML = "Hello";
// };
// hello();

// // 2 задача
// const a = +prompt("2 задача Введите первое число");
// const b = +prompt("2 задача Введите второе число");
// const plus = (a, b) => {
//   alert(a + b);
// };
// plus(a, b);

// // 3 задача
// const q = +prompt("3 задача Введите число для введения квадрата");
// const kvadrat = (q) => {
//   alert(Math.pow(q, 2));
// };
// kvadrat(q);

// // 4 задача
// const x = prompt("4 задача Введите имя");
// const plusName = (x) => {
//   alert("Hello " + x);
// };
// plusName(x);

// // 5 задача
// const c = prompt(`5 задача Введите первое слово`);
// const v = prompt("5 задача Введите второе слово");
// const plusStrit = (c, v) => {
//   alert(`${c} ${v}`);
// };
// plusStrit(c, v);

// // 6 задача
// const m = +prompt("6 задача Введите число");
// const chetnoe = (m) => {
//   if (m % 2 === 0) {
//     alert("Число чётное");
//   } else {
//     alert("Число нечётное");
//   }
//   return;
// };
// chetnoe(m);

// // 7 задача
// const p = +prompt("7 задача Введите первое число");
// const o = +prompt("7 задача Введите второе число");
// const bigNumber = (p, o) => {
//   if (p > o) {
//     alert(p);
//   } else {
//     alert(o);
//   }
// };
// bigNumber(p, o);

// // 8 задача

// // 9 задача
// const name = prompt("9 задача Введите имя");
// const age = +prompt("9 задача Введите возраст");
// const nameAge = (name, age) => {
//   alert(`Привет, ${name}! Тебе ${age} лет.`);
// };
// nameAge(name, age);

// // 10 задача
// const oneNumber = +prompt("10 задача Введите первое число");
// const twoNumber = +prompt("10 задача Введите второе число");
// const difference = (oneNumber, twoNumber) => {
//   if (oneNumber <= 10 || twoNumber <= 10) {
//     alert(oneNumber + twoNumber);
//   } else if (oneNumber > twoNumber) {
//     alert(oneNumber - twoNumber);
//   } else if (oneNumber < twoNumber) {
//     alert(twoNumber - oneNumber);
//   } else {alert("Что-то пошло не так");}
// };
// difference(oneNumber, twoNumber);

// // 11 задача
// const baatir = +prompt("11 задача Введите номер квартиры");

// const batirNumber = () => {
//   if (baatir <= 20) {
//     alert("В первом подъезде");
//   } else if (baatir <= 48) {
//     alert("Во втором подъезде");
//   } else if (baatir <= 90) {
//     alert("В третьем подъезде");
//   } else {
//     alert("Условие не выполнено!");
//   }
// };
// batirNumber();
