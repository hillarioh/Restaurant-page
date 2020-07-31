import header from "./nav";
import home from './home';
import menu from './menu';
import contact from './contact';
import tab from './control';

const content = document.getElementById("content");
content.appendChild(header);

switch (tab) {
    case 'home':
        content.appendChild(home);
        break;
    case 'menu':
        content.appendChild(menu);
        break;
    case 'contact':
        content.appendChild(contact);
        break;
    default:
        content.appendChild(home);
}


