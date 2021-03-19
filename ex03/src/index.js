function rangeOfNumbers(startN, endN) {

    if (startN > endN){
        return "Jebaiga";
    }   else {
        var numbers = rangeOfNumbers(startN, endN - 1)
        numbers.push(endN)
        return numbers;
    }
}

console.log(rangeOfNumbers(8, 5));
