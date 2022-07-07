const imagesURL = [
  "TimePhoto_20220408_105658.jpg",
  "TimePhoto_20220404_152755.jpg",
  "Original_TimePhoto_20220427_161656.jpg",
  "TimePhoto_20220406_143652.jpg",
  "TimePhoto_20220303_162957.jpg",
  "TimePhoto_20220217_143112.jpg",
  "TimePhoto_20220411_155011.jpg",
  "Original_TimePhoto_20220422_111743.jpg",
  "TimePhoto_20220408_093604.jpg",
  "Original_TimePhoto_20220422_111743.jpg",
];

const state = {
  current: 0,
  images: imagesURL,
  nextSlide() {
    this.current++;
    if (this.current >= this.images.length) {
      this.current = 0;
    }
  },
  prevSlide() {
    this.current--;
    if (this.current < 0) {
      this.current = this.images.length - 1;
    }
  },
  updateHtml() {
    const loading = document.getElementById("loading");
    loading.classList.add("active");
    const currentImage = this.images[this.current];
    const sliderImage = document.querySelector(".slider-image");
    const status = document.querySelector(".status");
    // const url = `https://raw.githubusercontent.com/BhryanS2/Conceito/d0997dc54a63f0474da8da7b2926b3da24bd0002/assets/slider/${currentImage}`;
    const url = `assets/slider/${currentImage}`;
    sliderImage.src = url;
    sliderImage.onload = () => {
      loading.classList.remove("active");
    };

    status.innerHTML = `${this.current + 1}/${this.images.length}`;
  },
  max: imagesURL.length - 1,
  min: 0,
};

const buttonsControllers = document.querySelectorAll(
  "#showServices .controllers button"
);

buttonsControllers.forEach((button) => {
  button.addEventListener("click", controller);
});

function controller(eventClick) {
  if (eventClick.target.id === "next") {
    state.nextSlide();
  } else if (eventClick.target.id === "prev") {
    state.prevSlide();
  }
  state.updateHtml();
}

window.addEventListener("load", () => {
  state.updateHtml();
});
