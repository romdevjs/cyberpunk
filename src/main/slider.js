const sliderImages = document.querySelectorAll('.main__slider-image');

let activeImageIndex = 0;

const switchImagesInSlider = () => {
  sliderImages.forEach((elem, index) => {
    if (index !== activeImageIndex) elem.classList.add('main__slider-image_hidden');
    if (index === activeImageIndex) elem.classList.remove('main__slider-image_hidden');
  });

  if (activeImageIndex < sliderImages.length - 1) {
    activeImageIndex++;
  } else {
    activeImageIndex = 0;
  }
}

setInterval(switchImagesInSlider, 8000);