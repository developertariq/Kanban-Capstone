import { grid } from './const.js';
import getMeals from './foodList.js';

const populateCard = async () => {
  const foods = await getMeals();
  grid.innerHTML = '';
  foods.forEach((food) => {
    const pop = `
      <div class="grid-item">
        <figure id="img-div">
          <img src="${food.image}" alt="${food.name}">        
          <div class="card-title">
            <h4>${food.name}</h4>
            <span class="material-symbols-outlined card-likes" data-id="${food.id}">
              favorite
            </span>
          </div>
          <div class="likes">
            <p data-id="${food.id}" class="like-counter"></p>
            <button data-id="${food.id}" onclick="openPopupWindow('${food.id}')">Comment</button>
          </div>
        </div>
      </figure>
    `;
    grid.innerHTML += pop;
  });
};

export default populateCard;
