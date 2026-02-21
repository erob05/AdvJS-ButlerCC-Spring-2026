const _ = require('lodash');

var $array01 = ['Rose', 'Tulip', 'Orchid', 'Hyacinth', 'Lily', 'Daffoldil', 'Poppy'];
var $array02 = ['Poppy', 'Sunflower', 'Hyacinth', 'Bellflower', 'Cactus'];

console.log(_.intersection($array01,$array02));