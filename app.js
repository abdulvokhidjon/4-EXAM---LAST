// 1-qism

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
// console.log(unbracketTag("no brackets"));

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
//   { country: "Belarus", city: "Brest" },
//   { country: "Russia", city: "Omsk" },
//   { country: "Russia", city: "Samara" },
//   { country: "Belarus", city: "Grodno" },
//   { country: "Belarus", city: "Minsk" },
//   { country: "Poland", city: "Lodz" },
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

// console.log(uniqueElements);

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

// const inputArray = [1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 6, 6, 7];
// const outputArray = removeDuplicateNeighbors(inputArray);

// console.log(outputArray);

// N{8}

// function deleteElementsInRange(arr, k, m) {
//   if (k <= 0 || m >= arr.length || k >= m) {
//     return "Invalid input: 0 < k < m < n";
//   }

//   const firstPart = arr.slice(0, k);

//   const secondPart = arr.slice(m + 1);

//   const resultArray = firstPart.concat(secondPart);

//   return {
//     numberOfElements: resultArray.length,
//     elements: resultArray,
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

// console.log("Total amount:", totalAmount);

// 2-qism

// N{1}

// function getFileNameWithoutExtension(filePath) {
//   const lastSlashIndex = filePath.lastIndexOf("/");
//   const fileNameWithExtension = filePath.substring(lastSlashIndex + 1);

//   const lastDotIndex = fileNameWithExtension.lastIndexOf(".");
//   const fileNameWithoutExtension = fileNameWithExtension.substring(
//     0,
//     lastDotIndex
//   );

//   return fileNameWithoutExtension;
// }

// const filePath = "D:/Qudrat_c++/books/My_book.exe";
// const fileName = getFileNameWithoutExtension(filePath);
// console.log(fileName);

// N{2}

// function getSum3(N) {
//   let sum = 0;
//   for (let i = 1; i <= N; i++) {
//     if (i % 3 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(getSum3(15));

// N{3}

// function calculateSumOfSquares(n) {
//   let sum = 0;
//   for (let i = n; i <= 2 * n; i++) {
//     sum += i * i;
//   }
//   return sum;
// }

// const n = 5;
// const result = calculateSumOfSquares(n);
// console.log(`The sum of squares from ${n}^2 to (${2 * n})^2 is: ${result}`);

// N{4}

// function createLengthObject(stringArray) {
//   const lengthObject = {};

//   for (let i = 0; i < stringArray.length; i++) {
//     const string = stringArray[i];
//     lengthObject[string] = string.length;
//   }

//   return lengthObject;
// }

// const strings = ["Abdulaziz", "Safarmurad", "Orol", "World"];
// const resultObject = createLengthObject(strings);

// console.log(resultObject);

// N{5}

// function getMultipleValues(n, obj) {
//   const res = {};

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       res[key] = obj[key] * n;
//     }
//   }

//   return res;
// }

// let n = 3;
// const obj = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 6,
// };

// const res = getMultipleValues(n, obj);
// console.log(res);

// N{6}

// function replaceSmallestAndLargestWithZero(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let smallest = arr[0];
//   let largest = arr[0];
//   let smallestIndex = 0;
//   let largestIndex = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//       smallestIndex = i;
//     }
//     if (arr[i] > largest) {
//       largest = arr[i];
//       largestIndex = i;
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (
//       i !== smallestIndex &&
//       i !== largestIndex &&
//       (arr[i] === smallest || arr[i] === largest)
//     ) {
//       arr[i] = 0;
//     }
//   }

//   return arr;
// }

// const a = [2, 5, 1, 8, 2, 9, 1, 5, 8];
// const result = replaceSmallestAndLargestWithZero(a);
// console.log(result);

// N{7}

// function hasSpaces(str) {
//   const words = str.split(" ");

//   return words.length > 1;
// }

// const inputString = "I am Abdulaziz Programmer";
// const result = hasSpaces(inputString);
// console.log(result);

// N{8}

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// const totalStudents = pupils.length;

// let totalPercentage = pupils.reduce(
//   (total, student) => total + student.protcent,
//   0
// );

// let averagePercentage = totalPercentage / totalStudents;

// console.log("O'rtacha protsentlar: " + averagePercentage);

// let minPercentage = pupils.reduce(
//   (min, student) => (student.protcent < min ? student.protcent : min),
//   pupils[0].protcent
// );

// console.log("Eng past protsent: " + minPercentage);

// N{9}

// function uniqueElements(arr) {
//   return arr.reduce((unique, item) => {
//     return unique.includes(item) ? unique : [...unique, item];
//   }, []);
// }

// const originalArray = [1, 2, 2, 3, 4, 4, 5];
// const newArray = uniqueElements(originalArray);
// console.log(newArray);

// N{10}

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];

// const animalCounts = animals.reduce((acc, animal) => {
//   acc[animal] = (acc[animal] || 0) + 1;
//   return acc;
// }, {});

// console.log(animalCounts);
