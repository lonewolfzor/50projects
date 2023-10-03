const panels = document.querySelectorAll('.panel')  // creates a node list of the .panels

panels.forEach(panel =>{
    panel.addEventListener('mouseover', () => {
        removeActiveClasses();
        panel.classList.add('active');

    })
     
})


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}