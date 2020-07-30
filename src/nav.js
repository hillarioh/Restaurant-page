import "../styles/style.css";

let header = document.createElement("header");
let logoContainer = document.createElement("div");
logoContainer.classList.add("logo");
let logoTitle = document.createElement("h2");
let logoDesc = document.createElement("p");
logoTitle.classList.add("my-1","mx-0");
logoDesc.classList.add("m-0","p-1");
logoTitle.textContent = "TOCO NICO";
logoDesc.textContent = "Traditional delicacies";

logoContainer.appendChild(logoTitle);
logoContainer.appendChild(logoDesc);
logoContainer.classList.add("d-flex", "flex-column");

let navlinks = document.createElement("ul");
navlinks.setAttribute("id", "h-ul");
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
header.classList.add(
  "d-flex",
  "justify-content-between",
  "align-items-center",
  "p-1"
);

export default header;

