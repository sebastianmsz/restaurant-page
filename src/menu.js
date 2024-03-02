import img from './img/pizza.png'
export function menuContent(){
    let container = document.querySelector('#content');

    const pizzaImg = document.createElement('img');
    pizzaImg.src = img;
    pizzaImg.height = '200';

    function createCard(title, description, imgPath) {
        const card = document.createElement('div');
        const cardH2 = document.createElement('h2');
        cardH2.textContent = title;
        const cardP = document.createElement('p');
        cardP.textContent = description;
        const cardImg = document.createElement('img');
        cardImg.src = imgPath;
        cardImg.height = '200';
        card.append(cardImg, cardH2, cardP);
        return card;
    }

    const card1 = createCard('Marinara', 'This pizza includes tomatoes, garlic, oregano, and extra virgin olive oil.', img);
    const card2 = createCard('Margherita', 'This pizza includes tomatoes, sliced mozzarella, basil, and extra virgin olive oil.', img);
    const card3 = createCard('Pepperoni', 'This pizza includes pepperoni, tomato sauce, and mozzarella cheese.', img);
    const card4 = createCard('Hawaiian', 'This pizza includes ham, pineapple, tomato sauce, and mozzarella cheese.', img);
    const card5 = createCard('Supreme', 'This pizza includes pepperoni, sausage, green peppers, onions, mushrooms, tomato sauce, and mozzarella cheese.', img);
    const card6 = createCard('Veggie', 'This pizza includes green peppers, onions, mushrooms, black olives, tomato sauce, and mozzarella cheese.', img);
    const card7 = createCard('BBQ Chicken', 'This pizza includes BBQ sauce, grilled chicken, red onion, cilantro, and mozzarella cheese.', img);
    const card8 = createCard('Meat Lovers', 'This pizza includes pepperoni, sausage, bacon, ham, tomato sauce, and mozzarella cheese.', img);

    container.append(card1, card2, card3, card4, card5, card6, card7, card8);
}