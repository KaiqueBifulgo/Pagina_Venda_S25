const buttons = document.querySelectorAll("#img-picker li")
const images = document.querySelector("#product-image")

buttons.forEach((button) => {

    button.addEventListener("click", (e) => {

       buttons.forEach((button) => {
            button.querySelector(".color").classList.remove("selected")
       })

       const button = e.target

       const id = button.getAttribute("id");

       button.querySelector(".color").classList.add("selected");


       images.classList.add("changing")
       images.setAttribute("src", `imgs/${id}.png`)


       setTimeout(() => {

        images.classList.toggle("changing");

       }, 200)
})

})