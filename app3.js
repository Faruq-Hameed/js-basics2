
///////////// Exercises 1 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const address = {
    street: 'Nurudeen street',
    city: 'Faruq City',
    zipCode: '1234'
}

function showAddress(address) {
    for (let key of Object.keys(address))
    console.log(key+': ', address[key])
}
// showAddress(address)

// ///////////////////Exercises 2///////////////////////////////////////////////////////// //////////////////////////////////////

function createAddress(address){
    return address
}

const addressNew = createAddress(address)// using factory function
// console.log(addressNew);
// console.log(addressNew.city)



function CreateAddress(address){
    this.address = address;
    return this.address
}


const newAddress = new CreateAddress(address) // using constructor function


//////////////////////////Exercises 3///////////////////////////////////////////////    ////////////////////////////////// ///////////////////////////////

const address1 = new CreateAddress(address);
const address2 = new CreateAddress(address);

function areEqual(a,b) {
        if (a === b) console.log(true); else console.log(false);
}

// areEqual(address1, address2);


function areSame(a, b) {
    if (a === address && b === address1) console.log(true); else console.log('false');
}
// areSame(address1, address2);

/////////////////////////Exercises 4///////////////////////////////////////////////////////////////////////////////////////////////////////

const blogPost = {
    title: 'Nurudeen',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    author: 'Duece',
    views: 25,
    comments: {
        comment1: {
            author: 'Nurudeen',
            body: 'Lorem ipsum dolor sit amet consectetur adip',
            isLive: true, 
        },

        comment2: {
            author: 'Faruq',
            body: 'Lorem ipsum dolor sit amet consectetur adip',
            isLive: true, 
        },
        comment3: {
            author: 'Deuce',
            body: 'Lorem ipsum dolor sit amet consectetur adip',
            isLive: false, 
        },

    }
}


// console.log(blogPost.comments.comment3.isLive)
//////////////////////////Exercise 5//////////////////////////////////////////////////////////////////////////////////////////////  

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push('Go'); //(1)//

programming.difficulty = 7; //(2)//

delete programming.jokes; //(3)//

programming.isFun = true //(4)//

for (language of programming.languages) console.log(language ); //(5)//

for (let key of Object.keys(programming)) console.log(key); //(6)//

for (let key of Object.keys(programming)) console.log(programming[key]); //(7)//

   
// console.log(programming);