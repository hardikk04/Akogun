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

gsap.to(".page3-line", {
  width: "100%",
  duration: 1,
  scrollTrigger: {
    // scroller: "body",
    trigger: ".page3-line",
    start: "top 80%",
    end: "top 70%",
    // scrub: 1,
    // markers: true,
  },
});

gsap.from(".page3-headline>h1", {
  y: 150,
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3-headline>h1",
    start: "top 80%",
    end: "top 70%",
    // scrub: 1,
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

gsap.to(".page5-line", {
  width: "100%",
  duration: 1,
  scrollTrigger: {
    // scroller: "body",
    trigger: ".page5-line",
    start: "top 80%",
    end: "top 70%",
    // scrub: 1,
    // markers: true,
  },
});

function page5Elem1() {
  const page5Elem1H1 = document.querySelector(".page5-elem1>h1");
  let page5Clutter1 = "";

  page5Elem1H1.textContent.split("").forEach((word) => {
    page5Clutter1 += `<span class="inline-block">${word}</span>`;
  });

  page5Elem1H1.innerHTML = page5Clutter1;
  const page5Elem1H1Span = document.querySelectorAll(".page5-elem1>h1>span");

  page5Elem1H1.addEventListener("mouseenter", () => {
    gsap.to(main, {
      backgroundColor: "#333333",
    });
    gsap.to(page5Elem1H1Span, {
      color: "#fff",
    });
    page5Elem1H1Span.forEach((span) => {
      if (span.textContent === "C") {
        gsap.to(span, {
          x: -100,
          y: -80,
          rotate: -30,
        });
      } else if (span.textContent === "R") {
        gsap.to(span, {
          x: -30,
          y: -40,
          rotate: -10,
        });
      } else if (span.textContent === "E") {
        gsap.to(span, {
          y: 10,
          rotate: 10,
        });
      } else if (span.textContent === "A") {
        gsap.to(span, {
          y: -10,
          rotate: -10,
        });
      } else if (span.textContent === "T") {
        gsap.to(span, {
          y: 120,
          rotate: 5,
        });
      } else if (span.textContent === "I") {
        gsap.to(span, {
          y: -20,
          rotate: 10,
        });
      } else if (span.textContent === "V") {
        gsap.to(span, {
          y: 30,
          rotate: -10,
        });
      }
    });
  });

  page5Elem1H1.addEventListener("mouseleave", () => {
    gsap.to(main, {
      backgroundColor: "#fff",
    });
    gsap.to(page5Elem1H1Span, {
      color: "#000",
    });
    page5Elem1H1Span.forEach((span) => {
      if (span.textContent === "C") {
        gsap.to(span, {
          x: 0,
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "R") {
        gsap.to(span, {
          x: 0,
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "E") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "A") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "T") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "I") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "V") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      }
    });
  });
}

function page5Elem2() {
  const page5Elem2H1 = document.querySelector(".page5-elem2>h1");
  let page5Clutter2 = "";

  page5Elem2H1.textContent.split("").forEach((word) => {
    page5Clutter2 += `<span class="inline-block">${word}</span>`;
  });

  page5Elem2H1.innerHTML = page5Clutter2;
  const page5Elem2H1Span = document.querySelectorAll(".page5-elem2>h1>span");

  page5Elem2H1.addEventListener("mouseenter", () => {
    gsap.to(main, {
      backgroundColor: "#333333",
    });
    gsap.to(page5Elem2H1Span, {
      color: "#fff",
    });
    page5Elem2H1Span.forEach((span) => {
      if (span.textContent === "F") {
        gsap.to(span, {
          x: -100,
          y: -80,
          rotate: -30,
        });
      } else if (span.textContent === "R") {
        gsap.to(span, {
          x: -30,
          y: -40,
          rotate: -10,
        });
      } else if (span.textContent === "O") {
        gsap.to(span, {
          y: 10,
          rotate: 10,
        });
      } else if (span.textContent === "N") {
        gsap.to(span, {
          y: -10,
          rotate: -10,
        });
      } else if (span.textContent === "T") {
        gsap.to(span, {
          y: 120,
          rotate: 5,
        });
      } else if (span.textContent === "E") {
        gsap.to(span, {
          y: -20,
          rotate: -10,
        });
      } else if (span.textContent === "N") {
        gsap.to(span, {
          y: 30,
          rotate: -10,
        });
      } else if (span.textContent === "D") {
        gsap.to(span, {
          y: -90,
          rotate: 10,
        });
      }
    });
  });

  page5Elem2H1.addEventListener("mouseleave", () => {
    gsap.to(main, {
      backgroundColor: "#fff",
    });
    gsap.to(page5Elem2H1Span, {
      color: "#000",
    });
    page5Elem2H1Span.forEach((span) => {
      if (span.textContent === "F") {
        gsap.to(span, {
          x: 0,
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "R") {
        gsap.to(span, {
          x: 0,
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "O") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "N") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "T") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "E") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "N") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "D") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      }
    });
  });
}

function page5Elem3() {
  const page5Elem3H1 = document.querySelector(".page5-elem3>h1");
  let page5Clutter1 = "";

  page5Elem3H1.textContent.split("").forEach((word) => {
    page5Clutter1 += `<span class="inline-block">${word}</span>`;
  });

  page5Elem3H1.innerHTML = page5Clutter1;
  const page5Elem3H1Span = document.querySelectorAll(".page5-elem3>h1>span");

  page5Elem3H1.addEventListener("mouseenter", () => {
    gsap.to(main, {
      backgroundColor: "#333333",
    });
    gsap.to(page5Elem3H1Span, {
      color: "#fff",
    });
    page5Elem3H1Span.forEach((span) => {
      if (span.textContent === "M") {
        gsap.to(span, {
          x: -100,
          y: -80,
          rotate: -30,
        });
      } else if (span.textContent === "O") {
        gsap.to(span, {
          x: -30,
          y: -40,
          rotate: -10,
        });
      } else if (span.textContent === "B") {
        gsap.to(span, {
          y: 10,
          rotate: 10,
        });
      } else if (span.textContent === "I") {
        gsap.to(span, {
          y: -10,
          rotate: -10,
        });
      } else if (span.textContent === "L") {
        gsap.to(span, {
          y: 120,
          rotate: 5,
        });
      } else if (span.textContent === "E") {
        gsap.to(span, {
          y: -20,
          rotate: 10,
        });
      }
    });
  });

  page5Elem3H1.addEventListener("mouseleave", () => {
    gsap.to(main, {
      backgroundColor: "#fff",
    });
    gsap.to(page5Elem3H1Span, {
      color: "#000",
    });
    page5Elem3H1Span.forEach((span) => {
      if (span.textContent === "M") {
        gsap.to(span, {
          x: 0,
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "O") {
        gsap.to(span, {
          x: 0,
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "B") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "I") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "L") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "E") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      }
    });
  });
}

function page5Elem4() {
  const page5Elem4H1 = document.querySelector(".page5-elem4>h1");
  let page5Clutter1 = "";

  page5Elem4H1.textContent.split("").forEach((word) => {
    page5Clutter1 += `<span class="inline-block">${word}</span>`;
  });

  page5Elem4H1.innerHTML = page5Clutter1;
  const page5Elem4H1Span = document.querySelectorAll(".page5-elem4>h1>span");

  page5Elem4H1.addEventListener("mouseenter", () => {
    gsap.to(main, {
      backgroundColor: "#333333",
    });
    gsap.to(page5Elem4H1Span, {
      color: "#fff",
    });
    page5Elem4H1Span.forEach((span) => {
      if (span.textContent === "B") {
        gsap.to(span, {
          x: -100,
          y: -80,
          rotate: -30,
        });
      } else if (span.textContent === "A") {
        gsap.to(span, {
          x: -30,
          y: -40,
          rotate: -10,
        });
      } else if (span.textContent === "C") {
        gsap.to(span, {
          y: 10,
          rotate: 10,
        });
      } else if (span.textContent === "K") {
        gsap.to(span, {
          y: -10,
          rotate: -10,
        });
      } else if (span.textContent === "E") {
        gsap.to(span, {
          y: -20,
          x: 20,
          rotate: 15,
        });
      } else if (span.textContent === "N") {
        gsap.to(span, {
          y: 40,
          rotate: -15,
        });
      } else if (span.textContent === "D") {
        gsap.to(span, {
          y: -20,
          rotate: 10,
        });
      }
    });
  });

  page5Elem4H1.addEventListener("mouseleave", () => {
    gsap.to(main, {
      backgroundColor: "#fff",
    });
    gsap.to(page5Elem4H1Span, {
      color: "#000",
    });
    page5Elem4H1Span.forEach((span) => {
      if (span.textContent === "B") {
        gsap.to(span, {
          x: 0,
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "A") {
        gsap.to(span, {
          x: 0,
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "C") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "K") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "E") {
        gsap.to(span, {
          y: 0,
          x: 0,
          rotate: 0,
        });
      } else if (span.textContent === "N") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      } else if (span.textContent === "D") {
        gsap.to(span, {
          y: 0,
          rotate: 0,
        });
      }
    });
  });
}

page5Elem1();
page5Elem2();
page5Elem3();
page5Elem4();

gsap.to(".page6-line", {
  width: "100%",
  duration: 1,
  scrollTrigger: {
    // scroller: "body",
    trigger: ".page6-line",
    start: "top 80%",
    end: "top 70%",
    // scrub: 1,
    // markers: true,
  },
});

function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridiem = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zero to minutes and seconds if less than 10
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Display the time in the "clock" element
  document.querySelector(".time").textContent =
    hours + ":" + minutes + " " + meridiem;

  // Update the clock every second
  setTimeout(updateClock, 1000);
}

updateClock();
