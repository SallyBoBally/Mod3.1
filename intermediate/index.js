//1.
function ucFirstLetters(str){
    return strn.split(' ').map(word => word.charAt(0)).toUpperCase() + word.slice(1).join(' ');
}
console.log(ucFirstLetters("los angeles") )
console.log(ucFirstLetters("san diego") ) 

//2.
function truncate(str, max) {
    return str.length > max ? str.slice (0, max - 3) + '...' : str;
}
console.log(truncate('This text will be truncated if it is too long', 25))

//3.
const animals = ['Tiger', 'Giraffe']
console.log(animals)
//a.
animals.push('Lion', 'Bear')
console.log(animals)
//b. add two  new values to the beginning
//c.
animals.sort();
console.log(animals);
//d.
function replaceMiddleAnimal(newValue) {
    const middleIndex = Math.floor(animals.length / 2);
    animals[middleIndex] = newValue;
}
replaceMiddleAnimal('Elephant');
console.log(animals)
//e.
function findMatchingAnimals(beingsWith) {
    return animals.filter(animal => animal.toLowerCase().startsWith(beingsWith.toLowerCase()));
}
console.log(findMatchingAnimals('T'))

//4.
function camelCase(cssProp) {
    return cssProp.split('-').map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
}
console.log(camelCase('margin-left'))
console.log(camelCase('background-image'))
console.log(camelCase('display'))

//5. 
//a. returns the string not the number
//b.
function currencyAddition(float1, float2) {
    return Math.round((float1 + float2) * 100) / 100;
}
console.log(0,3 === currencyAddition(0.1, 0.2));
//c.
function currencyOperation(float1, float2, operation) {
    switch (operation) {
        case '+':
            return Math.round ((float1 + float2) * 100) / 100;
        case '-':
            return Math.round((float - float2) * 100) / 100;
        case '*':
            return Math.round((float1 * float2) * 100) / 100;
        case '/':
            return Math.round((float1 / float2) * 100) / 100;
    }
}
console.log(0.3 === currencyOperations(0.1, 0.2, '+'));
//d.
function currencyOperationExtended(float1, float2, operation, numDecimals = 2) {
    const factor = Math.pow(10, numDecimals);
    let result;
    switch (operation) {
        case '+':
            result = (float1 * factor + float2 * factor) / factor;
            break;
        case '-':
            result = (float1 * factor - float2 * factor) / factor;
            break;
        case '*':
            result = (float1 * factor * float2 * factor) / factor;
            break;
        case '/':
            result = (float1 * factor / float2 * factor) / factor;
            break;
        default:
                throw new Error ('Invalid operation');
    }
    return Math.round(result * factor) / factor;
}
console.log(currencyOperationExtended(0.1, 0.2, '+', 3));

//6.
function unique(duplicatesArry) {
    return [...new Set(duplicatesArry)];
}
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

console.log(unique(colours))
console.log(unique(testScores))

//7.
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];
//a.
function getBookTitle(bookId) {
    const book = books.find(book => book.id === bookId);
    return book ? book.title : 'Book not found';
}
console.log(getBookTitle(3));
//b.
function getOldBooks() {
    return books.filter(book => book.year < 1950);
}
console.log(getOldBooks());
//c.
function addGenre() {
    return books.map(book => ({...book, genre: 'classic '}));
}
console.log(addGenre());
//d.
function getTitles(authorInitial) {
    return books
        .filter(book => book.author.startsWith(authorInitial))
        .map(book => book.title);
}
console.log(getTitles('F'));
//e.
function latestBook() {
    let latest = books[0];
    books.forEach(book => {
        if (book.year > latest.year) {
            latest = book;
        }
    });
    return latest;
}
console.log(latestBook());

//8.
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
//a.
const phoneBookDEF = new Map();
//b.
phoneBookDEF.set('Dan', '0123456789');
phoneBookDEF.set('Erica', '1234567890');
phoneBookDEF.set('Frank', '2345678901');
//c.
phoneBookABC.set('Caroline', '3456789012');
console.log(phoneBookABC.get('Caroline'));
//d.
function printPhoneBook(contacts) {
    contacts.forEach((number, name) => {
        console.log('${name}: ${number}');
    });
}
printPhoneBook(phoneBookABC);
//e.
const combinedPhoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
//f.
combinedPhoneBook.forEach((number, name) => {
    console.log('${name}: ${number}');
});

//9.
