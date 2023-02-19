// Triangle Geometry Function //
const triangleBtn = document.querySelector('#triangle');

triangleBtn.addEventListener('click', function() {
    const base = Number(document.querySelector('#triBase').value);
    const height = Number(document.querySelector('#triHeight').value);

    const baseElement = document.querySelector('#tBOutput');
    const heightElement = document.querySelector('#tHOutput');
    const allResult = document.querySelector('#all__result');

    baseElement.innerHTML = base;
    heightElement.innerHTML = height;
    const resultElement = document.createElement('li');
    resultElement.style.listStyle = 'orderList';
    resultElement.style.margin = '10px';
    resultElement.innerHTML = `Triangle : ${0.5 * base * height}`;
    allResult.appendChild(resultElement);

    const convartBtn = document.createElement('b');
    convartBtn.innerText = 'Convart to m_2';
    convartBtn.style.padding = '10px';
    convartBtn.style.color = 'white';
    convartBtn.style.background = '#1090D8';
    convartBtn.style.borderRadius = '4px';
    allResult.appendChild(convartBtn);

    allResult.style.display = 'flex';
    allResult.style.flexDirection = 'column';

});

// Rectangle Geomtry Function
const rectangleBtn = document.querySelector('#rectangle');

rectangleBtn.addEventListener('click', function() {
    const base = Number(document.querySelector('#recWidth').value);
    const height = Number(document.querySelector('#recLength').value);

    const baseElement = document.querySelector('#rWOutput');
    const heightElement = document.querySelector('#rLOutput');
    const allResult = document.querySelector('#all__result');

    baseElement.innerHTML = base;
    heightElement.innerHTML = height;
    const resultElement = document.createElement('li');
    resultElement.style.listStyle = 'orderList';
    resultElement.style.margin = '10px 0';
    resultElement.innerHTML = `Rectangle : ${base * height}`;
    allResult.appendChild(resultElement);

    const convartBtn = document.createElement('b');
    convartBtn.innerText = 'Convart to m_2';
    convartBtn.style.padding = '10px';
    convartBtn.style.color = 'white';
    convartBtn.style.background = '#1090D8';
    convartBtn.style.borderRadius = '4px';
    allResult.appendChild(convartBtn);

    allResult.style.display = 'flex';
    allResult.style.flexDirection = 'column';

});

// Parallelogram Geometry Function 
const parallelogramBtn = document.querySelector('#parallelogram');

parallelogramBtn.addEventListener('click', function() {
    const base = Number(document.querySelector('#paraBase').value);
    const height = Number(document.querySelector('#paraHeight').value);

    const baseElement = document.querySelector('#pBOutput');
    const heightElement = document.querySelector('#pHOutput');
    const allResult = document.querySelector('#all__result');

    baseElement.innerHTML = base;
    heightElement.innerHTML = height;
    const resultElement = document.createElement('li');
    resultElement.style.listStyle = 'orderList';
    resultElement.style.margin = '10px 0';
    resultElement.innerHTML = `Parallelogram : ${base * height}`;
    allResult.appendChild(resultElement);

    const convartBtn = document.createElement('b');
    convartBtn.innerText = 'Convart to m_2';
    convartBtn.style.padding = '10px';
    convartBtn.style.color = 'white';
    convartBtn.style.background = '#1090D8';
    convartBtn.style.borderRadius = '4px';
    allResult.appendChild(convartBtn);

    allResult.style.display = 'flex';
    allResult.style.flexDirection = 'column';

});

// Rhombus Geometry Function
const rhombusBtn = document.querySelector('#rhombus');

rhombusBtn.addEventListener('click', function() {
    const base = Number(document.querySelector('#pDiagonal').value);
    const height = Number(document.querySelector('#qDiagonal').value);

    const baseElement = document.querySelector('#rDOutput1');
    const heightElement = document.querySelector('#rDOutput2');
    const allResult = document.querySelector('#all__result');

    baseElement.innerHTML = base;
    heightElement.innerHTML = height;
    const resultElement = document.createElement('li');
    resultElement.style.listStyle = 'orderList';
    resultElement.style.margin = '10px 0';
    resultElement.innerHTML = `Rhombus : ${base * height}`;
    allResult.appendChild(resultElement);

    const convartBtn = document.createElement('b');
    convartBtn.innerText = 'Convart to m_2';
    convartBtn.style.padding = '10px';
    convartBtn.style.color = 'white';
    convartBtn.style.background = '#1090D8';
    convartBtn.style.borderRadius = '4px';
    allResult.appendChild(convartBtn);

    allResult.style.display = 'flex';
    allResult.style.flexDirection = 'column';

});


// Pentagon Geometry Function 
const pentagonBtn = document.querySelector('#pentagon');

pentagonBtn.addEventListener('click', function() {
    const base = Number(document.querySelector('#pentPremit').value);
    const height = Number(document.querySelector('#pentBase').value);

    const baseElement = document.querySelector('#pPOutput');
    const heightElement = document.querySelector('#pBOutput');
    const allResult = document.querySelector('#all__result');

    baseElement.innerHTML = base;
    heightElement.innerHTML = height;
    const resultElement = document.createElement('li');
    resultElement.style.listStyle = 'orderList';
    resultElement.style.margin = '10px 0';
    resultElement.innerHTML = `Pentagon : ${base * height}`;
    allResult.appendChild(resultElement);

    const convartBtn = document.createElement('b');
    convartBtn.innerText = 'Convart to m_2';
    convartBtn.style.padding = '10px';
    convartBtn.style.color = 'white';
    convartBtn.style.background = '#1090D8';
    convartBtn.style.borderRadius = '4px';
    allResult.appendChild(convartBtn);

    allResult.style.display = 'flex';
    allResult.style.flexDirection = 'column';

});


// Ellipse Geometry Function
const ellipseBtn = document.querySelector('#ellipse');

ellipseBtn.addEventListener('click', function() {
    const base = Number(document.querySelector('#axisA').value);
    const height = Number(document.querySelector('#axisB').value);

    const baseElement = document.querySelector('#eAOutput');
    const heightElement = document.querySelector('#eBOutput');
    const allResult = document.querySelector('#all__result');

    baseElement.innerHTML = base;
    heightElement.innerHTML = height;
    const resultElement = document.createElement('li');
    resultElement.style.listStyle = 'orderList';
    resultElement.style.margin = '10px 0';
    resultElement.innerHTML = `Ellipse : ${base * height}`;
    allResult.appendChild(resultElement);

    const convartBtn = document.createElement('b');
    convartBtn.innerText = 'Convart to m_2';
    convartBtn.style.padding = '10px';
    convartBtn.style.color = 'white';
    convartBtn.style.background = '#1090D8';
    convartBtn.style.borderRadius = '4px';
    allResult.appendChild(convartBtn);

    allResult.style.display = 'flex';
    allResult.style.flexDirection = 'column';

});