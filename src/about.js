export function loadAbout() {
    const content = document.querySelector("#content")
    content.innerHTML = ""
    const aboutContainer = document.createElement("div")
    const email = document.createElement("p")
    const phone = document.createElement("p")
    const map = document.createElement("div")
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411661.2001146765!2d43.22257736144418!3d36.28554757656699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400727880bbc47cd%3A0xb7dbb8e70939ec2e!2sBurger%20King!5e0!3m2!1sen!2siq!4v1707839714202!5m2!1sen!2siq" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    email.textContent = "Email: thisisafakeemail.gmail.com"
    styleContacts(email)
    phone.textContent = "Phone: +0771344791"
    styleContacts(phone)
    aboutContainer.classList.add("about-container")
    aboutContainer.appendChild(email)
    aboutContainer.appendChild(phone)
    aboutContainer.appendChild(map)
    content.appendChild(aboutContainer)
    console.log("hello")
}
function styleContacts(element){
    element.style.color="#1f2937"
    element.style.backgroundColor="rgb(255, 253, 208)"
    element.style.padding="0.5%"
    element.style.borderRadius="7px"
}