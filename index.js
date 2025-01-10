let open = document.querySelector(".open");
let close = document.querySelector(".close");
let manu = document.querySelector(".manu");

open.addEventListener("click", () => {
  manu.classList.toggle("active");
  open.style.display = "none";
  close.style.display = "block";
  document.body.classList.toggle("active");
});
close.addEventListener("click", () => {
  manu.classList.toggle("active");
  close.style.display = "none";
  open.style.display = "block";
  document.body.classList.toggle("active");
});

let left = document.querySelector(".left__button");
let right = document.querySelector(".right__button");
let slider = document.querySelector(".slider");
let slide = document.querySelectorAll(".slide");

let sliderNumber = 1;
const length = slide.length;

const buttons = document.querySelector(".dots");

for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "boll";
    buttons.appendChild(div);
}

const dots = document.querySelectorAll(".boll");
dots[0].style.backgroundColor = "#356554";
const resetbg = () => {
    dots.forEach((button) => {
        button.style.backgroundColor = "#E5F5BD"
    });
};

dots.forEach((button, i) => {
    button.addEventListener("click", () => {
        resetbg();
        slider.style.transform = `translateX(-${i * 538}px)`;
        sliderNumber = i + 1;
        button.style.backgroundColor = "#356554";
    });
});

const changecolor = () =>  {
    resetbg()
    dots[sliderNumber-1].style .backgroundColor = "#356554";
}; 


const nextslider = () => {
  slider.style.transform = `translateX(-${sliderNumber * 538}px)`;
  sliderNumber++;
}

const prevslider = () => {
  slider.style.transform = `translateX(-${(sliderNumber - 2) * 538}px)`;
  sliderNumber--;
}

const getfristslide = () => {
  slider.style.transform = `translateX(0px)`;
  sliderNumber = 1;
}

const getlastslide = () => {
  slider.style.transform = `translateX(-${(length - 3) * 538}px)`;
  sliderNumber = length;
}

right.addEventListener("click", () => {
  sliderNumber < length ? nextslider() : getfristslide();
  changecolor();
});

left.addEventListener("click", () => {
  sliderNumber > 1 ? prevslider() : getlastslide();
  changecolor();
});
