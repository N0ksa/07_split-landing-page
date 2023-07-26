const container = document.querySelector(".container")
const leftSide = document.querySelector(".left")
const rightSide = document.querySelector(".right")

leftSide.addEventListener("mouseover", () =>{
    container.classList.add("left");
    container.classList.remove("right");
})

rightSide.addEventListener("mouseover", () =>{
    container.classList.add("right");
    container.classList.remove("left");
} )