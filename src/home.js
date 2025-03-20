import Logo from './img/logo.svg';

export default function homePage() {
    const main = document.createElement("div");
    main.style = 'display: flex; flex-direction: column; align-items: center; text-align: center; gap: 16px; margin-top: 8vh';

    const logo = document.createElement('div');
    const img = new Image();
    img.src = Logo;
    img.style = 'width: 200px; height: auto;'

    logo.appendChild(img);
    main.appendChild(logo);

    main.innerHTML += `
    <div class="homepage">
        <h1>The Best Restaurant</h1>
        <p>Come to the best restaurant in town. We serve the best egg fried rice on this side of the country. Laden with the best flavors in the world straight from this kitchen to your plate. Come visit us today!</p>
    </div>    
    <div class="hours">
        <h2>Hours:</h2>
        <ul>
            <li>Sunday: 8am-10pm</li>
            <li>Monday: 8am-8pm</li>
            <li>Tuesday: 8am-8pm</li>
            <li>Wednesday: 8am-8pm</li>
            <li>Thursday: 8am-8pm</li>
            <li>Friday: 8am-10pm</li>
            <li>Saturday: 8am-10pm</li>
        </ul>
    </div>
    <div class="Location">
        <h2>Location</h2>
        <p>321 MSG avenue, RicherVille, 903213</p>
    </div>`;

    return main;
}