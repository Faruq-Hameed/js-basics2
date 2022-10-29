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

// function returnValue(array, key){
//   array.forEach(key => {}

//   }
// )

function returnKeyInArray(array, key){
  
    const returnedArray=  array.map(object => object[key])
    return returnedArray;
}

// console.log(returnKeyInArray (stores, 'name'))



const listOfLetters = ["a","a","b","c","A"];

function occurencesOfLetters(arrayOfLetters, letter){
  const resultFromArrayOfLetters = arrayOfLetters.filter(element => element.toLowerCase() === letter.toLowerCase());
  return resultFromArrayOfLetters.length
}

// console.log(occurencesOfLetters(listOfLetters, 'C'));

const arrayOfLetters = 'awesome'
// console.log(arrayOfLetters[0])
// const stringArray= arrayOfLetters.splice(1,arrayOfLetters.length - 1)
// const result = arrayOfLetters.slice(2,5)
const arrayOfLetters2 = ['awesome','example','of','forEach']

function printFirstAndLast (arrayOfLetters) {
  const result = arrayOfLetters.map(stringArray =>{
    // stringArray.splice(1,stringArray.length - 1)
    // console.log (result)
  })
}

printFirstAndLast (arrayOfLetters2)
const result2 = arrayOfLetters2.map((element, index)=>{

})
// console.log(result2)

// console.log(printFirstAndLast(listOfLetters, 'a'))
 const arrayOfNumbers = [1, 2, 3, 5]

function valTimesIndex(array){
const result = array.map((element, index)=> element * index);
console.log(result)
}
// valTimesIndex(arrayOfNumbers)


const key = 'hobbies'
const value = 'eating'
// faruq.key = value

// console.log(faruq)
 const person = [{name:'Joshua'},{name:'Mark'},{name:'Arthur'}]
const anotherP = [{name:'Joshua'}]



function addKeyAndValue2(array, key, value) {
 for (element of array) {
  element[key] = value;
 }
 console.log(array )
 
}



addKeyAndValue2(stores, "isInstructor", true);
// const result = faruq.map(element => element[key] = value)


// addKeyAndValue(person, 'bestfriend', 'kenny')
// let returnKeyArray = stores.map((store, name) => {
//     return store
// })


//  console.log(returnKeyInArray (stores))

// function ownersNames(stores, names){
//     for (name)
// }