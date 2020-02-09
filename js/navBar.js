function toggleNav() {
    var x = document.getElementById("navbar-links");
    var items = x.getElementsByClassName("item");
    for (const item of items) {
        if (item.className === "item") {
            item.className += " active";
        } else {
            item.className = "item";
        }
    }
}