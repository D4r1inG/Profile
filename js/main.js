let eduBox = document.querySelectorAll(".edu_item")
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let closeBtn = document.getElementsByClassName("modalClose")[0];
let modalContent = document.querySelector('.modal-content')
let galleryItems = document.querySelectorAll('.gallery-item')

eduBox.forEach(item => item.addEventListener("click", () => {
  for (let i of eduBox) {
    if (i.classList.contains('active')) {
      i.classList.remove("active")
    } 
  }
  item.classList.add("active")
}))

galleryItems.forEach(item => item.addEventListener("click", (e) => {
  modal.style.display = "block";
  modalContent.innerHTML = `<img src="${e.target.src}" class="img-fluid">`
}))

closeBtn.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}