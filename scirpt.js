const main = document.querySelector(".main");
main.addEventListener("mousemove", (dets) => {
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
