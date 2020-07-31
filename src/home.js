import "../styles/style.css";
import Icon from "../images/ham.png";
import icon2 from "../images/cheese-burger.jpg"

const mainContent = document.createElement('div');
mainContent.classList.add('mainContent');

const mainTitle = document.createElement('p');
mainTitle.textContent =
  "Enjoy the luxury of Toco nico, Located less than 20Kms from Jomo Kenyatta International Airport.";


const mainphoto = document.createElement('img');


mainphoto.src = Icon;
mainphoto.style.width = "40vw";

mainContent.appendChild(mainTitle);
mainContent.appendChild(mainphoto)



export default mainContent;



