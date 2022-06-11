let colour = ['#E45826', '#1B1A17', '#0E3EDA', '#874356', '#F68989', '#534340', '#890F0D', '#00C897', '#85F4FF', '#FFC300', '#603601'];

let i = 0;

const changeBg = () => {
    i = i < colour.length ? ++i : 0;
    document.querySelector('body').style.backgroundColor = colour[i];
    document.querySelector('button').style.backgroundColor = colour[i + 1];

    let bgColour = document.body.style.backgroundColor;
    let h1 = document.querySelector('h1');
    h1.innerHTML = 'now the Background Colour is:<br>' + bgColour;
}