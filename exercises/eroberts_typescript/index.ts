let sport = 'football';
// let id = 5;
let id:number;
id = 5;
let confirmed: string | boolean = 'yes';
confirmed = true;

type myAlias = string | number;

type itemObj = {
    title: string;
    serial: myAlias;
    inventory: number;
}

const itemA: itemObj = {
    title: 'Box',
    serial: 234,
    inventory: 4
};

const itemB: itemObj = {
    title: 'Bowl',
    serial: '2er45',
    inventory: 3
};

// console.log(itemB.serial);
function buy(cart: number, item: string) {
    let theMess: string;
    if (item == 'a' || item == 'A') {
        if (cart > itemA.inventory) {
            theMess = `You can't buy that many of the ${itemA.title}`;
        } else {
            theMess = `There are ${itemA.inventory-cart} of ${itemA.title}`;
        }
    } else {
        if (cart > itemB.inventory) {
            theMess = `You can't buy that many of the ${itemB.title}`;
        } else {
            theMess = `There are ${itemB.inventory-cart} of ${itemB.title}`;
        }
    }
    return theMess;
};
console.log(buy(2, 'B'));

let person = [false, 'John', 'Plumber'];
person[0] = true;
console.log(`${person[1]} is a ${person[2]}`);

console.log(id);

let origValue = {val01: 1, val02: 2};
let refPoint = origValue.val02;

if (origValue.val01 == refPoint) {
    console.log('They\'re equal.');
} else {
    console.log('Not even close.');
}