// get DOM elements
const questionIcons = document.querySelectorAll(".question img");
const imagePath = "./images";//in case path changed
const plusImg = "icon-plus.svg";//in case icon changed
const minusImg = "icon-minus.svg";//in case icon changed
//add event listener to question icons
questionIcons.forEach((img) => {
  img.addEventListener("click", (e) => {
    const imgSrc = e.target.getAttribute("src");
    const imageParent = e.target.parentElement;
    const answerP = imageParent.nextElementSibling;
    if (imgSrc === `${imagePath}/${plusImg}`) {
      e.target.setAttribute("src", `${imagePath}/${minusImg}`);
      answerP.classList.toggle("view");
    } else {
      e.target.setAttribute("src", `${imagePath}/${plusImg}`);
      answerP.classList.toggle("view");
    }
  });
});
