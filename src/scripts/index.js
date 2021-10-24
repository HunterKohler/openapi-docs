/*
 * Copyright (C) 2021 John Hunter Kohler <jhunterkohler@gmail.com>
 */

const tocItems = document.querySelectorAll(".toc__item");

for (const tocItem of tocItems) {
    const tocLabel = tocItem.querySelector(".toc__label");
    const tocLink = tocItem.querySelector(".toc__link");
    const tocSublist = tocItem.querySelector(".toc__sublist");

    if(!tocSublist) {
        tocItem.classList.add("toc__item--empty");
    }

    tocLabel.addEventListener("click", function (event) {
        event.stopPropagation();
        const open = tocItem.classList.toggle("toc__item--open");

        if (tocSublist) {
            if (open) {
                tocSublist.style.setProperty(
                    "max-height",
                    `${tocSublist.scrollHeight}px`
                );
            } else {
                tocSublist.style.setProperty("max-height", "0");
            }
        }
    });

    tocLink.addEventListener("click", function (event) {
        event.stopPropagation();
    });
}

const resize = document.querySelector(".resize__area");
const resizeArea = document.querySelector(".resize__area");
