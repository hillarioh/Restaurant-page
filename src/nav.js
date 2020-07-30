import "../styles/style.css";

const content = document.getElementById("content");

let header = document.createElement("header");
let logoContainer = document.createElement("div");
let logoTitle = document.createElement("h2");
let logoDesc = document.createElement("p");
logoTitle.textContent = "TOCO NICO";
logoDesc.textContent = "Traditional delicacies";

logoContainer.appendChild(logoTitle);
logoContainer.appendChild(logoDesc);
logoContainer.classList.add("d-flex", "flex-column");

let navlinks = document.createElement("ul");
let homelink = document.createElement("li");
homelink.textContent = "Home";
let menulink = document.createElement("li");
menulink.textContent = "Menu";
let contactlink = document.createElement("li");
contactlink.textContent = "Contact";

navlinks.appendChild(homelink);
navlinks.appendChild(menulink);
navlinks.appendChild(contactlink);

header.appendChild(logoContainer);
header.appendChild(navlinks);
header.classList.add("d-flex", "justify-content-between", "bg-info");

content.appendChild(header);
