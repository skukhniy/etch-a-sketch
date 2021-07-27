
const container = document.querySelector("#container")
// creates the 16x16 grid, and adds a hover event listener to change the grids color
for (let i = 0; i<256; i++){
    const gridBlock = document.createElement('div')
    gridBlock.classList.add('gridBlock')
    gridBlock.addEventListener('mouseover',function(){
        gridBlock.style.backgroundColor = "green"
    })
    container.appendChild(gridBlock)
}
const clear = document.querySelector("#clear")
//selects all the gridBlocks in one element
const gridBlocks = document.querySelectorAll(".gridBlock")
//iterates through each gridblock to remove style when button is pressed
gridBlocks.forEach((gridBlock) => {
    clear.addEventListener('click',function(){
        gridBlock.removeAttribute("style")
    })
})
