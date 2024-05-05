// GENERAL //
let windowWidth = window.innerWidth;

/// BORYSPIL ///

let imagesBor = document.querySelectorAll(".galleryImageBor");
if (imagesBor) {
  imagesBor.forEach((img, index) => {
    img.addEventListener("click", () => {
      getLatestOpenedImg = index + 1;

      let container = document.querySelector(".boryspil");
      let newImgWindow = document.createElement("div");
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");
      container.appendChild(newImgWindow);

      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", `/photo/bor/bor${getLatestOpenedImg}.jpg`);
      newImg.setAttribute("id", "current-img");

      //the code below will run after the image is loaded
      newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("prev");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "prev-btn");
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        // newPrevBtn.style.cssText = "right: " + calcImgToEdge + "px;"; // to fix

        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode("next");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "next-btn");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        // newNextBtn.style.cssText = "left: " + calcImgToEdge + "px;"; // to fix
      };
    });
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".prev-btn").remove();
  document.querySelector(".next-btn").remove();
}

function changeImg(changeDir) {
  document.querySelector("#current-img").remove();
  let getImgWindow = document.querySelector(".img-window");
  let newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);

  let calcNewImg;

  if (changeDir === 1) {
    calcNewImg = getLatestOpenedImg + 1;
    if (calcNewImg > imagesBor.length) {
      calcNewImg = 1;
    }
  } else if (changeDir === 0) {
    calcNewImg = getLatestOpenedImg - 1;
    if (calcNewImg < 1) {
      calcNewImg = imagesBor.length;
    }
  }

  newImg.setAttribute("src", `/photo/bor/bor${calcNewImg}.jpg`);
  newImg.setAttribute("id", "current-img");
  getLatestOpenedImg = calcNewImg;
}

/// CANADIAN VILLAGE ///

let imagesCan = document.querySelectorAll(".galleryImageCan");
if (imagesCan) {
  imagesCan.forEach((img, index) => {
    img.addEventListener("click", () => {
      getLatestOpenedImg = index + 1;

      let container = document.querySelector(".canada");
      let newImgWindow = document.createElement("div");
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");
      container.appendChild(newImgWindow);

      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", `/photo/can/can${getLatestOpenedImg}.jpg`);
      newImg.setAttribute("id", "current-img");

      //the code below will run after the image is loaded
      newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("prev");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "prev-btn");
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        // newPrevBtn.style.cssText = "right: " + calcImgToEdge + "px;"; // to fix

        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode("next");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "next-btn");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        // newNextBtn.style.cssText = "left: " + calcImgToEdge + "px;"; // to fix
      };
    });
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".prev-btn").remove();
  document.querySelector(".next-btn").remove();
}

function changeImg(changeDir) {
  document.querySelector("#current-img").remove();
  let getImgWindow = document.querySelector(".img-window");
  let newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);

  let calcNewImg;

  if (changeDir === 1) {
    calcNewImg = getLatestOpenedImg + 1;
    if (calcNewImg > imagesCan.length) {
      calcNewImg = 1;
    }
  } else if (changeDir === 0) {
    calcNewImg = getLatestOpenedImg - 1;
    if (calcNewImg < 1) {
      calcNewImg = imagesCan.length;
    }
  }

  newImg.setAttribute("src", `/photo/can/can${calcNewImg}.jpg`);
  newImg.setAttribute("id", "current-img");
  getLatestOpenedImg = calcNewImg;
}

/// GORENYCHI ///
