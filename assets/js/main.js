const gridHtml = document.getElementById("grid")
const btnHtml = document.getElementById("btn")

for (let i = 1; i <= 100; i++){
    //creates an empty div
    let box = document.createElement("div")
    //adds the class to the div
    box.classList.add("box")
    //creates the grid
    gridHtml.append(box)

    box.addEventListener("click", function(){
        this.classList.toggle("active")
    })

}

btnHtml.addEventListener("click",function(){
    gridHtml.classList.remove("none")
})
