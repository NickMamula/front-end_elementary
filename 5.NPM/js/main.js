let btnMinus = document.querySelector(`#button_minus`);
let btnPlus = document.querySelector(`#button_plus`);
let btnStart = document.querySelector(`.button_start`);
let digit = document.querySelector(`#digit`);
let tip = document.querySelector(`h2`);
const pause = 1000;

btnMinus.addEventListener(`click`, () => {
    let count = digit.innerHTML;
    if (count > 1) {
        --count;
        digit.innerHTML = count;
    }
})
btnPlus.addEventListener(`click`, () => {
    let count = digit.innerHTML;
    ++count;
    digit.innerHTML = count;
})

btnStart.addEventListener(`click`, () => {
    console.log(`Старт новий таймер ${moment()}`);

    let timer = digit.innerHTML * 60;
    tip.innerHTML=`Залишилося часу`;

    [...document.querySelectorAll(`button`)].map(value => {
        value.style.display= `none`;
    });
    let tick = setInterval(function () {
        timer -= 1;
        digit.innerHTML=`${Math.floor(timer / 60)}  :  ${timer%60}`;
        if (timer < 1) {
            clearInterval(tick);
            console.log(`warning!!!`);
            tip.innerHTML=`Вкажіть час в хвилинах`;
            [...document.querySelectorAll(`button`)].map(value => {
                value.style.display= `flex`;
            });
            digit.innerHTML=`1`;
        }
    }, pause);
})




