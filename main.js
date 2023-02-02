
// when run this app in mobile is return true
const isMobile = localStorage.mobile || window.navigator.maxTouchPoints > 1;

//use cssRoot.style.setProperty("key", "value");
const cssRoot = document.querySelector(':root');

if (isMobile) {
    cssRoot.style.setProperty("--cursor", "auto");
}
const scrollList = document.getElementById("scrol-list");
const icons = document.querySelectorAll(".icon");
const iTags = document.querySelectorAll(".sbi");
const iconSelectorWindow = document.getElementById("icon-selector-window");
const contentId = document.getElementById("content-id");
const orignalNameId = document.getElementById("orignal-name-id");
const iconId = document.getElementById("icon-id");
const textClassName = document.getElementById("text-class-name");
const closeButton = document.getElementById("close-button");
const copyButton = document.getElementById("copy-button");
const copyText = document.getElementById("copy-text");
const copyStatus = document.getElementById("copy-status");

const searchInput = document.getElementById("search-input");
const deleteSearch = document.getElementById("delete-search");
const numberInput = document.getElementById("number-input");

const useInfoBtn = document.getElementById("use-info-btn");
const useInfo = document.getElementById("use-info");
const footerClose = document.getElementById("footer-close");


let fontSize = 32;
let timeCount = Date.now();
let timeOutId;
let searchValue;
const delay = 1000;

// delay input run function
function delayCall(fun) {
    let newTime = Date.now();

    if (timeCount < (newTime - delay)) {
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
            fun();
        }, delay);
    }

    timeCount = newTime;
}

icons.forEach((icon, i) => {
    icon.addEventListener("click", () => {
        let codeName = `sbi-${iconData[i].name.split(" ").join("-")}`;

        iconSelectorWindow.classList.add("active");
        iconId.classList = [];
        iconId.classList.add(codeName);
        contentId.innerHTML = iconData[i].content;
        orignalNameId.innerHTML = iconData[i].name;
        textClassName.innerHTML = `"${codeName}"`;
    })
})

closeButton.addEventListener("click", () => {
    iconSelectorWindow.classList.remove("active");
})

numberInput.addEventListener("keyup", (e) => {
    let val = parseInt(e.target.value);
    if (val < 1) e.target.value = 1;
    else if (val > 200) e.target.value = 200;

    fontSize = e.target.value;
    delayCall(setCssFontSize);
})

numberInput.addEventListener("focusout", (e) => {
    let val = parseInt(e.target.value);
    if (isNaN(val)) {
        e.target.value = 32;
        fontSize = 32;
        delayCall(setCssFontSize);
    }
})

searchInput.addEventListener("keyup", (e) => {
    let val = e.target.value;
    searchValue = val;
    if (val.length < 1 || !val) {
        icons.forEach((_, i) => {
            icons[i].classList.remove("hide");
        })
        return;
    }
    delayCall(searchIconInData);
});

deleteSearch.addEventListener("click", (e) => {
    searchInput.value = "";
    searchInput.select();
    searchValue = "";
    delayCall(searchIconInData);
})

copyButton.addEventListener("click", (e) => {
    selectText(copyText);
    copyStatus.classList.add("active");
    setTimeout(() => { copyStatus.classList.remove("active") }, 1000);
})

function selectText(containerid) {
    let range = document.createRange();
    range.selectNode(containerid);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}

function searchIconInData() {
    iconData.forEach((e, i) => {
        if (e.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
            icons[i].classList.remove("hide");
        } else {
            icons[i].classList.add("hide");
        }
    })
}

function setCssFontSize() {
    cssRoot.style.setProperty("--font-size", `${fontSize}px`);
}

useInfoBtn.addEventListener("click", () => {
    useInfo.classList.toggle("active");
})

footerClose.addEventListener("click", () => {
    useInfo.classList.remove("active");
})