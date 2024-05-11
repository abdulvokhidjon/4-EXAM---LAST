//4-EXAM | Part 1

// N{1}

// function removeFirstOccurrences(str, value) {
//   const index = str.indexOf(value);
//   if (index !== -1) {
//     return str.substring(0, index) + str.substring(index + value.length);
//   }
//   return str;
// }

// console.log(removeFirstOccurrences("To be or not to be", "not"));
// console.log(removeFirstOccurrences("I like legends", "end"));
// console.log(removeFirstOccurrences("ABABAB", "BA"));

function removeFirstOccurrences(str, value) {
  const index = str.indexOf(value);
  if (index !== -1) {
    return str.slice(0, index) + str.slice(index + value.length);
  } else {
    return str;
  }
}

// Example usage:
const originalStringFirst = "To be or not to be";
const originalStringSecond = "I like legends";
const originalStringThird = "ABABAB";

const substringToRemoveFirst = "not";
const substringToRemoveSecond = "end";
const substringToRemoveThird = "not";
const resultBir = removeFirstOccurrences(
  originalStringFirst,
  substringToRemoveFirst
);
const resultIkki = removeSecondOccurrences(
  originalStringSecond,
  substringToRemoveSecond
);
// originalString,
//   substringToRemoveSecond,
//   originalStringThird,
//   substringToRemoveThird;
console.log(`Modified string: ${resultBir}, ${resultIkki}`);

// N{2}

// function unbracketTag(str) {
//   if (str.startsWith("<") && str.endsWith(">")) {
//     return str.substring(1, str.length - 1);
//   } else {
//     return str;
//   }
// }

// console.log(unbracketTag("<div>"));
// console.log(unbracketTag("<span>"));
// console.log(unbracketTag("<a>"));

// Ushbu misolni ikkinchi ishlash usuli:

// function unbracketTag(str) {

//   return str.replace(/^<|>$/g, "");
// }

// console.log(unbracketTag("<div>"));
// console.log(unbracketTag("<span>"));
// console.log(unbracketTag("<a>"));

// N{3}

// function isPrime(n) {
//   if (n <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(6));
// console.log(isPrime(7));
// console.log(isPrime(11));
// console.log(isPrime(12));
// console.log(isPrime(16));
// console.log(isPrime(17));

// N{4}

// function group(array, keySelector, valueSelector) {
//   return array.reduce((result, item) => {
//     const key = keySelector(item);
//     const value = valueSelector(item);

//     if (!result[key]) {
//       result[key] = [];
//     }
//     result[key].push(value);

//     return result;
//   }, {});
// }

// const data = [
//   { country: "Belorusiyaga quyidagilar kiradi:", city: "Brest" },
//   { country: "Rossiyaga quyidagilar kiradi:", city: "Omsk" },
//   { country: "Rossiyaga quyidagilar kiradi:", city: "Samara" },
//   { country: "Belorusiyaga quyidagilar kiradi:", city: "Grodno" },
//   { country: "Belorusiyaga quyidagilar kiradi:", city: "Minsk" },
//   { country: "Polshaga quyidagi kiradi:", city: "Lodz" },
// ];

// const groupedData = group(
//   data,
//   (item) => item.country,
//   (item) => item.city
// );

// console.log(groupedData);

// N{5}

// function getSumBetweenNumbers(n1, n2) {
//   let start = Math.min(n1, n2);
//   let end = Math.max(n1, n2);
//   let sum = 0;

//   for (let i = start; i <= end; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(getSumBetweenNumbers(1, 2));
// console.log(getSumBetweenNumbers(5, 10));
// console.log(getSumBetweenNumbers(-1, 1));

// N{6}

// function getElementsOneTime(arr) {
//   const elementCounts = {};

//   for (const element of arr) {
//     elementCounts[element] = (elementCounts[element] || 0) + 1;
//   }

//   return arr.filter((element) => elementCounts[element] === 1);
// }

// const inputArray = [1, 5, 6, 1, 5, 7, 2];
// const uniqueElements = getElementsOneTime(inputArray);

// console.log("Massiv elementlari orasidan faqat 1 marta ishtirok etganlari quyidagilar:" ,uniqueElements);

// N{7}

// function removeDuplicateNeighbors(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const result = [];
//   result.push(arr[0]);

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// const inputArray = [1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 6, 6, 7,7,8,8,9,10,10,11,11];
// const outputArray = removeDuplicateNeighbors(inputArray);

// console.log("Massiv elementlari orasidan bir xil qo'shnilarning birini o'chirgandan keyingi holat:" ,outputArray);

// N{8}

// function deleteElementsInRange(arr, k, m) {
//   if (k <= 0 || m >= arr.length || k >= m) {
//     return "Invalid input: 0 < k < m < n";
//   }

//   const firstPart = arr.slice(0, k);

//   const secondPart = arr.slice(m + 1);

//   const resultArray = firstPart.concat(secondPart);

//   return {
//     elementlarSoni: resultArray.length,
//     elementlar: resultArray,
//   };
// }

// const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const k = 2;
// const m = 5;

// const result = deleteElementsInRange(inputArray, k, m);
// console.log(result);

// N{9}

// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];

// for (let i = 0; i < books.length; i++) {
//   const book = books[i];
//   const readStatus = book.alreadyRead ? "o'qilgan" : "o'qilmagan";

//   console.log(
//     `${i + 1}. ${book.author}ning "${book.title}" kitobi ${readStatus};`
//   );
// }

// N{10}

// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// let totalAmount = 0;

// for (let i = 0; i < products.length; i++) {
//   const product = products[i];
//   const discountAmount = (product.price * product.discount) / 100;
//   const discountedPrice = product.price - discountAmount;
//   totalAmount += discountedPrice * product.quantity;
// }

// console.log("Umumiy hisob:", totalAmount);
