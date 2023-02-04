
// task 1

let arrayOne = [1, 5, 4, 10, 0, 3]
for (i = 0; i < arrayOne.length; i++){
    if (arrayOne[i] !== 10) {
        console.log(arrayOne[i]);
    } else {
        break
    }

}

//task 2

let arrayTwo = [1, 5, 4, 10, 0, 3]
	console.log(arrayTwo.indexOf(5));

// или

let arrayTwo = [1, 5, 4, 10, 0, 3]
for (i = 0; i < arrayTwo.length; i++){
    if (arrayTwo[i] == 4) {
        console.log(i);
    }
}

// task 3

let arrayThree = [1, 3, 5, 10, 20]
arrayThree = arrayThree.join(' ')
console.log(arrayThree);

// task 4

let arrayFour = []
for (i = 0; i < 10; i++){
    arrayFour[i] = Math.floor(Math.random()*10)
}

let arrayFourNew = [];
for (i = 0; i < arrayFour.length; i++){
    if (arrayFour[i] % 2 == 0){
        arrayFourNew.push(arrayFour[i])
    }
}

console.log(arrayFour);
console.log(arrayFourNew);


// task 5

let arrayFive = [];
for (i = 0; i < 3; i++) {
  arrayFive[i] = [];
  for (j = 0; j < 3; j++) {
    arrayFive[i][j] = 1;
  }
}
console.log(arrayFive);


// task 6

let arraySix = [1, 1, 1]
for (i = 3; i < 6; i++){
    arraySix[i] = 2
}
console.log(arraySix);

// task 7

let arraySeven = [9, 8, 7, 'a', 6, 5]
arraySeven.sort()
console.log(arraySeven);
arraySeven.pop()
console.log(arraySeven);

// task 8  

let arrayEight = [9, 8, 7, 6, 5]
let enter = prompt('Ввеите число от 1 до 10')
for (i = 0; i < arrayEight.length; i++){
    if (arrayEight[i] == enter){
        console.log('есть такое число');
        break
    } console.log('нет такого числа');
}

// !!! Требуется помощь по улучшению, чтобы при налиии числа получать сообщение об этом, а при отсутствии (после прохождения всего цикла, получить ОДНО сообщение, а не на каждую оперрацию с резальтатом false)


// task 9

let anyString = 'abcdef'
let arrayNine = anyString.split('')
console.log(arrayNine);
arrayNine.reverse()
console.log(arrayNine);
anyString = arrayNine.join('')
console.log(anyString);


// task 10

let arrayTen = []
let sum = 0;
for (i = 0; i < 10; i++){
    arrayTen[i] = Math.ceil(Math.random()*10)
    sum += arrayTen[i]
}
console.log(arrayTen);
console.log(sum);

let aver = sum / arrayTen.length
console.log(aver);


// task 11

let arrayEleven = [[1, 2, 3,],[4, 5, 6]]
let newArrayEleven = []
for (i = 0; i < arrayEleven.length; i++){
    for (j = 0; j < arrayEleven[i].length; j++){
        newArrayEleven.push(arrayEleven[i][j])
    }
}
console.log(newArrayEleven);

// task 12

let arrayTwelve = []
let amount = 0;
for (i = 0; i < 10; i++){
    arrayTwelve[i] = Math.ceil(Math.random()*10)
    amount += arrayTwelve[i]
    console.log(amount);
}

console.log(arrayTwelve);
console.log(amount);