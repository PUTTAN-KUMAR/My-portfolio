document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    this.reset();
})
var tablinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-Contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabContents of tabContents) {
        tabContents.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");

}


