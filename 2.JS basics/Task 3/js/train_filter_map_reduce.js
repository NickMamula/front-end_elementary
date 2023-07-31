let a = `Hello world1.`
    .toLowerCase()
    .split("")
    .filter(a => /[a-z]/.test(a))
    .map(c => c.charCodeAt())
    .reduce((a, c) => ((a[c] = (a[c] || 0) + 1), a), [])
    .slice("a".charCodeAt())
    .map((c, i) => ({c, i, l: String.fromCharCode(i + 97)}))
    .sort((a, b) => (b.c || 0) - (a.c || 0))
    .map(({c, l}) => `${l} - ${c}`)
    .join("\n");

let b = `Hello world1.!`;
b = b.toLowerCase().split(``);
console.log(b);
b = b.filter(a => /[a-z]/.test(a));
console.log(b); // left only a-z
b = b.map(c => c.charCodeAt());// return array in unicode 104,101,108,108,111,119,111,114,108,100
//map function return array with const action with each element
console.log(b);
b = b.reduce((a, c) => ((a[c] = (a[c] || 0) + 1), a), []);// set [c] element +1 count
//reduce have 4 argument [] it is first value  ,a  return accumulator
console.log(b);
b = b.slice("a".charCodeAt());//copy array from element index `a` unicode 97  Array(120) [1, 1, 1, 3, 2, 1, 1]
console.log(b);
b = b.map((c, i) => ({c, i, l: String.fromCharCode(i + 97)}));//c count of char i index
// l unicode index to char
console.log(b);
b = b.sort((a, b) => (a.c || 0) - (b.c || 0));// we sort and not undefined element begin if start index and high to low
console.log(b);
b = b.map(({c, l}) => `${l} - ${c}`);//new array string char and his count
//Array(23) ["d - 1", "e - 1", "h - 1", "r - 1", "w - 1", "o - 2", "l - 3"]
console.log(b);
b = b.join(`\n`);//returns a new string by concatenating all of the elements in an array
console.log(b);
