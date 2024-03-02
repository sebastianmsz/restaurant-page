import img from './img/map.png'
export function aboutContent(){
    let container = document.querySelector('#content');

    const paragraph1 = document.createElement('p');
    paragraph1.textContent = '📞123 456 789';

    const paragraph2 = document.createElement('p');
    paragraph2.textContent = '🏠New York, 10013, EE. UU';

    const mapImage = document.createElement('img');
    mapImage.src = img;
    mapImage.height = '500';

    container.append(paragraph1, paragraph2, mapImage);
}