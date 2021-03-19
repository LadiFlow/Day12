function counter(n) {
 if(n<1) {
     return [];
 }  else {
    const countArray = counter(n - 1);
    countArray.push(n);
    return countArray;
 }
}
console.log(counter(-1));