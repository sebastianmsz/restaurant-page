import { homeContent } from './home';
import { aboutContent } from './about';
import { menuContent } from './menu';
import { footerContent } from './footer';
import './style.css';

(function(){
    homeContent();
    footerContent();
    (function(){
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', buttonHandler);
            function buttonHandler(){
                buttons.forEach(button => {
                    button.className = '';
                });
                button.className = 'active-button';

                document.querySelector('#content').innerHTML='';
                switch (button.textContent) {
                    case 'Home':
                        homeContent();
                        break;
                    case 'About':
                        aboutContent();
                        break;
                    case 'Menu':
                        menuContent();
                        break;
                }
            }
        });
    })()
    
})()