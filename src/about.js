export default function menu() {
    const main = document.createElement('div');
    main.style = 'display: flex; flex-direction: column; align-items: center; text-align: center; margin-top:35vh';

    main.innerHTML = `
    <h1>About</h1>
    <p>Centuries ago, a dish was born in the lands far beyond. Through the labour and efforts of the ones before us, we bring you a simple dish, fit for everyone, disappointing none.</p>
    `;

    return main;
}