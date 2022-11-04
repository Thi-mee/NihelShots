

document.querySelectorAll('.gallery .image-box').forEach(imageBox => {
    imageBox.addEventListener('mouseover', (e) => {
        e.target.style.transform = "scale(1.05)"
    })
    imageBox.addEventListener('mouseout', (e) => {
        e.target.style.transform = "scale(1)"
    })
})
