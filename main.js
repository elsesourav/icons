// when run this app in mobile is return true
const isMobile = localStorage.mobile || navigator.maxTouchPoints > 1;
const colorScheme = matchMedia("(prefers-color-scheme: dark)");
//use cssRoot.style.setProperty("key", "value");
const cssRoot = document.querySelector(":root");

if (isMobile) {
   cssRoot.style.setProperty("--cursor", "auto");
}

/* ------ global variable ------ */
const MAX_PAGE_RENDER = 400;
const HTML_ICON_ELEMENTS = [];
const MAX_PAGE_BUTTON = 5;
const MAX_FONT = 200;
const MIN_FONT = 20;
const INPUT_DELAY = 500; // ms

let allResults = [];
let htmlIconStrings = "";
let fontSize = 32;
let colorOnly = false;
let colorMode = localStorage.getItem("colorScheme") || (colorScheme.matches ? "dark" : "light");
let targetValue = "";


/* ----- find elements from document ------ */
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
const iconColorMod = document.getElementById("iconColorMod");
const colorModeButton = document.getElementById("colorMod");

colorScheme.addEventListener("change", () => {
   if (!localStorage.getItem("colorScheme")) {
      colorMode = colorScheme.matches ? "dark" : "light";
      colorChangeScheme();
   }
});

colorModeButton.addEventListener("click", () =>{
   colorMode = colorMode == "dark" ? "light" : "dark";
   localStorage.setItem("colorScheme", colorMode);
   document.body.classList.toggle("dark", colorMode == "dark");
   colorChangeScheme();
});

colorChangeScheme();

function colorChangeScheme() {
   const mode = localStorage.getItem("colorScheme");
   if ((mode && mode === "dark") || (!mode && colorMode === "dark")) {
      document.body.classList.add("dark");
   } else document.body.classList.remove("dark");
}

// setup all html icons elements based on MAX_PAGE_RENDER
(() => {
   const scrollList = document.getElementById("scroll-list");
   for (let i = 0; i < MAX_PAGE_RENDER; i++) {
      const icon = document.createElement("div");
      icon.classList.add("icon", "hide");
      const iTag = document.createElement("i");
      const p = document.createElement("p");
      icon.append(iTag, p);
      HTML_ICON_ELEMENTS.push([icon, iTag, p]);
      scrollList.append(icon);

      icon.addEventListener("click", () => {
         let codeName = `sbi-${p.innerHTML.split(" ").join("-")}`;
         iconSelectorWindow.classList.add("active");
         iconId.classList = [];
         iconId.classList.add(codeName);
         contentId.innerHTML = p.getAttribute("value");
         originalNameId.innerHTML = p.innerHTML;
         textClassName.innerHTML = codeName;
      });
   }
})();

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

function copyElementText(copyElement) {
   selectText(copyElement);
   copyStatus.classList.add("active");
   setTimeout(() => {
      copyStatus.classList.remove("active");
   }, 1000);
}

textClassName.addEventListener("click", () => copyElementText(textClassName));
contentId.addEventListener("click", () => copyElementText(contentId));
copyButton.addEventListener("click", () => copyElementText(copyText));

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

function setupIcons(iconName, iconId, i) {
   const [icon, iTag, p] = HTML_ICON_ELEMENTS[i];
   icon.classList.remove("hide");
   iTag.classList = [];
   p.setAttribute("value", iconId);
   iTag.classList.add("sbi", `sbi-${iconName.split(" ").join("-")}`);
   p.innerHTML = iconName;
}

const pagesElement = document.getElementById("pages");
const pages = new Pages(
   MAX_PAGE_BUTTON,
   pagesElement,
   pageClickAction,
   pageClickAction
);

function pageClickAction(current) {
   let j,
      i = current * MAX_PAGE_RENDER;
   let n = Math.min(allResults.length, (current + 1) * MAX_PAGE_RENDER);

   for (j = 0; i < n; i++, j++) {
      const { name, icon } = allResults[i];
      setupIcons(name, icon, j);
   }
   for (; j < MAX_PAGE_RENDER; j++) {
      const [icon] = HTML_ICON_ELEMENTS[j];
      icon.classList.add("hide");
   }
}

function searchIconAndDisplay() {
   allResults = [];
   htmlIconStrings = "";

   if (targetValue !== "") {
      getResults(COLOR_ICONS, targetValue, true);
      if (!colorOnly) getResults(ICONS, targetValue);

      // sorting the result based on lowest keyword_find_index
      allResults.sort((a, b) => a[1] - b[1]);

      allResults = allResults.map(([i, _, isColor]) => {
         if (isColor) return COLOR_ICONS[i];
         else return ICONS[i];
      });
   } else {
      if (colorOnly) allResults = [...COLOR_ICONS];
      else allResults = [...ICONS, ...COLOR_ICONS];
   }

   const maxPagePossible = Math.ceil(allResults.length / MAX_PAGE_RENDER);

   pages.update(maxPagePossible);
   pageClickAction(0);
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
