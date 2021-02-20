// Login Form
// ***********************************************************************************
let form = document.getElementById("login");
form.addEventListener(
    "submit",
    function (event) {
        event.preventDefault();
        let elements = form.elements;
        let payload = {};
        for (let i = 0; i < elements.length; i++) {
            let item = elements.item(i);
            switch (item.type) {
                case "checkbox":
                    payload[item.name] = item.checked;
                    break;
                case "submit":
                    break;
                default:
                    payload[item.name] = item.value;
                    break;
            }
        }
        // Place your API call here to submit your payload.
        // console.log("payload", payload);
    },
    true
);
// ***********************************************************************************

// Main Nav Bar
// ***********************************************************************************
function dropdownHandler(element) {
    let single = element.getElementsByTagName("ul")[0];
    single.classList.toggle("hidden");
}
function MenuHandler(el, val) {
    let MainList = el.parentElement.parentElement.getElementsByTagName("ul")[0];
    let closeIcon = el.parentElement.parentElement.getElementsByClassName("close-m-menu")[0];
    let showIcon = el.parentElement.parentElement.getElementsByClassName("show-m-menu")[0];
    if (val) {
        MainList.classList.remove("hidden");
        el.classList.add("hidden");
        closeIcon.classList.remove("hidden");
    } else {
        showIcon.classList.remove("hidden");
        MainList.classList.add("hidden");
        el.classList.add("hidden");
    }
}
function searchHandler(element) {
    let Input = element.parentElement.getElementsByTagName("input")[0];
    Input.classList.toggle("w-0");
}
// ------------------------------------------------------
let sideBar = document.getElementById("mobile-nav");
let menu = document.getElementById("menu");
let cross = document.getElementById("cross");
const sidebarHandler = (check) => {
    if (check) {
        sideBar.style.transform = "translateX(0px)";
        menu.classList.add("hidden");
        cross.classList.remove("hidden");
    } else {
        sideBar.style.transform = "translateX(-100%)";
        menu.classList.remove("hidden");
        cross.classList.add("hidden");
    }
};

// **********************************************************************************
