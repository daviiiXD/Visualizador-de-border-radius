const topLeft = document.getElementById('topLeft')
const topRight = document.getElementById('topRight')
const bottomLeft = document.getElementById('bottomLeft')
const bottomRight = document.getElementById('bottomRight')
function update() {
    document.getElementById('cobaia').style.borderRadius = topLeft.value + '%' + topRight.value + '%' + bottomRight.value + '%' + bottomLeft.value + '%'
    document.getElementById('style').innerHTML = 'border-radius: ' + topLeft.value + '% ' + topRight.value + '% ' + bottomRight.value + '% ' + bottomLeft.value + '%' + ';'
}
topLeft.addEventListener('input', update)
topRight.addEventListener('input', update)
bottomLeft.addEventListener('input', update)
bottomRight.addEventListener('input', update)