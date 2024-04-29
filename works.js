let images = document.querySelectorAll(".galleryImage");
let windowWidth = window.innerWidth;

let currentGallery = "";
let getLatestOpenedImg;

if (images) {
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      // let getElementCss = window.getComputedStyle(img);
      // let getFullImgUrl = getElementCss.getPropertyValue('background-image');

      // let getImgUrlPos = getFullImgUrl.split('/photo/bor');
      // console.log(getFullImgUrl);

      // let setNewImgUrl = getImgUrlPos[1].replace('")', '');

      imgFolder = ["bor", "can"];

      imgFolder.forEach((folderName) => {
        if (img.childNodes[1].src.includes(folderName)) {
          images = `images${folderName}`;
          folder = folderName;
          currentGallery = document.querySelectorAll(`.galleryImage${folder}`);
          //   currentGallery.forEach(_, (index) => {
          //     console.log(index);
          //   });
        } else {
          console.log(false);
        }
      });

      currentGallery.forEach((gallery, index) => {
        return (getLatestOpenedImg = index + 1);
      });

      let container = document.body;
      let newImgWindow = document.createElement("div");
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");
      container.appendChild(newImgWindow);

      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", `/photo/${folder}/${folder}${getLatestOpenedImg}.jpg`);
      newImg.setAttribute("id", "current-img");

      //the code below will run after the image is loaded
      newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;
        console.log(calcImgToEdge);

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("prev");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "prev-btn");
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        // newPrevBtn.style.cssText = 'left: ' + calcImgToEdge + 'px;'; // to fix

        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode("next");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "next-btn");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        // newNextBtn.style.cssText = 'left: ' + calcImgToEdge + 'px;'; // to fix
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
    if (calcNewImg > images.length) {
      calcNewImg = 1;
    }
  } else if (changeDir === 0) {
    calcNewImg = getLatestOpenedImg - 1;
    if (calcNewImg < 1) {
      calcNewImg = images.length;
    }
  }

  newImg.setAttribute("src", `/photo/${folder}/${folder}${calcNewImg}.jpg`);
  newImg.setAttribute("id", "current-img");
  getLatestOpenedImg = calcNewImg;
}
