// Elements from the HTML

    const drawingSection = document.getElementById("drawing-section")
    const colorSection = document.getElementById("color-section")
    const buttonsSection = document.getElementById("buttons-section")

// Variables

    let widthLength = 39 // this is an odd number so that the grid display works
    let heightLength = widthLength // this works because I'm bad at math below
    let isGridDisplayed = true // controls grid display
    let mouseDown = false // controls the drawing section
    let backgroundColorDisplayed = "white" 

// This is the funciton that mades the drawing section on open

    function formGrid(){

        for (let i = 0; i < widthLength * heightLength; i++){
            let createRow = document.createElement("div")
            createRow.classList.add("pixel")
            createRow.id = `pixel${i}`
            createRow.style.backgroundColor = "white" // don't know why but if you put this in the css everything breaks, so it's here
            drawingSection.appendChild(createRow)
        }
        makeGrid()
    }

    formGrid()

    function makeGrid(){
        drawingSection.style.setProperty("grid-template-columns", `repeat(${widthLength}, 2fr)`)
    }

// This section controls the drawing mechanic plus choosing the color

    drawingSection.addEventListener("mousedown", function(e){
        e.target.style.backgroundColor = backgroundColorDisplayed
        mouseDown = true
    })

    drawingSection.addEventListener("mouseup", function(){
        mouseDown = false
    })


    drawingSection.addEventListener("mouseover", function(e){
    if (mouseDown === true){
        e.target.style.backgroundColor = backgroundColorDisplayed
    }
    })

    colorSection.addEventListener("click", function(e){
        backgroundColorDisplayed = e.target.dataset.color
        document.getElementById("selected-color").style.backgroundColor = backgroundColorDisplayed
    })

// This controls the clear button and erases the whole drawing section

    document.addEventListener("click", function(e){
        if (e.target.id === "reset-btn"){
            drawingSection.innerHTML = ""
            formGrid()
        }
    })

// And this controls the display grid button 

    buttonsSection.addEventListener("click", function(e){
        
        isGridDisplayed = !isGridDisplayed // this flips the boolean
        
        // this sets every other white pixel to light grey
            //shows the grid

            if (e.target.id === "show-grid" && isGridDisplayed === false){
                for (i = 0; i < widthLength * heightLength; i++){
                    if (i % 2 == 0 && document.getElementById(`pixel${i}`).style.backgroundColor === "white"){
                        document.getElementById(`pixel${i}`).style.backgroundColor = "lightgrey"
                    }
                }
            }
        
        // And this does the oposite. If the pixel only has the color of light grey, it flips it to white
            // gets rid of the grid
            
            else if (isGridDisplayed === true){
                for (i = 0; i < widthLength * heightLength; i++){
                    if (i % 2 == 0 && document.getElementById(`pixel${i}`).style.backgroundColor === "lightgrey"){
                        document.getElementById(`pixel${i}`).style.backgroundColor = "white"
                    }
                }
            }
    })


