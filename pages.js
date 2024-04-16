class Pages {
   constructor(maxPages, pagesElement, clickCallback) {
      this.maxPages = maxPages;
      this.pagesElement = pagesElement;
      this.clickCallback = clickCallback;
      this.current = 0;
      this.possible = 0;
      this.nextIcon = "sbi-dots-three-horizontal";
      this.pages = [];
      this.#createPages();
      this.#pageEventListener();
   }

   #createHtmlPage(valueOrClassName = false) {
      const page = document.createElement("div");
      page.classList.add("page", "show");
      if (valueOrClassName === false) page.classList.add(this.nextIcon);
      else page.innerHTML = valueOrClassName;

      return page;
   }

   #createPages() {
      this.pagesElement.innerHTML = "";
      this.pages = [];

      for (let i = 0; i < this.maxPages; i++) {
         if (i == this.maxPages - 1) {
            this.pages.push(this.#createHtmlPage());
         } else this.pages.push(this.#createHtmlPage(i + 1));
      }
      this.pages[0].classList.add("active");
      this.pages.forEach((page) => {
         this.pagesElement.append(page);
      });
   }

   #updatePages() {
      const { possible, maxPages, current, pages, nextIcon } = this;
      let activeIndex = 0;

      // clear page value
      pages.forEach((page) => {
         page.classList.remove(nextIcon, "show", "active");
         page.innerHTML = "";
      });

      // update page value
      if (possible > maxPages) {
         pages.forEach((p) => p.classList.add("show"));

         if (current < maxPages) {
            pages.forEach((page, i) => {
               if (i < maxPages - 1) page.innerHTML = i + 1;
               else page.classList.add(nextIcon);
            });

            activeIndex = Math.min(
               current !== 0 ? current - 1 : 0,
               maxPages - 2
            );

         } else if (current + maxPages < possible) {
            pages.forEach((page, i) => {
               if (i === 0) page.classList.add(nextIcon);
               else if (i < maxPages - 1) page.innerHTML = i + 1;
               else page.classList.add(nextIcon);
            });
         } else {
            let maxIndex = 0;

            pages.forEach((page, i) => {
               if (i === 0) page.classList.add(nextIcon);
               else page.innerHTML = possible - (maxPages - i - 1);
               if (possible - (maxPages - i - 1) === current + 1) maxIndex = i;
            });
            activeIndex = Math.max(maxIndex, 1);
            console.log(activeIndex);
         }
      } else {
         pages.forEach((page, i) => {
            if (possible > i) {
               page.classList.add("show");
               page.innerHTML = i + 1;
            }
         });
      }

      pages[activeIndex].classList.add("active");
   }

   #pageEventListener() {
      const { maxPages, pages } = this;

      pages.forEach((page, i) => {
         page.addEventListener("click", () => {
            pages.forEach((p) => p.classList.remove("active"));
            if (
               page.classList.contains(this.nextIcon)
               // &&
               //    this.current + maxPages > this.possible
            ) {
               const temp = i === 0 ? -(maxPages - 1) : maxPages - 1;
               this.current = this.current + temp;
               this.clickAction();
               this.#updatePages();
               // pages[i===0?maxPages-1:0].classList.add("active");
            } else {
               console.log("work");
               this.current = parseInt(page.innerText);
               pages[i].classList.add("active");
               this.clickAction();
            }

            console.log(this.current);
         });
      });
   }

   update(possible, current = 0) {
      this.possible = possible;
      this.current = current;
      this.#updatePages();
   }

   clickAction() {
      this.clickCallback(this.current);
   }
}
