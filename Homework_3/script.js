const startValue = document.querySelector('.start-value');
const endValue = document.querySelector('.end-value');
const fizzValue = document.querySelector('.fizz-value');
const buzzValue = document.querySelector('.buz-value');
const container = document.querySelector('.box-container');

function createBox() {
    const box = document.createElement('div');
    box.classList.add('box')
    const boxText = document.createElement('p')
    boxText.classList.add('box-text')
    box.appendChild(boxText)

    return [box, boxText];
}

function generateText(index) {
    if (index % fizzValue.value === 0) {
        return `${index}=Fizz`
    } else if (index % buzzValue.value === 0) {
        return `${index}=Buzz`
    }

    return index;
}

function resetFields() {
    startValue.value = 1;
    endValue.value = 100;
    fizzValue.value = 3;
    buzzValue.value = 5;

    refresh()
}

function refresh() {
    clearBoxes();
    for (let i = startValue.value; i <= endValue.value; i++) {
        const [box, boxText] = createBox();
        boxText.innerText = generateText(i);
        container.appendChild(box);
    }
}

function clearBoxes() {
    container.innerHTML = '';
}

resetFields();
