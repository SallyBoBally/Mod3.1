//1.
//a.
function makeCounter () {
    let currentCount = 0;
    return function(){
        currentCount++;
        console.log(currentCount);
        return currentCount;
    };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

counter1();
counter1();
counter2();
counter2();

//b.
function makeCounter(startFrom = 0) {
    let currentCount = startFrom;
    return function() {
        currentCount++;
        console.log(currentCount);
        return currentCount;
    };
}

//c.
function makeCounter(startFrom = 0, incrementBy =1) {
    let currentCount = startFrom;
    return function () {
        currentCount += incrementBy;
        console.log(currentCount);
        return currentCount;
    };
}

//2.
function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

//a.
//#4, #3, #2, #1

//b.
const delayMsg = (msg) => {
    console.log('delayed msg')
}

//c.
setTimeout(delayMsg, 15000, '#5: Delay 15 seconds');

//d.
const timeoutId = setTimeout(delayMsg, 15000, '#5: Delay 15 seconds');
clearTimeout(timeoutId);

//3.
function printMe() {
    console.log('printing debounced message')
    }
    printMe = debounce(printMe); //create this debounce function for a)
    //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
    setTimeout( printMe, 100);
    setTimeout( printMe, 200);
    setTimeout( printMe, 300);

//a.
function debounce(func) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
        }, 1000);
    };
}

//b.
function debounce(func, ms = 1000) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
        }, ms);
    };
}

//c.
function debounce(func, ms = 1000) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout (() => {
            func(...args);
        }, ms);
    };
}

function printMe(msg) {
    console.log('argument msg')
}

printMe = debounce(printMe, 1000);

//4.
//a.
function printFibonacci() {
    let a = 0, b = 1;
    console.log(a);
    const interval = setInterval(() => {
        console.log(b);
        [a, b] = [b, a + b];
    }, 1000);
}
printFibonacci();

//b.
function printFibonacciTimeouts() {
    let a = 0, b = 1;
    console.log(a);
    function next() {
      console.log(b);
      [a, b] = [b, a + b];
      setTimeout(next, 1000);
    }
    setTimeout(next, 1000);
}
printFibonacciTimeouts();

//c.
function printFibonacci(limit) {
    let a = 0, b = 1, count = 1;
    console.log(a);
    function next() {
      if (count >= limit) {
        return;
      }
      console.log(b);
      [a, b] = [b, a + b];
      count++;
      setTimeout(next, 1000);
    }
    setTimeout(next, 1000);
}

//5.
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
car.description(); //works
setTimeout(car.description, 200); //fails

//

//a.
setTimeout(function() {
    car.description();
  }, 200);

//b.
let carClone = { ...car, year: 2022 };
carClone.description();

//c.

//d.
setTimeout(car.description.bind(car), 200);

//e.
let carClone2 = { ...car, model: 'Cayenne' };
carClone2.description();

setTimeout(car.description.bind(car), 200); 

//6.
//a.
Function.prototype.delay = function(ms) {
    let func = this;
    return function(...args) {
      setTimeout(() => func(...args), ms);
    };
};

function multiply(a, b) {
    console.log(a * b);
}
  
multiply.delay(500)(5, 5);

//b.
Function.prototype.delay = function(ms) {
    let func = this;
    return function(...args) {
      setTimeout(() => func.apply(this, args), ms);
    };
};

function add(a, b, c, d) {
console.log(a + b + c + d);
}

add.delay(1000)(1, 2, 3, 4);

//c.
function multiply(a, b, c, d) {
    console.log(a * b * c * d);
}

multiply.delay(500)(2, 3, 4, 5);

//7.
class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }

    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}
const myClock = new DigitalClock('my clock:')
myClock.start()

//a.
class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
      super(prefix);
      this.precision = precision;
    }
  
    start() {
      this.display();
      this.timer = setInterval(() => this.display(), this.precision);
    }
}

const myPrecisionClock = new PrecisionClock('Precision clock:', 500);
myPrecisionClock.start();

//b.
class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
      super(prefix);
      this.wakeupTime = wakeupTime;
    }
  
    start() {
      this.display();
      this.timer = setInterval(() => {
        this.display();
        let date = new Date();
        let currentTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
        if (currentTime === this.wakeupTime) {
          console.log('Wake Up');
          this.stop();
        }
      }, 1000);
    }
}

const myAlarmClock = new AlarmClock('Alarm clock:', '07:00');
myAlarmClock.start();

//8.
function orderItems(itemName) {
    return `Order placed for: ${itemName}`;
}
// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);
console.log(validatedOrderItem("Apple Watch")); // should run the function
console.log(validatedOrderItem(123)); // should throw an error

//a. 
function validateStringArg(fn) {
    return function(...args) {
      for (const arg of args) {
        if (typeof arg !== 'string') {
          throw new Error(`Invalid argument: ${arg} is not a string.`);
        }
      }
      return fn(...args);
    };
}

function orderItems(itemName) {
    return `Order placed for: ${itemName}`;
}

const validatedOrderItem = validateStringArg(orderItems);

try {
    console.log(validatedOrderItem("Apple Watch"));
    console.log(validatedOrderItem(123));
} catch (error) {
    console.error(error.message);
}

//b.
function orderItems(...itemNames) {
    return `Order placed for: ${itemNames.join(', ')}`;
}

const validatedOrderItem = validateStringArg(orderItems);

try {
    console.log(validatedOrderItem("Apple Watch", "iPhone"));
    console.log(validatedOrderItem("MacBook", 123));
} catch (error) {
    console.error(error.message);
}

//9.
