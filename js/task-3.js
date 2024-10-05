function filterArray(numbers, value) {
    return numbers.filter( (num) => {return num > value})
    // let result = [];
    // for (const elem of numbers) {
    //     if (elem > value)
    //         result.push(elem)
    // }
    // return result
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]