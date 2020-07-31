import * as header from "./nav";
import home from './home';
import menu from './menu';
import contact from './contact';

const content = document.getElementById("content");
content.appendChild(header.header);
let current = home;
content.appendChild(current);

header.menulink.addEventListener('click',()=>{
    content.removeChild(current);
    content.appendChild(menu);
    current=menu
});

header.homelink.addEventListener('click',()=>{
    content.removeChild(current);
    content.appendChild(home);
    current=home
});

header.contactlink.addEventListener('click',()=>{
    content.removeChild(current);
    content.appendChild(contact);
    current=contact
});


// switch (tab) {
//     case 'home':
//         content.appendChild(home);
//         break;
//     case 'menu':
//         content.appendChild(menu);
//         break;
//     case 'contact':
//         content.appendChild(contact);
//         break;
//     default:
//         content.appendChild(home);
// }


