import "./styles.css";


console.log("Running!");

generateHomePage();

function generateHomePage() {
    const content = document.querySelector("#content");
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