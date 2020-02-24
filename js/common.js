const style = document.body.style;

let mainC = "#7D82B8";
let darkC = "#6f74a4";
let lightC = "#8b90cc";

changeColors = (str1, str2, str3) => {
  mainC = str1;
  darkC = str2;
  lightC = str3;
};

updateColors = (mainC, darkC, lightC) => {
  style.setProperty("--main-color", mainC);
  style.setProperty("--dark-color", darkC);
  style.setProperty("--light-color", lightC);
};

let alternateColors = () => {
  setTimeout(() => {
    changeColors("#EB55F3", "#c848cf", "#ff62ff");
    updateColors(mainC, darkC, lightC);
  }, 2000);

  setTimeout(() => {
    changeColors("#AFB8FF", "#9ca4e3", "#c2ccff");
    updateColors(mainC, darkC, lightC);
  }, 4000);

  setTimeout(() => {
    changeColors("#EF798A", "#d56c7b", "#ff8699");
    updateColors(mainC, darkC, lightC);
  }, 6000);

  setTimeout(() => {
    changeColors("#234234", "#1f3b2e", "#27493a");
    updateColors(mainC, darkC, lightC);
  }, 8000);

  setTimeout(() => {
    changeColors("#7D82B8", "#6f74a4", "#8b90cc");
    updateColors(mainC, darkC, lightC);
  }, 10000);
};

alternateColors();
setInterval(() => {
  alternateColors();
}, 10000);

