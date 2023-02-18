// Input value print even handelar //

function printOutput(id, setValue) {
    let values = document.getElementById(id).value;
    let pareValue = parseInt(values);
    
    document.getElementById(setValue).innerText = pareValue;
}


// 

function sumadd(id, id) {
    let firstInput = document.getElementById(id).value;
    let firstInputValue = parseInt(firstInput);

    let secondInput = document.getElementById(id).value;
    let secondInputValue = parseInt(secondInput);

    let totalValue = 0.5 * firstInputValue * secondInputValue;

    document.getElementById('printTriangle').innerText = 'Triangle ' + ' ' + ' ' + totalValue;
}

    
const cardArea = document.getElementsById('card-' + $);

cardArea.addEventListener('mousemove', function() {
    const bgColor = generateHEXColor();
    cardArea.style.backgroundColor = bgColor;
    cardArea.style.color = 'white';
})

function generateHEXColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}