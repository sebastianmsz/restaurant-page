import img from './img/chef.jpg'
export function homeContent(){
    let container = document.querySelector('#content');

    const paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Best pizza in your country';

    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'Made with passion since 1967';

    const chefPhoto = document.createElement('img');
    chefPhoto.src = img;
    chefPhoto.height = '450';

    const paragraph3 = document.createElement('p');
    paragraph3.textContent = 'Order online or visit us!';
    
    container.append(paragraph1, paragraph2, chefPhoto, paragraph3);
}