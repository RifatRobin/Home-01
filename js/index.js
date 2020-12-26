const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn1");
const cancleButton = document.querySelector(".cookie-btn2");

cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    Cookies.set("webcookies0", "true", { expires: 1 });
});

setTimeout(() => {
    if (!Cookies.get("webcookies0")) {
        cookieContainer.classList.add("active");
    }
}, 2000);


cancleButton.addEventListener("click", () => {
    alert("you are not 18+")
});