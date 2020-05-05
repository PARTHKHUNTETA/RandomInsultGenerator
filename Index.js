// assign and array with four string elements to the variable 'randomBodyParts'
let randomBodyParts = ['Head', 'Arms', 'Legs', 'Feet', 'Toes', 'Hips'];
// assign and array with four string elements to the variable 'randomAdjectives'
let randomAdjectives = ['Smelly', 'Boring', 'Stupid', 'Lazy'];
// assign and array with four string elements to the variable 'randomWordds'
let randomWords = ['Fly', 'Marmot', 'Stick', 'Dog', 'Rat'];

// assign and array with four string elements to the variable 'randomWordds'
let randomNames = ['Joahn', 'Alex', 'Rishi']

//Choose a random item from 'randomBodyParts' array and assign to 'randomBodyPart'
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 6)];

//Choose a random item from 'randomAdjectives' array and assign to 'randomAdjective'
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];

//Choose a random item from 'randomWords' array and assign to 'randomWord'
let randomWord = randomWords[Math.floor(Math.random() * 5)];

//Choose a random item from 'randomNames' array and assign to 'randomNames'
let randomName = randomNames[Math.floor(Math.random() * 3)];

console.log(`${randomName} your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}`);