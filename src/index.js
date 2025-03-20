import home from "./home";
import menu from "./menu";
import about from "./about";
import "./styles.css";

(() => {
    const header = document.querySelector('header');
    const content = document.querySelector('#content');

    const pages = {home, menu, about};

    let currentPage = home;
    content.appendChild(currentPage());

    header.addEventListener('click', (e) => {
        if (!e.target.matches('button')) return;

        const selectedPage = e.target.textContent.toLowerCase();
        if (selectedPage === currentPage) return;
        
        content.innerHTML = '';
        content.appendChild(pages[selectedPage]());
        currentPage = selectedPage;
    })
})();
