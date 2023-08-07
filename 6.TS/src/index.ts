// 1.
function getFirstWord(a: string) {
    return a.split(/ +/)[0].length;
}


// 2.
interface User {
    name: string,
    surname: string
}

function getUserNamings(a: User) {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}


// 3.
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>

interface MyProd {
    products: [
        { name: string },
        { name: string }
    ]
}

function getAllProductNames(a: MyProd) {
    return a?.products?.map(prod => prod?.name) || [];
}


// 4.1

// easy way is using 'as' keyword
// hard way is ?...

function hey(a: { name: () => string, cuteness: number } | { name: () => string, coolness: number }) {
    return "hey! i'm " + a.name();
}

hey({name: () => "roman", cuteness: 100});
hey({name: () => "vasyl", coolness: 100});

/*
// 5.

// google for Record type
function stringEntries(a) {
    return Array.isArray(a) ? a : Object.keys(a)
}

// 6.
// ....can be hard, don't worry and SKIP if you do not know how to do it

async function world(a) {
    return "*".repeat(a)
}
const hello = async () => {
    return await world(10)
}
hello().then(r => console.log(r)).catch(e => console.log("fail"))*/


/*TASK 1*/
class BigObject {
    [a: string]: { cvalue: number | string | undefined | BigObject } | undefined;
}


function sumOfProperties(ob: BigObject) {
    let sum = 0;
    Object.keys(ob).map(key => {
        console.log(ob.key);
    })
    return sum;
}

sumOfProperties({
    hello: {cvalue: 1},
    world: {
        cvalue:
            {yay: {cvalue: "2"}}
    }
});