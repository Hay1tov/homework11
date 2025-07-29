//     10 tasini avvalgi darsda uyga vazifa bergandingiz shuning uchun ishlamadim

//                                    No_1

// let a = 2.5;
// let n = 3;

// let result = 1;

// if (n > 0) {
//   for (let i = 1; i <= n; i++) {
//     result *= a;
//   }

//   console.log(`${a} ning ${n}-darajasi: ${result}`);

// } else {

//   console.log("(n > 0) bo'lishi kerak");
// }

//                                    No_2


// let a = 2.5;
// let n = 4;

// if (n > 0) {
//   let result = 1;

//   for (let i = 1; i <= n; i++) {
//     result *= a;
//     console.log(`${a} ning ${i}-darajasi: ${result}`);
//   }
// } else {
//   console.log("(n > 0) bo'lishi kerak");
// }

//                                    No_3

// let a = 2.5;
// let n = 4;

// let result = 1;
// let total = 0;

// if (n > 0) {

//   for (let i = 1; i <= n; i++) {
//     result *= a;
//     console.log(`${a} ning ${i}-darajasi: ${result}`);
//     total += result;
//   }

//   console.log(`Yig'indi: ${total}`);
// } else {
//   console.log("(n > 0) bo'lishi kerak");
// }


//                                    No_4

// let n = 5;

// let factorial = 1;
// let total = 0;

// if (n > 0) {

//   for (let i = 1; i <= n; i++) {
//     factorial *= i;
//     total += factorial;
//     console.log(`${i}! = ${factorial}`);
//   }

//   console.log(`Yig'indi S = ${total}`);
// } else {
//   console.log("(n > 0) bo'lishi kerak");
// }

//                                    No_5

// let N = 5;
// let K = 3;

// let S = 0;

// for (let i = 1; i <= N; i++) {
//   S += i * K;
// }

// console.log("S = " + S);

//                                    No_6

// let N = 5;

// let S = 0;

// for (let i = 1; i <= N; i++) {
//   S += i * i;
// }

// console.log("S = " + S);

//                                    No_7

// let A = 1;
// let B = 5;

// for (let i = A; i <= B; i++) {
//   for (let j = 0; j < i - A + 1; j++) {
//     console.log(i);
//   }
// }


//                                    No_8

// let number = 36;

// let total = 0;
// let loop = 0;

// for (let i = 1; i <= number; i++) {
//   if (number % i == 0) {
//     loop++;
//     total += i
//   }
// }

// console.log(`${number} ning ${loop} ta bo'linuvchisi two`)
// console.log(`${number} ning bo'linuvchilar yig'indi ${total}`)

//                                    No_9

// let N = 103;

// let bolinuvchi = 0;

// if (N > 1) {
//   for (let i = 1; i <= N; i++) {
//     if (N % i == 0) {
//       bolinuvchi++;
//     }
//   }
//   if (bolinuvchi == 2) {
//     console.log("N tub son");
//   } else {
//     console.log("N tub son emas");
//   }

// } else {

//   console.log("N > 1 bo'lishi kerak")
// }

//                                    No_10

// let number = 10;

// for (let i = 1; i <= number; i++) {
//   let qator = "";
//   for (let j = 1; j <= i; j++) {
//     qator += j + " ";
//   }
//   console.log(qator);
// }


//                                   W H I L E
//                                    No_11

// let A = 29;
// let B = 5;

// let qoldiq = A;

// while (qoldiq >= B) {
//   qoldiq = qoldiq - B;
// }

// console.log("Bo'sh qolgan kesma uzunligi:", qoldiq);

//                                    No_12

// let A = 18;
// let B = 5;

// let soni = 0;

// while (A >= B) {
//   A -= B;
//   soni = soni + 1;
// }

// console.log(`B kesmalar soni ${soni} ta`);

//                                    No_13

// let n = 27;
// let x = 1;

// while (x < n) {
//   x = x + x + x;
// }

// if (x === n) {
//   console.log("3 - ning darajasi");
// } else {
//   console.log("3 - ning darajasi emas");
// }


//                                    No_14

// let n = 20;
// let m = 8;

// let natija = 0;
// let qoldiq = null;

// if (n > m) {
//   let originalN = n
//   while (n >= m) {
//     n -= m;
//     natija ++;
//   }
//   qoldiq = n;
//   console.log(`${originalN} / ${m} = ${natija} \nqoldiq ${qoldiq}`)
// } else {
//   console.log("n > m bo'lishi kerak");
// }


//                                    No_15

// let n = 546;
// let result = '';

// while (n > 0) {
//   let raqam = n % 10;
//   n = Math.floor(n / 10);
//   result += raqam;
// }
// console.log(+ result);


//                                    No_16

// let n = 123456;
// let total = 0;
// let loop = 0;

// while (n > 0) {
//     let raqam = n % 10;
//     total += raqam;
//     loop++;
//     n = Math.floor(n / 10);
// }

// console.log("Raqamlar yig'indisi:", total);
// console.log("Raqamlar soni:", loop);

//                                    No_17

// let n = 1345;
// let two = false;

// while (n > 0) {
//   let raqam = n % 10;
//   if (raqam == 2) {
//     two = true;
//     break;
//   }
//   n = Math.floor(n / 10);
// }

// if (two) {
//   console.log("2 raqami mavjud.");
// } else {
//   console.log("2 raqami yo'q.");
// }


//                                    No_18

// let n = 86;
// let toq = false;

// while (n > 0) {
//   let raqam = n % 10;
//   if (raqam % 2 === 1) {
//     toq = true;
//     break;
//   }
//   n = Math.floor(n / 10);
// }

// if (toq) {
//   console.log("Toq raqam mavjud.");
// } else {
//   console.log("Toq raqam yo'q.");
// }



//                                    No_19

// let n = 456654;
// let originalN = n;
// let palindrom = 0;

// while (n > 0) {
//     let raqam = n % 10;
//     palindrom = palindrom * 10 + raqam;
//     n = Math.floor(n / 10);
// }

// let natija = (originalN === palindrom);
// console.log(natija);


//                                    No_20

// let n = 32;
// let i = 2;

// while (i <= Math.sqrt(n)) {
//   if (n % i === 0) {
//     console.log(n + " soni tub emas.");
//     break;
//   }
//   i++;
// }

// if (i > Math.sqrt(n)) {
//   console.log(n + " soni tub.");
// }

