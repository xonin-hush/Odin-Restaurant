export function loadHome(){
const title=document.createElement("h1")
const content=document.querySelector("#content")
content.innerHTML=""
const container = document.createElement("div")
container.style.display="flex"
container.style.flexDirection="column"
container.style.alignItems="center"
title.textContent="Welcome To Our Restaurant"
title.style.textAlign="center"
const description=document.createElement('p')
description.textContent="The work on this fine restaurant was started at the 3rd of February of 2024 and we admit that we were a bit late on that but feel free to take a look around and check the menu and the about section."
container.appendChild(title)
container.appendChild(description)
description.classList.add("home-text")
content.appendChild(container)
console.log("hello")
// console.log("ssomethin")
}