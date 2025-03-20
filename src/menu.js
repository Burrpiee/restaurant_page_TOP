export default function menu() {
    const main = document.createElement('div');
    main.style = 'display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 35vh';

    main.innerHTML = `
    <div id="price">
        <h1>Egg fried rice</h1>
        <p>This dish has been refined and perfected for centuries. Meant for all to savor. Come taste the definition of perfection.</p>
        <p>10.00</p>
    </div>`;

    return main;
}