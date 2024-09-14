const displaylinks = document.getElementById("burger");
const links = document.getElementById("links");
console.log(displaylinks);

function displayLinks() {
    if (window.innerWidth<=768) {
        links.style.display="grid"
    }
    else{
        links.style.display="none"

    }
    // displaylinks.style.display="none"

}