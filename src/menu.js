import tangineImage from "./food-3375436_1920.jpg";
import baklavaImage from "./food-5158702_1920.jpg";
import mintLemonImage from "./drink-5298126_1280.jpg";

export default class Menu {
    constructor(parentSelector) {
        this.parentSelector = parentSelector;
        this.divContainerMenuCards = document.createElement("div");

        this.divMenuCards1 = document.createElement("div");
        this.imgMenuCards1 = document.createElement("img");
        this.divDescriptiion1 = document.createElement("div");
        this.h1MenuCards1 = document.createElement("h1");
        this.pMenuCards1 = document.createElement("p");

        this.divMenuCards2 = document.createElement("div");
        this.imgMenuCards2 = document.createElement("img");
        this.divDescriptiion2 = document.createElement("div");
        this.h1MenuCards2 = document.createElement("h1");
        this.pMenuCards2 = document.createElement("p");

        this.divMenuCards3 = document.createElement("div");
        this.imgMenuCards3 = document.createElement("img");
        this.divDescriptiion3 = document.createElement("div");
        this.h1MenuCards3 = document.createElement("h1");
        this.pMenuCards3 = document.createElement("p");
    }

    initializeDom() {
        this.divMenuCards1.classList.add("menu-cards");
        this.imgMenuCards1.src = tangineImage;
        this.imgMenuCards1.alt = "Moroccan tangine";
        this.divDescriptiion1.classList.add("description");
        this.h1MenuCards1.textContent = "Moroccan Tangine";
        this.pMenuCards1.textContent = "Our signature dish, Moroccan Tagine, is a symphony of flavors that transports you straight to the bustling markets of Marrakech. This exquisite dish features succulent pieces of lamb or chicken, slow-cooked to perfection with a vibrant mix of seasonal vegetables, aromatic spices like cumin, coriander, and cinnamon, and a hint of sweetness from dried apricots and prunes.";
        this.divDescriptiion1.append(this.h1MenuCards1, this.pMenuCards1);
        this.divMenuCards1.append(this.imgMenuCards1, this.divDescriptiion1);
        this.divContainerMenuCards.appendChild(this.divMenuCards1);

        this.divMenuCards2.classList.add("menu-cards");
        this.imgMenuCards2.src = baklavaImage;
        this.imgMenuCards2.alt = "Baklava";
        this.divDescriptiion2.classList.add("description");
        this.h1MenuCards2.textContent = "Baklava";
        this.pMenuCards2.textContent = "Our Baklava is a decadent journey through layers of flavor and texture. This exquisite dessert features delicate layers of crispy filo pastry, generously filled with a blend of finely chopped nuts, including walnuts and pistachios, all held together by a fragrant honey syrup.";
        this.divDescriptiion2.append(this.h1MenuCards2, this.pMenuCards2);
        this.divMenuCards2.append(this.imgMenuCards2, this.divDescriptiion2);
        this.divContainerMenuCards.appendChild(this.divMenuCards2);

        this.divMenuCards3.classList.add("menu-cards");
        this.imgMenuCards3.src = mintLemonImage;
        this.imgMenuCards3.alt = "Mint Lemonade";
        this.divDescriptiion3.classList.add("description");
        this.h1MenuCards3.textContent = "Mint Lemonade";
        this.pMenuCards3.textContent = "Our Mint Lemonade is a refreshing oasis in a glass. This invigorating drink combines freshly squeezed lemons with a hint of natural sweetness, perfectly balanced by the cool, crisp flavor of garden-fresh mint leaves. Served over ice, this delightful beverage is the perfect companion for a warm day, offering a burst of citrusy zest and a soothing minty finish.";
        this.divDescriptiion3.append(this.h1MenuCards3, this.pMenuCards3);
        this.divMenuCards3.append(this.imgMenuCards3, this.divDescriptiion3);
        this.divContainerMenuCards.appendChild(this.divMenuCards3);

        this.divContainerMenuCards.classList.add("container-menu-cards")
        this.parentSelector.appendChild(this.divContainerMenuCards);
    }
}