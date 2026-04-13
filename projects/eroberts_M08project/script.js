const main = document.querySelector("main");
const body = document.querySelector("body");

main.animate(
    [{ opacity: 0 }, { opacity: 1 }],
    { duration: 1000, fill: "forwards" }
);

window.addEventListener("load", () => {
    main.classList.add("jello-horizontal");
});

window.addEventListener("scroll", () => {
    main.classList.add("shake-horizontal");
    body.classList.add("bg-pan-top");
});

main.addEventListener("animationend", (e) => {
    if (e.animationName === "shake-horizontal") {
        main.classList.remove("shake-horizontal");
    }
    if (e.animationName === "jello-horizontal") {
        main.classList.remove("jello-horizontal");
    }
});

body.addEventListener("animationend", (e) => {
    if (e.animationName === "bg-pan-top") {
        body.classList.remove("bg-pan-top");
    }
});
