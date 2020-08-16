/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import '../styles/style.css';
import menuObj from './foodList';

const foods = document.createElement('div');
foods.setAttribute('id', 'foods');

for (const item in menuObj) {
  const foodItem = document.createElement('div');
  foodItem.setAttribute('class', 'item');
  const foodImg = document.createElement('div');
  foodImg.setAttribute('id', 'img');
  const foodName = document.createElement('h5');
  const foodPrice = document.createElement('p');

  foodImg.style.backgroundImage = `url('${menuObj[item].image}')`;
  foodItem.appendChild(foodImg);
  foodName.textContent = menuObj[item].name;
  foodItem.appendChild(foodName);
  foodPrice.textContent = `Price: $${menuObj[item].price}`;
  foodItem.appendChild(foodPrice);

  foods.appendChild(foodItem);
}

export default foods;
