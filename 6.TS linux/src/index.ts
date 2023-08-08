// 1.
function getFirstWord(a: string) {
    return a.split(/ +/)[0].length;
}

getFirstWord("Late");

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

getUserNamings({name: "Nick", surname: "Tiktak"})


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

getAllProductNames({products: [{name: `avocado`}, {name: `orange`}]})


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




/*TASK 3*/
class BigObject {
    [a: string]: { cvalue: number | string | undefined | BigObject } | undefined;
}
function sumOfProperties(ob: BigObject) {
    let sum = 0;
    Object.keys(ob).map((key) => {
        //console.log(index + ` type:` + typeof ob[key] + ` value:` + ob[key]?.cvalue);
        let value = ob[key]?.cvalue;
        if(typeof value ===undefined) sum+=2021;
        if (typeof value === `number`) {
            sum += value;
            return;
        }
        if (typeof value === `string` && !isNaN(Number(value))) {
            sum = sum + Number(value);
            return;
        }
        if (typeof value === `object`) {
            sum = sum + sumOfProperties(value);
        }
    })
    return sum;
}

let testOne = sumOfProperties({
        hello: {cvalue: "4"},
        world: {
            cvalue:
                {yay: {cvalue: "2"}}
        },
        bad: {cvalue: undefined},
        good: {cvalue: 5},
        bike: {
            cvalue: `ytu54567`
        }

    })
;
console.log(testOne === 11 ? `Test 1 function sumOfProperties() is correct answer:11` : `Test 1 is not correct`);
function summ(a: BigObject) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof elem === undefined) return 2021;
        if (typeof elem?.cvalue === 'string') return + elem.cvalue || '2021';
        if (typeof elem?.cvalue === `object`) return summ(elem.cvalue);
        return elem?.cvalue;
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum =sum +Number(x[i]);
    }
    return summ;
}
console.log(testOne === 11 ? `Test 1 function() summ is correct answer:11` : `Test 1 is not correct`);

