const $mess1 = 'These are words. Some more words.';
const $mess2 = 'This is a phrase. A very short sentence. A slightly kind of maybe long sentence.';
const $messages = [$mess1, $mess2];
var $states = 1;
const $parag = ($part) => {
console.log(`This is a paragraph made of different stuff. ${$part}`);
};

// $parag('This is a test sentence. Short and sweet. Does it work?');
// $parag($mess1);
let i=0;
while (i <= 1) {
    $parag($messages[i]);
    $states++;
    i++;
};

const $rating = ($states < 2) ? 'There are lot of statements here.' : 'This is a farly short statement.';

console.log($rating);