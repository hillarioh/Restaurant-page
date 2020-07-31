import "../styles/style.css";

const contact = document.createElement('div')
contact.classList.add("pt-3","bg-secondary");
const heading = document.createElement('h3')
heading.textContent = "Contact Us";
heading.classList.add("text-center");
contact.appendChild(heading);
const contlist = document.createElement('div')
contlist.setAttribute("class","contlist");

const contactDetails = `
    <div class="takeaway cnt">
        <i class="fas fa-shipping-fast"></i>
        <h4 class="m-0 p-0">Take away</h4>
        <p class="m-0 p-0">+254702338066</p>

   </div>
    <div class="email cnt">
        <i class="fas fa-envelope-open"></i>
        <h4 class="m-0 p-0">Email</h4>
        <p class="m-0 p-0">okerioh@gmail.com</p>
    </div>
    <div class="hours cnt">
        <i class="fas fa-concierge-bell"></i>
        <h4 class="m-0 p-0">Opening hours</h4>
        <p class="m-0 p-0">on - Fri : noon - 9pm</p>
        <p class="m-0 p-0">Sat & Sun : 9am - 5pm</p>
    </div>
    <div class="address cnt">
        <i class="fas fa-map-marked-alt"></i>
        <h4 class="m-0 p-0">Location</h4>
        <p class="m-0 p-0">Ngong road, near Junction</p>
    </div>
    <div class="social cnt">
        <i class="fab fa-twitter"></i>
        <h4 class="m-0 p-0">Twitter</h4>
    </div>` ;

contlist.innerHTML = contactDetails;

contact.appendChild(contlist);

export default contact;

