

export default class Home {
    constructor(parentSelector) {
        this.parentSelector = parentSelector;
        this.divHome = document.createElement("div");
        this.divHomePara = document.createElement("div");
        this.divHomeParaElem1 = document.createElement("div");
        this.divHomeParaElem2 = document.createElement("div");
        this.divHomeParaElem3 = document.createElement("div");
        this.svgDot1 = this.createSvgDot();
        this.svgDot2 = this.createSvgDot();
    }

    /**
     * Returns a svg dot
     */
    createSvgDot() {
        const svgns = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgns, "svg");
        const path = document.createElementNS(svgns, "path");

        svg.setAttribute("width", "14");
        svg.setAttribute("height", "14");
        svg.setAttribute("fill", "currentColor");
        svg.setAttribute("viewBox", "0 0 16 16");

        path.setAttribute("d", "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3");
        svg.appendChild(path);

        return svg;
    }

    /**
     * Initializes DOM 
     */
    initializeDom() {
        this.divHome.classList.add("home");
        this.divHome.innerText = "A Mediterranean Story";

        this.divHomePara.classList.add("home-para");
        this.divHomeParaElem1.innerText = "456 Seaside Boulevard";
        this.divHomeParaElem2.innerText = "Azure Bay";
        this.divHomeParaElem3.innerText = "Santorini, Greece 84700"
        
        this.divHomePara.append(
            this.divHomeParaElem1,
            this.svgDot1,
            this.divHomeParaElem2,
            this.svgDot2,
            this.divHomeParaElem3
        );
        
        this.divHome.appendChild(this.divHomePara);
        this.parentSelector.appendChild(this.divHome);
    }
}
