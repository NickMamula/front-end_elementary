"use strict";
// 1.
function getFirstWord(a) {
    return a.split(/ +/)[0].length;
}
getFirstWord("Late");
function getUserNamings(a) {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}
getUserNamings({ name: "Nick", surname: "Tiktak" });
function getAllProductNames(a) {
    var _a;
    return ((_a = a === null || a === void 0 ? void 0 : a.products) === null || _a === void 0 ? void 0 : _a.map(prod => prod === null || prod === void 0 ? void 0 : prod.name)) || [];
}
getAllProductNames({ products: [{ name: `avocado` }, { name: `orange` }] });
// 4.1
// easy way is using 'as' keyword
// hard way is ?...
function hey(a) {
    return "hey! i'm " + a.name();
}
hey({ name: () => "roman", cuteness: 100 });
hey({ name: () => "vasyl", coolness: 100 });
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
}
function sumOfProperties(ob) {
    let sum = 0;
    Object.keys(ob).map((key) => {
        var _a;
        //console.log(index + ` type:` + typeof ob[key] + ` value:` + ob[key]?.cvalue);
        let value = (_a = ob[key]) === null || _a === void 0 ? void 0 : _a.cvalue;
        if (typeof value === undefined)
            sum += 2021;
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
    });
    return sum;
}
let testOne = sumOfProperties({
    hello: { cvalue: "4" },
    world: {
        cvalue: { yay: { cvalue: "2" } }
    },
    bad: { cvalue: undefined },
    good: { cvalue: 5 },
    bike: {
        cvalue: `ytu54567`
    }
});
console.log(testOne);
console.log(testOne === 11 ? `Test 1 function sumOfProperties() is correct answer:11` : `Test 1 is not correct`);
function summ(a) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof elem === undefined)
            return 2021;
        if (typeof (elem === null || elem === void 0 ? void 0 : elem.cvalue) === 'string')
            return +elem.cvalue || '2021';
        if (typeof (elem === null || elem === void 0 ? void 0 : elem.cvalue) === `object`)
            return summ(elem.cvalue);
        return elem === null || elem === void 0 ? void 0 : elem.cvalue;
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum = sum + Number(x[i]);
    }
    return summ;
}
console.log(testOne === 11 ? `Test 1 function() summ is correct answer:11` : `Test 1 is not correct`);
