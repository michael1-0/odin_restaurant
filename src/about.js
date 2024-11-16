export default class About {
    constructor(parentSelector) {
        this.parentSelector = parentSelector;
        this.divContainerAbout = document.createElement("div");
    }

    initializeDom() {
        this.divContainerAbout.classList.add("container-about");
        this.divContainerAbout.textContent = `At "A Mediterranean Story," we believe that every dish tells a tale. Our restaurant is a celebration of the rich and diverse culinary heritage of the Mediterranean region. From the sun-drenched shores of Greece to the bustling markets of Morocco, we bring you an authentic taste of the Mediterranean, crafted with love and passion. Our philosophy is simple: to provide our guests with an unforgettable dining experience that captures the essence of Mediterranean cuisine. We use only the freshest ingredients, sourced locally and from trusted suppliers, to create dishes that are both delicious and nutritious. Our menu is a blend of traditional recipes and modern culinary techniques, ensuring that every meal is a journey of flavors. Founded by a team of passionate food lovers, "A Mediterranean Story" is more than just a restaurant; it's a tribute to the Mediterranean way of life. Our chefs have traveled extensively across the region, learning from local cooks and gathering inspiration from the vibrant cultures and traditions they encountered. This wealth of experience is reflected in every dish we serve, from our succulent Moroccan Tagine to our sweet and flaky Baklava. We are committed to providing exceptional service and creating a warm, welcoming atmosphere for our guests. Whether you're joining us for a casual lunch, a romantic dinner, or a special celebration, we strive to make every visit memorable. Our friendly staff is always on hand to guide you through our menu and help you discover new and exciting flavors. Come and experience the magic of the Mediterranean at "A Mediterranean Story." We invite you to relax, unwind, and savor the flavors of this beautiful region. Let us take you on a culinary journey that will delight your senses and leave you longing for more.`;
        this.parentSelector.appendChild(this.divContainerAbout);
    }
}