// when run this app in mobile is return true
const isMobile = localStorage.mobile || window.navigator.maxTouchPoints > 1;
//use cssRoot.style.setProperty("key", "value");
const cssRoot = document.querySelector(":root");

if (isMobile) {
   cssRoot.style.setProperty("--cursor", "auto");
}

/* ------ global variable ------ */
const MAX_PAGE_RENDER = 400;
const MAX_PAGE_BUTTON = 5;
const MAX_FONT = 200;
const MIN_FONT = 10;
const INPUT_DELAY = 500; // ms

let allResults = [];
let htmlIconStrings = "";
let currentPageIndex = 0;
let maxPagePossible = 0;
let fontSize = 32;
let colorOnly = false;
let targetValue = "";

/* ----- find elements from document ------ */
const icons = document.querySelectorAll(".icon");
const iconSelectorWindow = document.getElementById("icon-selector-window");
const contentId = document.getElementById("content-id");
const originalNameId = document.getElementById("original-name-id");
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

// delay input run function
function debounce(callback) {
   let timeoutId;
   return function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, INPUT_DELAY);
   };
}

function sizeInput() {
   let val = parseInt(numberInput.value);
   val = isNaN(val)
      ? 32
      : val < MIN_FONT
      ? MIN_FONT
      : val > MAX_FONT
      ? MAX_FONT
      : val;
   numberInput.value = fontSize = val;
   setCssFontSize();
}

icons.forEach((icon, i) => {
   icon.addEventListener("click", () => {
      let codeName = `sbi-${iconData[i].name.split(" ").join("-")}`;

      iconSelectorWindow.classList.add("active");
      iconId.classList = [];
      iconId.classList.add(codeName);
      contentId.innerHTML = iconData[i].content;
      originalNameId.innerHTML = iconData[i].name;
      textClassName.innerHTML = `"${codeName}"`;
   });
});

closeButton.addEventListener("click", (e) => {
   // if (e.target !== closeButton || e.target !== iconSelectorWindow) {
   iconSelectorWindow.classList.remove("active");
   // }
});

numberInput.addEventListener(
   "keyup",
   debounce(() => sizeInput())
);

numberInput.addEventListener(
   "focusout",
   debounce(() => sizeInput())
);

searchInput.addEventListener(
   "keyup",
   debounce(() => {
      let val = searchInput.value.toLowerCase();
      if (val !== 0 || val.length < 0) {
         targetValue = val;
      } else {
         targetValue = "";
      }
      searchIconAndDisplay();
   })
);

deleteSearch.addEventListener(
   "click",
   debounce(() => {
      searchInput.value = "";
      searchInput.select();
      targetValue = "";
      searchIconAndDisplay();
   })
);

copyButton.addEventListener("click", (e) => {
   selectText(copyText);
   copyStatus.classList.add("active");
   setTimeout(() => {
      copyStatus.classList.remove("active");
   }, 1000);
});

iconColorMod.addEventListener("click", () => {
   colorOnly = !colorOnly;
   iconColorMod.classList.toggle("active", colorOnly);
   searchIconAndDisplay();
});

function selectText(containerID) {
   let range = document.createRange();
   range.selectNode(containerID);
   window.getSelection().removeAllRanges(); // clear current selection
   window.getSelection().addRange(range); // to select text
   document.execCommand("copy");
   window.getSelection().removeAllRanges(); // to deselect
}

// get searching target and push into result push([data_index, keywords_find_location])
function getResults(data, target, isColor = false) {
   data.forEach(({ keywords }, i) => {
      const temp = keywords.indexOf(target);
      if (temp > -1) {
         allResults.push([i, temp, isColor]);
      }
   });
}

function setupIcons(iconName) {
   allHtmlIcons += `
   <div class="icon">
      <i class="sbi ${iconName.split(" ").join("-")}"></i>
      <p>${iconName}</p>
   </div>`;
}

const pagesElement = document.getElementById("pages");
// PAGES.forEach((page, i) => {
//    page.addEventListener("click", () => {
//       if (i === 0) {
//          currentPageIndex = Math.max(0, currentPageIndex - MAX_PAGE_BUTTON - 1);
//       } else if (i === PAGES.length - 1) {
//          currentPageIndex = Math.min(
//             maxPagePossible - 1,
//             currentPageIndex + MAX_PAGE_BUTTON
//          );
//       } else {
//          currentPageIndex += i;
//       }
//       makePages();
//    });
// });



// function makePages() {
//    PAGES.forEach(page => {
//       page.classList.remove("sbi-dots-three-horizontal");
//       page.innerHTML = "";
//       page.classList.add("active");
//    });
//    console.log(maxPagePossible, currentPageIndex);
//    if (
//       currentPageIndex > 0 &&
//       currentPageIndex + MAX_PAGE_BUTTON < maxPagePossible
//    ) {
//       PAGES[0].classList.add("sbi-dots-three-horizontal");
//       PAGES[1].innerHTML = currentPageIndex + 1;
//       PAGES[2].innerHTML = currentPageIndex + 2;
//       PAGES[3].innerHTML = currentPageIndex + 3;
//       PAGES[4].classList.add("sbi-dots-three-horizontal");
//    } else if (
//       currentPageIndex > 0 &&
//       currentPageIndex + MAX_PAGE_BUTTON === maxPagePossible
//    ) {
//       PAGES[0].classList.add("sbi-dots-three-horizontal");
//       PAGES[1].innerHTML = Math.min(currentPageIndex + 1, maxPagePossible);
//       PAGES[2].innerHTML = Math.min(currentPageIndex + 2, maxPagePossible);
//       PAGES[3].innerHTML = Math.min(currentPageIndex + 3, maxPagePossible);
//       PAGES[4].innerHTML = Math.min(currentPageIndex + 4, maxPagePossible);
//       console.log(currentPageIndex + 4, maxPagePossible);
//    } else if (maxPagePossible > MAX_PAGE_BUTTON && currentPageIndex === 0) {
//       PAGES[0].innerHTML = currentPageIndex + 1;
//       PAGES[1].innerHTML = currentPageIndex + 2;
//       PAGES[2].innerHTML = currentPageIndex + 3;
//       PAGES[3].innerHTML = currentPageIndex + 4;
//       PAGES[4].classList.add("sbi-dots-three-horizontal");
//    } else {
//       console.log(maxPagePossible);
//       for (let i = 0; i <= MAX_PAGE_BUTTON; i++) {
//          if (i < maxPagePossible) {
//             PAGES[i].innerHTML = currentPageIndex + i + 1;
//          } else {
//             PAGES[i].classList.remove("active");
//          }
//       }
//    }
// }

const pages = new Pages(MAX_PAGE_BUTTON, pagesElement, pageClickAction, pageClickAction);

function pageClickAction(current) {
   
}

function searchIconAndDisplay() {
   allResults = [];
   htmlIconStrings = "";

   if (targetValue !== "") {
      getResults(COLOR_ICONS, targetValue, true);
      if (!colorOnly) getResults(ICONS, targetValue);

      // sorting the result based on lowest keyword_find_index
      allResults.sort((a, b) => a[1] - b[1]);

      allResults.map(([i, _, isColor]) => {
         if (isColor) return COLOR_ICONS[i];
         else ICONS[i];
      });
   } else {
      if (colorOnly) allResults = [...COLOR_ICONS];
      else allResults = [...ICONS, ...COLOR_ICONS];
   }

   maxPagePossible = Math.ceil(allResults.length / MAX_PAGE_RENDER);

   pages.update(maxPagePossible, 0);
}

searchIconAndDisplay();

function setCssFontSize() {
   cssRoot.style.setProperty("--font-size", `${fontSize}px`);
}

useInfoBtn.addEventListener("click", () => {
   useInfo.classList.toggle("active");
});

footerClose.addEventListener("click", () => {
   useInfo.classList.remove("active");
});
