/* 
    A realização dessa estrutura de testes segue a premissa de refazer os exercícios básicos, introdutórios, da plataforma LeetCode. Escolhi, principalmente por fadiga, os problemas introdutórios para resolução.
    Utilizarei a ferramenta mocha.js + a biblioteca de assertions chai p/ a realização dos testes abrigados na pasta /test.
*/

/* 1480. Running Sum of 1d Array
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums. */

// constraints and relevant information:
// two arrays, one enters, other leaves.
// 1 <= nums.length <= 1000 xx
// -10^6 < nums[i] < 10^6 xx

function runningSum(arrNumber) {
    let numArr = [];
    let elemArr = 0;
    if ((Array.isArray(arrNumber) != true)) {
        return undefined;
    } else {
        if (arrNumber.length <= 1000) {
            for (let interval1 = 1; interval1 <= arrNumber.length; interval1++) {
                if (arrNumber[interval1 - 1] > -Infinity && arrNumber[interval1 - 1] < Infinity) {
                    elemArr += arrNumber[interval1 - 1];
                    numArr.push(elemArr);
                }
            }
            return numArr;
        } else {
            return undefined;
        }
    }
}

module.exports.runningSum = runningSum;

// ------------------------------------------------------------------------------------------------------

/* 1672. Richest Customer Wealth

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth. */

// Constraints: 
// 1 <= m, n <= 50
// 1 <= accounts[i][j] <= 100

function maximumWealth(arrAccounts) {
    let accountSums = [];
    if ((arrAccounts.length <= 50) && (arrAccounts.length > 1)) { // 1 <= m, n <= 50
        for (let i1 = 0; i1 < arrAccounts.length; i1++) {
            if ((arrAccounts[i1].length < 100) && (arrAccounts[i1].length > 1)) { // // 1 <= accounts[i][j] <= 100
                let accumulator = 0;
                for (let i2 = 0; i2 < arrAccounts[i1].length; i2++) {
                    accumulator += arrAccounts[i1][i2];
                }
                accountSums.push(accumulator);
            }
        }
        return Math.max(...accountSums);
    } else {
        return undefined;
    }
}

module.exports.maximumWealth = maximumWealth;

// ------------------------------------------------------------------------------------------------------

/* 412. Fizz Buzz

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true. */

function theFizz(num) {
    if (typeof num == "number" && Number.isFinite(num) == true) { // of course, the number must be a number.
        let returnArray = [];
        for (let i = 1; i <= num; i++) {
            let theFizzBuzz = "";
            (i % 3 == 0) ? theFizzBuzz += "Fizz" : "";
            (i % 5 == 0) ? theFizzBuzz += "Buzz" : "";
            (theFizzBuzz != "") ? returnArray.push(theFizzBuzz) : returnArray.push(String(i));
        }
        return returnArray;
    }
}

module.exports.theFizz = theFizz;