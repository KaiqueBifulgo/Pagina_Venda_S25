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


       const mobile = window.innerWidth <= 480;
       
       const desktopMobile = mobile ? `imgs/${id}_Mobile.jpeg` : `imgs/${id}.jpeg`

       images.setAttribute("src", desktopMobile)



       setTimeout(() => {

        images.classList.toggle("changing");

       }, 200)
})

})