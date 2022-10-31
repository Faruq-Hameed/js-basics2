//People's bio-data
const faruq = { name: 'faruq', age: 27, degree: true, pg: false, married: false }
const sodiq = { name: 'sodiq', age: 28, degree: true, pg: true,married: true }
const mubarak = { name: 'mubarak', age:24, degree: false, pg: false,married: false}
const sulaimon = { name: 'sulaimon', age:30, degree: true, pg: false,married: true}
const stores = [
  {
    name: 'storeA',
    openHours: 10,
    closeHours: 15,
    city: 'CA',
    owner: sulaimon
  },
  {
    name: 'storeB',
    openHours: 09,
    closeHours: 17,
    city: 'FL',
    owner: faruq
  },
  {
    name: 'storeC',
    openHours: 14,
    closeHours: 20,
    city: 'SC',
    owner:sodiq
  },
  {
    name: 'storeD',
    openHours: 11,
    closeHours: 18,
    city: 'GA',
    owner:mubarak
  }
]

////////////////////////////////////////////////////////////////////////
// PART ONE OF ARRAYS
//////////////////////// Exercises 1////////////////////////////////////////////////////
function returnKeyInArray(array, key){
  
    const returnedArray=  array.map(object => object[key])
    return returnedArray;
}

// console.log(returnKeyInArray (stores, 'name'))

//////////////////////////Exercises 2//////////////////////////////////////////////  ///


const listOfLetters = ["a","a","b","c","A"];

function occurencesOfLetters(arrayOfLetters, letter) {
  const resultFromArrayOfLetters = arrayOfLetters.filter(element => element.toLowerCase() === letter.toLowerCase());
  return resultFromArrayOfLetters.length
}
// console.log(occurencesOfLetters(listOfLetters, 'C'));

///////////////////////////Exercises 3/////////////////////////////////////////////  ///

const array = ['awesome','example','of','forEach']

function printFirstAndLast (arrayOfLetters) {
  arrayOfLetters.map(string =>{
    result = (string.slice(0,1)+ string.slice(-1))
    console.log(result)
  })
}
// printFirstAndLast(array)

// console.log(printFirstAndLast(listOfLetters, 'a'))


///////////////////////////////Exercises 4////////////////////////////////////////////

 const arrayOfNumbers = [1, 2, 3, 5]

function valTimesIndex(array){
const result = array.map((element, index)=> element * index);
// console.log(result)
}
// valTimesIndex(arrayOfNumbers)



////////////////////////////// Exercises 5//////////////////////////////////////////  ///

function addKeyAndValue(array, key, value) {
 for (element of array) {
  element[key] = value;
 }
 return array
 
}

// console.log(addKeyAndValue(stores, "isInstructor", true));

////////////////////////////////////////////////////////////////
// PART ONE OF MORE ARRAYS
////////////////////////////////////////////////////////////////
let users = [
  {
    username: 'larry',
    email: 'larry@foo.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Perl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
      city: 'San Francisco',
      state: 'CA'
    }
  },
  {
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
      city: 'New York',
      state: 'NY'
    }
  },
  {
    username: 'sam',
    email: 'sam@test.com',
    yearsExperience: 8.2,
    favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
    favoriteEditor: 'Atom',
    hobbies: ['Golf', 'Cooking', 'Archery'],
    hometown: {
      city: 'Fargo',
      state: 'SD'
    }
  },
  {
    username: 'anne',
    email: 'anne@test.com',
    yearsExperience: 4,
    favoriteLanguages: ['C#', 'C++', 'F#'],
    favoriteEditor: 'Visual Studio Code',
    hobbies: ['Tennis', 'Biking', 'Archery'],
    hometown: {
      city: 'Albany',
      state: 'NY'
    }
  },
  {
    username: 'david',
    email: 'david@test.com',
    yearsExperience: 12.5,
    favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
    favoriteEditor: 'VS Code',
    hobbies: ['Volunteering', 'Biking', 'Coding'],
    hometown: {
      city: 'Los Angeles',
      state: 'CA'
    }
  }
];


function printEmails (){
  for (object of users){
    console.log(object.email);
  }
}
// printEmails()

////////////////////////////////Exercises 1////////////////////////////////////////
function printHobbies (){
   for (object of users)
    object
    .hobbies
    .map(element => console.log( element));
}


// printHobbies()
/////////////////////////////Exercises 2////////////////////////////////////////////////

 function findHometownByState(state ){

  const result =users.find(user => user.hometown.state === state);
  console.log (result)
}
// findHometownByState('CA' )

///////////////////////////////Exercises 3///////////////////////////////////////////////////////////

function allLanguages() {
  const languagesArray = users.map(user => user.favoriteLanguages)
  const arrayOfLanguages = []
  for (arrayElement of languagesArray) {

    for (element of arrayElement) {
      arrayOfLanguages.push(element)
    }
  }
  const finalArrayOfLanguages = []
  for (language of arrayOfLanguages) {
    if (!finalArrayOfLanguages.includes(language)) {
      finalArrayOfLanguages.push(language)
    };

  }
  console.log(finalArrayOfLanguages)
}

// allLanguages()

////////////////////////////Exercises 4/////////////////////////////////////////////////

function hasFavoriteEditor(editor){
  const result =users.some(user => user.favoriteEditor === editor);
  console.log (result);
}
// hasFavoriteEditor('VS Code')

/////////////////////////////////Exercises 5//////////////////////////////////////////////////////////

function findByUsername (username){
  const result = users.filter(element => element.username === username)
  console.log (result);
}
// findByUsername('david');

////////////////////////////////////////////////////////////////
// PART TWO OF MORE ARRAYS
////////////////////////////////////////////////////////////////
let word = 'incredible'
const vowelsArray = ['a', 'e', 'i', 'o', 'u']
function vowelCount (wordToCheck){
  const arrayOfWords = [...wordToCheck]
  const availableVowels = arrayOfWords.filter(vowel => {
    if (vowelsArray.includes(vowel)) return vowel;
  })
  console.log(availableVowels);
  const arrayOfObject = [];
  for (let i = 0; i < availableVowels.length; i++) {


  }
}
// vowelCount(word)
// let string ='book'
////////////////////////////////////////////////////////////////////////

function removeVowels (wordToCheck){
  const arrayOfWords = [...wordToCheck]
  const availableConsonants = arrayOfWords.filter(consonant => {
    if (!vowelsArray.includes(consonant)) return consonant;
  })
  console.log(availableConsonants);
}
// removeVowels (word)
// removeVowels('amazing')