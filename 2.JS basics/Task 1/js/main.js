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
task6button.onmouseover = function () {
    task6div.style.opacity = '1';
};
task6button.onmouseout = function () {
    task6div.style.opacity = '0';
};

/*TASK 7*/
let task7div = document.querySelector(`#task7_div`);
let task7input = document.querySelector(`#task7_input`);

task7input.onmouseover = function () {
    task7div.style.opacity = `1`;
};

task7input.addEventListener("input", function () {
    task7div.style.opacity = `0`;
});

/*TASK 8*/
let task8input = document.querySelector(`#task8_input`);
let task8button = document.querySelector(`#task8_button`);
let task8Image = document.querySelector(`#task8_image`);

task8button.addEventListener("click", function () {
    task8Image.src =
        "https://itvdn.blob.core.windows.net/specialities-covers/js-2334a083-e167-456a-a15e-d1920561b06a.png";
    const task8inputValue = task8input.value || null;
    if (task8inputValue === null) return;
    console.log(task8inputValue);
    task8Image.src = task8inputValue;
})

/*TASK 9*/
let task9textArea = document.querySelector(`#task9_textarea`);
let task9difForImages = document.querySelector(`#task9_div_for_picture`);
let task9button = document.querySelector(`#task9_button`);

task9button.addEventListener(`click`, function () {
    let textAreaValue = task9textArea.value;
    console.log(textAreaValue);
    let linkArray = textAreaValue.split(String.fromCharCode(10));

    for (let i = 0; i < linkArray.length; i++) {
        const node = document.createElement("img");
        node.src = linkArray[i];
        node.style.width = `auto`;
        node.style.height = `120px`;
        node.style.marginLeft = `20px`;
        task9difForImages.appendChild(node);
    }

});

/*TASK 10*/
let task10Paragraph = document.querySelector(`#task10_paragraph1`);
onmousemove = (e) => task10Paragraph.innerHTML = "X: " + e.x + ", Y:" + e.y;

let task10Paragraph2 = document.querySelector(`#task10_paragraph2`);
task10Paragraph2.innerHTML = "Browser language: " + (new Intl.DisplayNames(['en'], {type: 'language'}).of(navigator.language));


navigator.geolocation.getCurrentPosition(success);
let task10Paragraph3 = document.querySelector(`#task10_paragraph3`);

function success(pos) {
    const crd = pos.coords;
    task10Paragraph3.innerHTML = "Ш: " + crd.latitude + ", Д: " + crd.longitude;
}

/*TASK 13*/
let task13Local = document.querySelector(`#task13_localstorage`);
task13Local.addEventListener("input", ale);

function ale() {
    window.localStorage.setItem("local_storage", JSON.stringify(task13Local.value));
}

/*Cookies*/
let task13Cookies = document.querySelector(`#task13_cookie`);
task13Cookies.addEventListener("input", aleCookies);

function aleCookies() {
    const d = new Date();
    d.setTime(d.getTime() + (900));
    document.cookie = `cookies_storage=${task13Cookies.value.split(`\n`).join(`\\`)};${d}`;
}

/*SessionStorage*/
let task13sessionStorage = document.querySelector(`#task13_sessionStorage`);
task13sessionStorage.addEventListener("input", aleSessionStorage);

function aleSessionStorage() {
    sessionStorage.setItem(`itemSessionS`, task13sessionStorage.value);
}

/*Invent onLoad to all blocks*/
function myLoad() {
    let a = window.localStorage.getItem(`local_storage`);
    task13Local.innerHTML = JSON.parse(a);
    let temp = document.cookie;
    temp = temp.split("=");
    task13Cookies.innerHTML = temp[1].split(`\\`).join('\n');
    //sessionStorage
    task13sessionStorage.innerHTML = sessionStorage.getItem(`itemSessionS`);
}

window.addEventListener("load", myLoad);

/*TASK 14*/
window.onscroll = function () {
    let currentScreenHeight = window.scrollY + window.innerHeight;
    let pageHeight = document.body.scrollHeight;
    let sensitive = 50;
    if (pageHeight - sensitive < currentScreenHeight) {
        document.querySelector(`#task14_a_button`).style.opacity = `1`;
    }

};

/*TASK 15 block in block*/
let task15bigDiv = document.querySelector(`#task15_big_div`);
let task15smallDiv = document.querySelector(`#task15_small_div`);

task15bigDiv.addEventListener("click", task15Function);

function task15Function(event) {
    let text = event.target.id;
    alert(`You click ${text}`)
}

/*TASK 16*/
let task16button = document.querySelector(`#task16button`);
let task16divAlert = document.querySelector(`#task16divAlert`);
task16button.addEventListener(`click`, divAlertPositionTask16);

function divAlertPositionTask16() {
    console.log(window.scrollY + `px` + window.innerHeight)
    task16divAlert.style = `display:flex;position=absolute`;
    task16divAlert.style.top = window.scrollY + (window.innerHeight - task16divAlert.offsetHeight) / 2 + `px`;
    task16divAlert.style.left = (window.innerWidth - task16divAlert.offsetWidth) / 2 + `px`;
    task16divAlert.addEventListener(`click`, () => {
        task16divAlert.style.display = `none`;
        window.onscroll = function () {
            window.scrollTo();
        };
    });
    let x=window.scrollX;
    let y=window.scrollY;
    window.onscroll = function () {

        window.scrollTo(x, y);
    };
}
/*TASK 18*/

/*From tutorial https://foolishdeveloper.com/drag-and-drop-file-upload-avascript/*/
let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");
let container = document.querySelector(".container");
let error = document.getElementById("error");
let imageDisplay = document.getElementById("image-display");

const fileHandler = (file, name, type) => {
    if (type.split("/")[0] !== "image") {
        //File Type Error
        error.innerText = "Please upload an image file";
        return false;
    }
    error.innerText = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        //image and file name
        let imageContainer = document.createElement("figure");
        let img = document.createElement("img");
        img.src = reader.result;
        imageContainer.appendChild(img);
        imageContainer.innerHTML += `<figcaption>${name}</figcaption>`;
        imageDisplay.appendChild(imageContainer);
    };
};
uploadButton.addEventListener("change", () => {
    imageDisplay.innerHTML = "";
    Array.from(uploadButton.files).forEach((file) => {
        fileHandler(file, file.name, file.type);
    });
});
container.addEventListener(
    "dragenter",
    (e) => {
        e.preventDefault();
        e.stopPropagation();
        container.classList.add("active");
    },
    false
);
container.addEventListener(
    "dragleave",
    (e) => {
        e.preventDefault();
        e.stopPropagation();
        container.classList.remove("active");
    },
    false
);
container.addEventListener(
    "dragover",
    (e) => {
        e.preventDefault();
        e.stopPropagation();
        container.classList.add("active");
    },
    false
);
container.addEventListener(
    "drop",
    (e) => {
        e.preventDefault();
        e.stopPropagation();
        container.classList.remove("active");
        let draggedData = e.dataTransfer;
        let files = draggedData.files;
        imageDisplay.innerHTML = "";
        Array.from(files).forEach((file) => {
            fileHandler(file, file.name, file.type);
        });
    },
    false
);

window.onload = () => {
    error.innerText = "";
};
