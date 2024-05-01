import { header } from "../components/Header/Header.js";
header();

import { copyright } from "../components/Copyright/Copyright.js";
copyright()

import { projects } from "../blocks/projects/projects.js";
projects()

tippy("[data-tippy-content]");

const mainPaddingUpdate = () => {
  if (document.querySelector(".main")) {
    const header = document.querySelector(".header");

    const main = document.querySelector(".main");
  
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const headerHeight = header.clientHeight;
        main.style.paddingBlockStart = `${headerHeight}px`;
      }
    });
    
    observer.observe(header);
    
    const resizeObserver = new ResizeObserver(() => {
      const headerHeight = header.clientHeight;
      main.style.paddingBlockStart = `${headerHeight}px`;
    });
    
    resizeObserver.observe(header);
  }
};
mainPaddingUpdate();