// array
 const myArr = [0, 1, 3, 4, 5, 6, 7, true, "kuldeep"]
 
//  console.log(myArr.includes(9));
//  console.log(myArr.indexOf(3));
//  console.log(myArr[1]);


//  Array Methods

//  myArr.push(6)
//  myArr.pop()           //// Removes last element of the array



//  myArr.unshift(0)         // Insert the give element at the beginning of the array



//  console.log(myArr);

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);



// Slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr );

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); 
console.log(myn2);