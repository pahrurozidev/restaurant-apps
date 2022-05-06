import CONFIG from '../../globals/config';

const createRestoListItemTemplate = (data) => {
    const subStr = data.description.substring(0, 100);
    return `<div class="card card-resto-item">
            <div class="card-header">
                <img tabindex="0" class="lazyload" src="${CONFIG.BASE_IMAGE_URL_MEDIUM}/${data.pictureId}" alt="${data.name}">
                <div tabindex="0" class="city">${data.city}</div>
            </div>
            <div class="card-body">
                <h3 class="card-title">
                    <a href="${`/#/detail/${data.id}`}" class="card-title-link">${data.name}</a>
                </h3>
                <p tabindex="0">${subStr}</p>
                <h4 tabindex="0">Rating: ${data.rating}</h4>
            </div>
        </div>`;
};

const createRestoDetailTemplate = (data) => {
    const { foods, drinks } = data.restaurant.menus;
    const customers = data.restaurant.customerReviews;
    return `
        <section tabindex="0" class="detailResto">
            <aside class="picture">
                <img tabindex="0" class="lazyload" src="${CONFIG.BASE_IMAGE_URL_LARGE}/${data.restaurant.pictureId}" alt="${data.restaurant.name}">
            </aside>
            <aside class="description">
                <h3 tabindex="0">${data.restaurant.name}</h3>
                <p tabindex="0"><b>Alamat  :</b> ${data.restaurant.address}</p>
                <p tabindex="0"><b>Kota  :</b> ${data.restaurant.city}</p>
                <p tabindex="0" class="text"><b>Deskripsi  :</b> ${data.restaurant.description}</p>
                <div class="menu">
                    <div class="foods">
                        <h4 tabindex="0">Menu Makanan</h4>
                        <div class="list-menu">
                            ${foods.map((food) => `<p tabindex="0" class="restau-title">${food.name}</p>`)}
                        </div>
                    </div>
                    <div class="drinks">
                        <h4 tabindex="0">Menu Minuman</h4>
                        <div class="list-menu">
                            ${drinks.map((drink) => `<p tabindex="0">${drink.name}</p>`)}
                        </div>
                    </div>
                </div>
            </aside>
            <aside class="customers">
                <h4 tabindex="0">Customer Reviews</h4>
                <div class="review">
                    ${customers.map((customer) => `
                    <div class="list">
                        <h4 tabindex="0">${customer.name}</h4>
                        <p tabindex="0">${customer.review}</p>
                    </div>`)}
                </div>
            </aside>
        </section>
    `;
};

const createLikeButtonTemplate = () => `
  <button tabindex="0" aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button tabindex="0" aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createEmptyText = () => `
    <div id="empty">
        <p id="message" class="empty-favorite">it looks like your favorite Resto list is empty<p>
    </div>
`;

export {
    createRestoListItemTemplate,
    createRestoDetailTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    createEmptyText,
};
