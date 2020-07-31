import '../styles/style.css';

const header = document.createElement('header');
const logoContainer = document.createElement('div');
logoContainer.classList.add('logo');
const logoTitle = document.createElement('h2');
const logoDesc = document.createElement('p');
logoTitle.classList.add('my-1', 'mx-0');
logoDesc.classList.add('m-0', 'p-1');
logoTitle.textContent = 'TOCO NICO';
logoDesc.textContent = 'Traditional delicacies';

logoContainer.appendChild(logoTitle);
logoContainer.appendChild(logoDesc);
logoContainer.classList.add('d-flex', 'flex-column');

const navlinks = document.createElement('ul');
navlinks.setAttribute('id', 'h-ul');

const homelink = document.createElement('li');
homelink.textContent = 'Home';

const menulink = document.createElement('li');
menulink.textContent = 'Menu';

const contactlink = document.createElement('li');
contactlink.textContent = 'Contact';

navlinks.appendChild(homelink);
navlinks.appendChild(menulink);
navlinks.appendChild(contactlink);

header.appendChild(logoContainer);
header.appendChild(navlinks);
header.classList.add(
  'd-flex',
  'justify-content-between',
  'align-items-center',
  'p-1',
);

export {
  header, homelink, menulink, contactlink,
};
