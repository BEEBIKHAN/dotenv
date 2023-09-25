
require('dotenv').config();

const name = process.env.MY_NAME || 'John Doe';
const city = process.env.MY_CITY || 'City Name';
const language = process.env.MY_LANGUAGE || 'JavaScript';

console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);
