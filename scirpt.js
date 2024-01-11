const main = document.querySelector(".main");

document.addEventListener("mousemove", (dets) => {
  gsap.to(".cursor", {
    left: dets.x,
    top: dets.y,
  });
});

const navCenterH3 = document.querySelectorAll(".nav-center>h3");
const navCenter = document.querySelector(".nav-center");
navCenterH3.forEach((h3) => {
  navCenter.addEventListener("mouseenter", () => {
    gsap.to(h3, {
      y: -25,
    });
  });

  navCenter.addEventListener("mouseleave", () => {
    gsap.to(h3, {
      y: 0,
    });
  });
});

Shery.makeMagnet(".page1-bottom-center,.page1-circle" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

const page1BottomCenter = document.querySelector(".page1-bottom-center");
page1BottomCenter.addEventListener("mouseenter", () => {
  gsap.to(".page1-circle", {
    height: "90%",
    width: "90%",
  });
});

page1BottomCenter.addEventListener("mouseleave", () => {
  gsap.to(".page1-circle", {
    height: "100%",
    width: "100%",
  });
});

const page2Text1 = document.querySelector("#page2-text1");
const page2Text2 = document.querySelector("#page2-text2");
const tl = gsap.timeline();

let clutter = "";
page2Text1.textContent.split("").forEach((words) => {
  clutter += `<span>${words}</span>`;
});
page2Text1.innerHTML = clutter;

tl.to("#page2-text1>span", {
  color: "#000",
  stagger: 0.2,
  scrollTrigger: {
    scroller: "body",
    trigger: "#page2-text1>span",
    start: "top 100%",
    end: "top 50",
    scrub: 1,
    // markers: true,
  },
});

let clutter2 = "";
page2Text2.textContent.split("").forEach((words) => {
  clutter2 += `<span>${words}</span>`;
});
page2Text2.innerHTML = clutter;

tl.to("#page2-text2>span", {
  color: "#000",
  stagger: 0.2,
  scrollTrigger: {
    scroller: "body",
    trigger: "#page2-text2>span",
    start: "top 50%",
    end: "top 0",
    scrub: 1,
    // markers: true,
  },
});

tl.from(".page3-title", {
  opacity: 0,
  y: 30,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-title",
    start: "top 100%",
    end: "top 80%",
    scrub: 1,
    // markers: true,
  },
});

tl.from(".page3-line", {
  width: "0",
  duration: 1,
  scrollTrigger: {
    // scroller: "body",
    trigger: ".page3-line",
    start: "top 80%",
    end: "top 80%",
    scrub: 1,
    // markers: true,
  },
});

tl.from(".page3-headline>h1", {
  y: 150,
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-headline>h1",
    start: "top 80%",
    end: "top 70%",
    scrub: 1,
    // markers: true,
  },
});

tl.to(".page3-hero-right", {
  y: -70,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-hero-right",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

tl.to(".page4-hero-left", {
  y: -70,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page4-hero-left",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});
