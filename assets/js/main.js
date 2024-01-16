const gridHtml = document.getElementById("grid")
const btnHtml = document.getElementById("btn")

function generateGrid(){

    gridHtml.innerHTML =""

    for (let i = 1; i <= 100; i++){
        //creates an empty div
        let box = document.createElement("div")

        //adds the class to the div
        box.classList.add("box")
    
        //numerates the cells 
        box.innerText = i

        //creates the grid
        gridHtml.append(box)
    
        box.addEventListener("click", function(){
            this.classList.toggle("active")
            console.log(i)
        })
    }
}

btnHtml.addEventListener("click",function(){
    generateGrid()
    gridHtml.classList.toggle("none")
})
