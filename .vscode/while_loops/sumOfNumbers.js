function sumOfNumbers(input){
    let n = Number(input[0]);
    let sum = 0;
    let index = 1;

    while (sum < n) {
    let currentNum = Number(input[index]);
    sum += currentNum;
    index++;
}
console.log(sum);
}

sumOfNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])







