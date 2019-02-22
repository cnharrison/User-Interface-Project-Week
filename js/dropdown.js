class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector(".dropdown-button");
    this.content = this.element.querySelector(".dropdown-content");
    this.stuff = this.element.querySelector(".dropdown-stuff");
    this.button.addEventListener("click", this.toggleContent.bind(this));
  }

  toggleContent() {
    console.log("toggle content fired dude");
    this.content.classList.toggle("dropdown-hidden");
    this.stuff.classList.toggle("dropdown-hidden");
    if (this.button.src.endsWith("img/nav-hamburger.png") === true) {
      this.button.src = "img/nav-hamburger-close.png";
    } else {
      this.button.src = "img/nav-hamburger.png";
    }
  }
}

let dropdowns = document
  .querySelectorAll(".dropdown")
  .forEach(dropdown => new Dropdown(dropdown));
