
const passwordInput = document.getElementById("passwordInput");
const copyBtn = document.getElementById("copy-btn");
const rangeSlider = document.getElementById("range");
const sliderNumber = document.getElementById("slider-number");
const generatBtn = document.getElementById("generate-button");


const generatePass = () => {
  let newpass = "";
  let all =
    "abcdefghijklmnopqrstubwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890()[]<>&%@#";
  for (let i = 0; i < rangeSlider.value; i++) {
    newpass += all[Math.floor(Math.random() * all.length)];
  }
  passwordInput.value = newpass;
};


generatePass();


copyBtn.addEventListener("click", () => {
  passwordInput.select();
  document.execCommand("copy");

  copyBtn.setAttribute("class", "far fa-clipboard");
  
});


rangeSlider.addEventListener("input", () => {
  sliderNumber.textContent = rangeSlider.value;
});

generatBtn.addEventListener("click", generatePass);
