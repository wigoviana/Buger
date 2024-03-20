const list = document.querySelector('ul')
const button = document.querySelector('.play')
const buttonMap = document.querySelector('.playMap')
const buttonCar = document.querySelector('.playCar')
const filterVegan = document.querySelector('.playVegan')

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency', currency: 'BRL',


    })
}

function playClick(newArray) {
    let myLi = ``
    newArray.forEach(product => {
        myLi = myLi +
            `
        <li>
                <img src=${product.src}>
                <P>${product.name}</P>
                <p class="price"> ${formatCurrency(product.price)}</p>
        </li>
    
     `
    })
    list.innerHTML = myLi
}
function playDescont() {

    const newPrices = menuOptions.map((descont) => ({
        ...descont,
        price: descont.price * 0.9,
    }))

    playClick(newPrices)
}
function playCAr() {

    const car = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML =
        `
       <li>
        <P> O valor da compra foi de ${formatCurrency(car)}</P>
       </li>

`
}
function playVegan() {
    const boxvegans = menuOptions.filter(product => product.vegan)

    playClick(boxvegans)
}




button.addEventListener('click', () => playClick(menuOptions))
buttonMap.addEventListener('click', playDescont)
buttonCar.addEventListener('click', playCAr)
filterVegan.addEventListener('click', playVegan)