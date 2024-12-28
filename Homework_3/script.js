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
    if (index % fizzValue.value === 0 && index % buzzValue.value === 0) {
        return { text: `${index}=FizzBuzz`, className: 'fizzbuzz' };
    } else if (index % fizzValue.value === 0) {
        return { text: `${index}=Fizz`, className: 'fizz' };
    } else if (index % buzzValue.value === 0) {
        return { text: `${index}=Buzz`, className: 'buzz' };
    }

    return { text: index, className: '' };
}

function refresh() {
    clearBoxes();
    for (let i = startValue.value; i <= endValue.value; i++) {
        const [box, boxText] = createBox();
        const result = generateText(i);
        boxText.innerText = result.text;
        
        if (result.className) {
            box.classList.add(result.className);
        }
        
        container.appendChild(box);
    }
}

function clearBoxes() {
    container.innerHTML = '';
}

resetFields();