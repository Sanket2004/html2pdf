var changeFontStyle = function (font) {
    document.getElementById(
        "output-text").style.fontFamily
        = font.value;
}
function createPDF() {
    // get the element of ticket content.
    const docElement = document.getElementById('ticket');
    // select the element and save as the PDF.
    html2pdf().from(docElement).save();
}

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var date = date;
var time = time;
var dateTime = date + ' ' + time;

console.log(dateTime)
console.log(date);
console.log(time);
document.getElementById("date").textContent = "Downloaded at: " + dateTime;
const contextMenu = document.querySelector(".wrapper"),
    shareMenu = contextMenu.querySelector(".share-menu");

window.addEventListener("contextmenu", e => {
    e.preventDefault();
    let x = e.offsetX, y = e.offsetY,
        winWidth = window.innerWidth,
        winHeight = window.innerHeight,
        cmWidth = contextMenu.offsetWidth,
        cmHeight = contextMenu.offsetHeight;

    if (x > (winWidth - cmWidth - shareMenu.offsetWidth)) {
        shareMenu.style.left = "-200px";
    } else {
        shareMenu.style.left = "";
        shareMenu.style.right = "-200px";
    }

    x = x > winWidth - cmWidth ? winWidth - cmWidth - 5 : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight - 5 : y;

    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.visibility = "visible";
});

