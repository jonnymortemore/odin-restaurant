export function generateHomePage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.className = "home";
    const title = document.createElement("h1");
    title.innerText = "The Cat's Pyjamas";
    content.append(title);

    const byLine = document.createElement("h2");
    byLine.innerText = "Real Food for Real Cats";
    content.append(byLine);

    const desc = document.createElement("p");
    desc.innerText = "| Southern Style | Fried To Die | Truly Cat Nip |"
    content.append(desc);

    const quote = document.createElement("p");
    quote.innerText = "'The best cat food I've even eaten' - Cat Weekly";
    quote.style.fontStyle = "italic";
    quote.style.paddingTop = "10px";
    content.append(quote);
}


export function generateMenuPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.className = "menu";

    const title = document.createElement("h1");
    content.append(title)

    title.innerText = "Menu";

}


export function generateAboutPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.className = "about";

    const header = document.createElement("h1");
    header.innerText = "About The Cat's Pyjamas";
    content.append(header);
    
    const textBody = document.createElement("p");
    content.append(textBody);
    textBody.innerText = "The Cat's Pyjamas was founded in 1736 by Horatio Montague III, the for most cat chef in all of the known cat world.";
    textBody.className = "text";

    const contact = document.createElement("h2");
    contact.innerText = "Contact Details";
    content.append(contact)
    const contactBody = document.createElement("p");
    contactBody.innerText = "For bookins call: 003003003";
    content.append(contactBody);
    contactBody.className = "text";


}