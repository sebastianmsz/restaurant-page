import img from './chef.jpg';
export function content(){
    let container = document.querySelector('#content');
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Best pizza in your country Made with passion since 1908';
    const chefPhoto = document.createElement('img');
    chefPhoto.src = img;
    chefPhoto.height = '450';
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'Order online or visit us!';
    container.append(paragraph1, chefPhoto, paragraph2);
}