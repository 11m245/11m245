
function showMenu() {
    // console.log("run");
    let showMenuEl = document.getElementById("menu-list");
    if (showMenuEl.style.display === "block") {
        showMenuEl.style.display = "none";
    } else {
        showMenuEl.style.display = "block";
    }
}

function hideMenu() {
    let mytimer = setTimeout(showMenu, 5000);

}