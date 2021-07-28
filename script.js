const container = document.querySelector("#container")
// creates the 16x16 grid, and adds a hover event listener to change the grids color
function createGrid(gridSize){
    for (let i = 0; i<(gridSize*gridSize); i++){
        const gridBlock = document.createElement('div')
        gridBlock.classList.add('gridBlock')
        gridBlock.addEventListener('mouseover',function(){
            gridBlock.style.backgroundColor = "green"
        })
        container.appendChild(gridBlock)
    }
}

gridSize = 0 // initalizes grid size variable
const gridSelectBtn = document.querySelector("#grid-size") //grid select button
// prompts user to enter grid size
function gridSelect(){
    //while loop to prompt user until they select a valid grid size
    while(true){
        userSelection = prompt('Select the grid size (ex:16) Max range is 100')
        userSelectionInt = Number(userSelection)
        if (Number.isInteger(userSelectionInt) && 0 <= userSelectionInt && userSelectionInt <= 100){
            console.log(userSelectionInt)
            gridSize = userSelectionInt
            return(userSelectionInt)
        }
    }
    
}
// button triggers grid select funct
gridSelectBtn.addEventListener('click',function(){
    gridSelect()
    createGrid(gridSize)
 }) 

//default 16x16 grid for startup
createGrid(16)


// clear button
const clear = document.querySelector("#clear")
//selects all the gridBlocks in one element
const gridBlocks = document.querySelectorAll(".gridBlock")
//iterates through each gridblock to remove style when button is pressed
gridBlocks.forEach((gridBlock) => {
    clear.addEventListener('click',function(){
        gridBlock.removeAttribute("style")
    })
})

