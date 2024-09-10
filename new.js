// 문제 1: 숫자를 입력받아 그 숫자가 짝수이면 "짝수입니다"를, 홀수이면 "홀수입니다"를 출력하는 함수를 작성하세요.
function checkEvenOdd(number) {
	if (number % 2 === 0) {
        console.log("짝수입니다.");
    } else {
        console.log("홀수입니다.");
    }
}

checkEvenOdd(17);

// 문제 2: 나이를 입력받아 18세 이상이면 "성인입니다", 그렇지 않으면 "미성년자입니다"를 출력하는 함수를 작성하세요.
function checkAge(age) {
    if (age >= 18) {
        console.log("성인입니다.");
    } else {
        console.log("미성년자입니다.");
    }
}

checkAge(19);

// 문제 3: switch문을 사용하여 요일(1~7)을 입력받고 해당 요일의 이름을 출력하는 프로그램을 작성하세요. (1은 월요일, 7은 일요일)
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("월요일");

            break;
        case 2:
            console.log("화요일");

            break;
        case 3:
            console.log("수요일");

            break;
        case 4:
            console.log("목요일");

            break;
        case 5:
            console.log("금요일");

            break;
        case 6:
            console.log("토요일");

            break;
        case 7:
            console.log("일요일");

            break;
        default:
    }
}

getDayName(3);

// 문제 4: 1부터 100까지의 숫자 중에서 짝수만 출력하는 `for` 반복문을 작성하세요.
function printEvenNumbers() {
    for (let i = 1; i<= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

printEvenNumbers();

// 문제 5: `while` 문을 사용하여 5부터 15까지의 숫자를 출력하는 프로그램을 작성하세요.
function printNumbers() {
    let i = 5;

    while  (i < 16) {
        console.log(i);
        i++
    }
}

printNumbers();

// 문제 6: `do-while` 문을 사용하여 사용자가 입력한 숫자가 10이 될 때까지 숫자를 계속 입력받고, 입력된 숫자를 출력하는 프로그램을 작성하세요.

function inputUntilTen() {
    let i = 0;
    do {
        console.log(i);
        i++;
    } while(i<11)
}

inputUntilTen();

// 문제 7: 두 개의 숫자를 더하는 함수 `addNumbers`를 선언하고, 해당 함수를 호출하여 결과를 출력하세요.
function addNumbers(a, b) {
    const result = a + b;

    console.log(result);
};

// 함수 호출
// addNumbers(15, 56);

// 문제 8: 세 개의 숫자를 곱한 결과를 반환하는 함수 `multiplyNumbers`를 선언하고 호출하여 결과를 출력하세요.  
function multiplyNumbers(a, b, c) {
    return a * b * c;
};

// 함수 호출
console.log(multiplyNumbers(3, 6, 9));

// 문제 9: 이름을 인자로 받아서 "안녕하세요, [이름]님!"을 출력하는 함수 `greet`를 선언하고 호출하세요.
function greet(name) {
    console.log("안녕하세요," + name + "님!")
}

// 함수 호출
greet("김수현");

// 문제 10: 두 숫자의 차를 구하는 함수 표현식을 작성하고 이를 호출하여 결과를 출력하세요.
const subtract = function(a, b) {
    const result = a - b;

    console.log(result);
};

// 함수 호출
subtract(60,30)

// 문제 11: 세 개의 숫자를 더한 값을 반환하는 함수 표현식을 작성하고, 이를 호출하여 결과를 출력하세요.
const sum = function(a, b, c) {
    const result = a + b + c;

    console.log(result);
};

// 함수 호출
sum(3, 6, 9);

// 문제 12: 두 숫자를 더한 값을 반환하는 화살표 함수를 작성하고 호출하여 결과를 출력하세요.
const add = (a, b) => {
    const result = a + b;

    console.log(a+b)
};

// 함수 호출
add(5,10);

// 문제 13: 숫자를 제곱하여 반환하는 화살표 함수를 작성하고 호출하여 결과를 출력하세요.
const square = (n) => {
    return n ** 2;
    // 1. n * n
    // 2. n ** 2
    // 3. Math.pow(n, 2);
};

// 함수 호출
console.log(square(8));

// 문제 14: 배열을 입력받아 배열의 각 요소에 2를 곱한 새로운 배열을 반환하는 화살표 함수를 작성하세요. (`map` 메소드를 사용하세요)
const doubleArray = (arr) => {
    return arr.map((element) => {
        return element *2;
    });
};

// 함수 호출
console.log(doubleArray([1, 36, 57, 69, 150]));

// 문제 15: 나이를 인자로 받아 "성인" 또는 "미성년자"를 반환하는 화살표 함수를 작성하세요.
const checkAge2 = (age) => (age < 20 ? "미성년자" : "성인");
// {if (age < 20) {return "미성년자";} else {return "성인";}}

// 함수 호출
console.log(checkAge2(19));
console.log(checkAge2(20));
console.log(checkAge2(21));

// 문제 16: 두 개의 숫자를 입력받아, 큰 숫자를 출력하는 함수를 작성하세요.
function findMax(a, b) {
    if (a < b) {
        return b;
    } else if (a > b) {
        return a;
    }
}

console.log(findMax(500,500));

// 문제 17: 학생의 점수를 입력받아 90점 이상은 'A', 80점 이상은 'B', 70점 이상은 'C', 그 이하는 'F'를 출력하는 프로그램을 작성하세요.
function grade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
}

console.log(grade(90));
console.log(grade(80));
console.log(grade(70));
console.log(grade(69));

// 문제 18: `switch`문을 사용하여 사용자가 입력한 달(month)에 맞는 계절을 출력하는 프로그램을 작성하세요. (예시: 3 ~ 5월은 봄, 6 ~ 8월은 여름, 9 ~ 11월은 가을, 12 ~ 2월은 겨울)
function getSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");

            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");

            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");

            break;
        case 9:
        case 10:
        case 11:
            console.log("Fall")

            break;
    }
}

getSeason(1);
getSeason(2);
getSeason(3);
getSeason(4);
getSeason(5);
getSeason(6);
getSeason(7);
getSeason(8);
getSeason(9);
getSeason(10);
getSeason(11);
getSeason(12);

// 문제 19: `for`문을 사용하여 1부터 10까지의 숫자의 합을 구하는 프로그램을 작성하세요.
function sumNumbers() {
    let sum = 0;

    for (let i = 1; i <=10; i++) {
        sum += i;
    }

    console.log(sum);
}

sumNumbers();

// 문제 20: `while`문을 사용하여 1부터 20까지의 숫자 중 3의 배수를 출력하는 프로그램을 작성하세요.
function printMultiplesOfThree() {
    let i = 1;
    while (i <= 20) {
        if (i % 3 === 0) {
            console.log(i);
        }

        i++;
    }
}

printMultiplesOfThree();

// 문제 21: `do-while`문을 사용하여 0부터 100까지의 숫자 중 10의 배수를 출력하는 프로그램을 작성하세요.
function printMultiplesOfTen() {
    let counter = 0;

    do {
        if (counter % 10 === 0) {
            console.log(counter);
        }

        counter++;
    } while (counter <= 100);
}

printMultiplesOfTen();

// 문제 22: 세 개의 숫자 중에서 가장 큰 숫자를 찾는 함수를 선언하고 호출하세요.
function findMaxOfThree(a, b, c) {
    return Math.max(...[a, b, c]);
}

// 함수 호출
console.log(findMaxOfThree(300, 111, 2500));

// 문제 23: 두 문자열을 입력받아 두 문자열이 동일하면 "동일함"을, 그렇지 않으면 "동일하지 않음"을 출력하는 함수를 작성하세요.
function compareStrings(str1, str2) {
    return str1 === str2 ? "동일함" : "동일하지 않음";
}

// 함수 호출
console.log(compareStrings("qwer", "qwer"))
console.log(compareStrings("qwer", "qwerasdf"))

// 문제 24: 배열을 입력받아 배열에 있는 숫자들의 평균을 계산하는 함수를 작성하세요.
function calculateAverage(numbers) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    console.log(result / numbers.length);
}

// 함수 호출
console.log(calculateAverage([20, 30, 40, 50, 60]));

// 문제 25: 배열의 모든 요소를 제곱한 값을 반환하는 함수 표현식을 작성하고, 이를 호출하세요.
const squareArray = function(arr) {
    return arr.map((element) => element ** 2);
};

// 함수 호출
console.log(squareArray([3, 6, 15, 20]));

// 문제 26: 두 문자열을 합친 후, 그 길이를 반환하는 함수 표현식을 작성하세요. (Hint: String.prototype.lengtn)
const combineAndLength = function(str1, str2) {
    return (str1 + str2).length;
};

// 함수 호출
console.log(combineAndLength("1234", "5678"));

//문제 27: 배열에서 가장 큰 숫자를 찾는 함수 표현식을 작성하세요.
const findMaxInArray = function(arr) {
    return Math.max(...arr);
};

// 함수 호출
console.log(findMaxInArray([5, 10, 30]));

// 문제 28: 두 문자열을 입력받아 그 길이를 비교하고, 더 긴 문자열을 반환하는 화살표 함수를 작성하세요.
const getLongerString = (str1, str2) => {
    if (str1.length > str2.length) {
        return str1;
    } else {
        return str2;
    }
};

// 함수 호출
console.log(getLongerString("qwer","qwerasdf"));

// 문제 29: 숫자로 이루어진 배열을 입력받아, 배열의 모든 요소에 5를 더한 새로운 배열을 반환하는 화살표 함수를 작성하세요.
const addFiveToArray = (arr) => {
    return arr.map((element) => {
    return element + 5);
};

// 함수 호출
console.log(addFiveToArray([1,2,3,4,5]))

// 문제 30: 세 개의 숫자를 입력받아, 세 숫자의 합이 100 이상이면 "합격", 그렇지 않으면 "불합격"을 반환하는 화살표 함수를 작성하세요.

const checkSum = (a, b, c) => {
    const result = a + b + c;

    if (result >= 100) {
        console.log("합격")
    } else {
        console.log("불합격");
    }
};

// 함수 호출
checkSum(35,40,35);
checkSum(25,30,35);