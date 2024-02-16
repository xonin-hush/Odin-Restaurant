import firstImg from "./images/img1.jpg"
import secondImg from "./images/img2.jpg"
import thirdImg from "./images/p.jpg"
import fourthImg from "./images/salad.jpg"
import fifthImg from "./images/pepsi.png"
import sixthImg from "./images/fanta.png"
import seventhImg from "./images/water.png"
import eighthImg from "./images/cake.png"
let img1 = ""
const cardContainer = document.createElement("div")
export function loadMenu() {
    const content = document.querySelector("#content")
    content.innerHTML = ""
    const cardTitle = document.createElement("div")
    const cardDescription = document.createElement("div")
    cardTitle.textContent = "burger"
    cardDescription.textContent = "this burger is so good"
    createCards()
}
function createCards() {
    const cards = [
        { title: "Cheese Burger", price: "9.99", description: "Made it myself,bit chewy but good",image:firstImg },
        { title: "Taboula", price: "Priceless", description: "On God the best chicken wings in the galaxy",image:secondImg },
        { title: "Pizza", price: "15.90", description: "lorem and something",image:thirdImg },
        { title: "Salad", price: "10.00", description: "lorem and something",image:fourthImg },
        { title: "Pepsi", price: "3.00", description: "lorem and something",image:fifthImg },
        { title: "Fanta", price: "3.00", description: "lorem and something",image:sixthImg },
        { title: "water", price: "5.00", description: "lorem and something",image:seventhImg },
        { title: "Cake", price: "5.00", description: "lorem and something",image:eighthImg },
    ];
    for (let i in cards) {
        console.log(i)
        createCard(cards[i].title, cards[i].price, cards[i].description,cards[i].image, i)
    }

}
function createCard(title, price, description, image,i) {
    cardContainer.classList.add("card-container")
    const card = document.createElement("div")
    if (i % 2 == 0) {
        card.innerHTML = `<div class="card" data-aos="fade-right"><div class="card-img"><img class="img" src="${image}"></img></div><div class="card-title">${title}</div><div class="card-subtitle">${description}</div><hr class="card-divider"><div class="card-footer"><div class="card-price"><span>$</span> ${price}</div><button class="card-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg></button></div></div>`
    }
    else {
        card.innerHTML = `<div class="card" data-aos="fade-left"><div class="card-img"><img class="img" src="${image}"></img></div><div class="card-title">${title}</div><div class="card-subtitle">${description}</div><hr class="card-divider"><div class="card-footer"><div class="card-price"><span>$</span> ${price}</div><button class="card-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg></button></div></div>`
    }
    cardContainer.appendChild(card)
    content.appendChild(cardContainer)
}
