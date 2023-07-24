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
            div.style.opacity = "0";
        });
        visibleDiv3 = false;
        return;
    }
    if (visibleDiv3 === false) {
        const fiveBlocks = document.querySelectorAll(`.task3_five_blocks`);
        fiveBlocks.forEach(div => {
            div.style.opacity = "1";
        });
        visibleDiv3 = true;
    }
}

/*TASK 4*/

function task4Function() {

    const querySelector = document.getElementById("task4_input").value || null;
    if (querySelector === null) return;

    let opacity;
    try {
        opacity = document.querySelector(querySelector).style.opacity;

    } catch (x) {
        console.log(x.error);
        return;
    }

    if (opacity > 0) {
        document.querySelector(querySelector).style.opacity = "0";
    } else {
        document.querySelector(querySelector).style.opacity = "1";
    }
}

/*TASK 5*/
let a = function () {
    alert("Привіт");
    a = function task5NewFunction() {
        document.querySelector(`#task5_div`).style.opacity = "0";
    }
};

/*TASK 6*/
let task6button = document.querySelector(`#task6_button`);
let task6div = document.querySelector(`#task6_div`);
task6button.onmouseover = function() {
    task6div.style.opacity = '1';
};
task6button.onmouseout = function() {
    task6div.style.opacity = '0';
};

/*TASK 7*/
let task7div = document.querySelector(`#task7_div`);
let task7input = document.querySelector(`#task7_input`);

task7input.onmouseover = function (){
    task7div.style.opacity = `1`;
};

task7input.addEventListener("input", function (){
   task7div.style.opacity =`0`;
});

/*TASK 8*/
let task8input = document.querySelector(`#task8_input`);
let task8div = document.querySelector(`#task8_div`);
let task8button = document.querySelector(`#task8_button`);
let task8Image =document.querySelector(`#task8_image`);

task8button.addEventListener("click",function (){
    task8Image.src =
        "https://itvdn.blob.core.windows.net/specialities-covers/js-2334a083-e167-456a-a15e-d1920561b06a.png";
    const task8inputValue = task8input.value || null;
    if (task8inputValue === null) return;
    console.log(task8inputValue);
    task8Image.src =task8inputValue;
})

/*TASK 9*/
let task9textArea = document.querySelector(`#task9_textarea`);
let task9difForImages = document.querySelector(`#task9_div_for_picture`);
let task9button =document.querySelector(`#task9_button`);

task9button.addEventListener(`click`,function (){
   let textAreaValue = task9textArea.value;
    console.log(textAreaValue);
    // Create an "img" node:
    const node = document.createElement("img");
    node.src=textAreaValue;
    node.style.width=`auto`;
    node.style.height=`120px`;
    task9difForImages.appendChild(node);

});



