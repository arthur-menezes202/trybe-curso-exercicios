arr.reduce(callback[ initialValue])
var arr = [ 'a', 'A', 'A', 'S', 'S' ];
var J = 'aA';
let val = arr.reduce((count , ch) => {
    return J.includes(ch) ? count + 1 : count
}, 0);
console.log(val);