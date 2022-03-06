console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", fetchDog())
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const containerUl = document.querySelector("#dog-breeds")
let breedsArray = []
function fetchDog() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(res => res.json())
    .then(images => {
        const imgs = images.message
        let imgsArray = createImg(imgs)
        renderImgs(imgsArray)
    })
        function createImg(imgs){
            return imgs.map((img) => {
                let i = `<img src=${img}>`
                return i
            })
        }
           function renderImgs(imgsArray){
                imgsArray.forEach(element => {
                   oneImg(element)
            })
        }
        function oneImg(element){
            document.querySelector("#dog-image-container").innerHTML += element
        }
    }
fetchDog();

function fetchBreeds() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {
        breedsArray = Object.keys(breeds.message)
        const breedsLis = createLiElement(breedsArray)
        renderLis(breedsLis)
    })
}
function createLiElement(breedsArray){
    return breedsArray.map((breed) => {
        let li = `<li>${breed}</li>`
        return li
    })
}
function renderLis(breedsLis){
    breedsLis.forEach(element => {
       liAppender(element)
})}
function liAppender(element){
    containerUl.addEventListener('click', handleClick)
    containerUl.innerHTML += element
}
function handleClick(e) {
    if (e.target.nodeName === 'LI'){
        if (e.target.style.color === 'pink'){
            e.target.style.color = 'black'
        }
        else {
            e.target.style.color = 'pink'}
}
}
fetchBreeds();
const dropDown = document.querySelector("#breed-dropdown")
dropDown.addEventListener('change', handleDropDown)
function handleDropDown(e) {
    const selection = e.target.value
    const filteredBreeds = breedsArray.filter(breed => breed.startsWith(selection))
    const fBL = createLiElement(filteredBreeds)
    containerUl.innerHTML = ""
    liAppender(fBL)
}
