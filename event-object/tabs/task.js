const tabs = Array.from(document.querySelectorAll(".tab"));
const tabContent = Array.from(document.querySelectorAll(".tab__content"));

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function (event) {
        let target = event.target;
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("tab_active");
        }
        for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].classList.remove("tab__content_active");
        }
        target.classList.add("tab_active");
        let index = tabs.indexOf(document.querySelector(".tab_active"));
        tabContent[index].classList.add("tab__content_active");
    });
}