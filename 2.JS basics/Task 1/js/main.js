/*TASK 1*/
function myFunction() {
    document.getElementById("task1_div").style.display = "none";
    buttonNewMargiLeft();
}

function myFunction2() {
    document.getElementById("task1_div").remove();
    buttonNewMargiLeft();
}

function myFunction3() {
    document.getElementsByClassName('div_visible_class')[0].style.visibility = 'hidden';
    document.getElementById("task1_div").style.display = "none";
    buttonNewMargiLeft();
}

function buttonNewMargiLeft() {
    document.getElementById("task1_button_css").style.marginLeft = "145px";
}

/*TASK 2*/
let visibleDiv2 = true;

function task2Function() {
    if (visibleDiv2 === true) {
        document.getElementById('task2_div').style.opacity = "0";
        visibleDiv2 = false;
        return;
    }
    if (visibleDiv2 === false) {
        document.getElementById('task2_div').style.opacity = "1";
        visibleDiv2 = true;
    }

}

/*TASK 3*/
let visibleDiv3 = true;

function task3Function() {
    if (visibleDiv3 === true) {
        const fiveBlocks = document.querySelectorAll(`.task3_five_blocks`);
        fiveBlocks.forEach(div => {
           div.style.opacity="0";
        });
        visibleDiv3 = false;
        return;
    }
    if (visibleDiv3 === false) {
        const fiveBlocks = document.querySelectorAll(`.task3_five_blocks`);
        fiveBlocks.forEach(div => {
            div.style.opacity="1";
        });        visibleDiv3 = true;
    }
}