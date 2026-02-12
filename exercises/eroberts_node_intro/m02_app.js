const $messages = require('./m02_messages');
const $parag = require('./m02_func');
var $states = 1;
$parag('This is a test sentence. Short and sweet. Mamma mia!');

let i=0;
while (i <= 1) {
    $parag($messages[i]);
    $states++;
    i++;
};

const $rating = ($states < 2) ? 'There are lot of statements here.' : 'This is a farly short statement.';
console.log($rating);