// 1.
console.log("" + 1 + 0); //10
console.log("" - 1 + 0); //-1
console.log(true + false); //1
console.log(!true); //false
console.log(6 / "3"); //2
console.log("2" * "3"); //6
console.log(4 + 5 + "px"); //"9px"
console.log("$" + 4 + 5); //:"$45"
console.log("4" - 2); //2
console.log("4px" - 2); //NaN
console.log(" -9 " + 5); //"-9 5"
console.log(" -9 " - 5); //-14
console.log(null + 1); //1
console.log(undefined + 1); //NaN
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(" \t \n" - 2); //-2

// 2.
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four // "34" convert it to the number to get the expected value of 7
let multiplication = three * four // 12
let division = three / four //0.75
let subtraction = three - four //-1
let lessThan1 = three < four // true
let lessThan2 = thirty < four // false

// 3.
if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')

// 4.
let a = 2, b = 3;
let result = `${a} + ${b} is `;

if (a + b < 10) {
    result += 'less than 10';
} else {
    result += 'greater than 10';
}

// 5.
// a.
const getGreeting = function(name) {
    return 'Hello' + name + '!';
}
// b.
const getGreeting = (name) => {
    return 'Hello' + name + '!';
}

// 6. 
const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    lastName: 'Lacey'
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
    return 'Nice to meet you.';
    }
    }
    inigo.greeting(westley)
    inigo.greeting(rugen)

// 7. 
const basketballGame = {
    score: 0,
    freeThrow() {
        this.score++;
},
    basket() {
    this.score += 2;
},
    threePointer() {
    this.score += 3;
},
    halfTime() {
    console.log('Halftime score is '+this.score);
    }
}

// 8.
// a.
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}



// b.
const las vegas = {
    name: 'las vegas',
    abreviation: 'lv'
    language: 
}

// 9.
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = teamSports;

moreSports.push('Basketball');
moreSports.unshift('Soccer');

let dog1 = 'Bingo';
let dog2 = dog1;

dog2 ='Rex';

let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = cat1;

cat2.name = 'Whiskers';

console.log(teamSports);
console.log(dog1);
console.log(cat1);

let moreSports = [...teamSports];
moreSports.push('Basketball');
moreSports.unshift('Soccer');

let cat2 = {...cat1 };
cat2.name = 'Whiskers';