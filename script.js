const cencel = document.getElementById('close')
const hambarger = document.getElementById('hambarger')
const ul = document.querySelector('.hide')

hambarger.addEventListener('click', (e) =>{
    e.preventDefault()

    ul.style.display = 'initial'
    cencel.style.display = 'block'
    hambarger.style.display = 'none'
    
})
cencel.addEventListener('click', (e) =>{
    e.preventDefault()

    ul.style.display = 'none'
    cencel.style.display = 'none'
    hambarger.style.display = 'block'
    
})