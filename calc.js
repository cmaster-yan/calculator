const display = document.getElementById('screen');
const buttons = document.getElementById('buttons').querySelectorAll('button');
buttons.forEach(item => item.classList.add('btn-' + item.innerText));
buttons.forEach(item => item.addEventListener('click', () => {
    pressButton(item);
}))
let operand1 = '';
let operand2 = '';
let operator = '';
let pressed = 0;
let lastPressed = '';

function pressButton(button){
    function isNumber(){
        let numbers = ['btn-0', 'btn-1','btn-2','btn-3','btn-4','btn-5',
                        'btn-6','btn-7','btn-8','btn-9','btn-0'];
        if (numbers.indexOf(button.getAttribute('class')) != -1) {
            return true;
        }
    }
    if (isNumber()){
        switch(button.getAttribute('class')) {
            case 'btn-0':
                if(lastPressed == 'op'){
                    display.innerText = 0;
                }
                if(display.innerText == '0'){
                    display.innerText = '';
                }
                display.innerText += '0';
                lastPressed = 'num';
                break;
            case 'btn-1':
                if(lastPressed == 'op'){
                    display.innerText = 0;
                }
                if(display.innerText == '0'){
                    display.innerText = '';
                }
                display.innerText += '1';
                lastPressed = 'num';
                break;
            case 'btn-2':
                if(lastPressed == 'op'){
                    display.innerText = 0;
                }
                if(display.innerText == '0'){
                    display.innerText = '';
                }
                display.innerText += '2';
                lastPressed = 'num';
                break;
            case 'btn-3':
                if(lastPressed == 'op'){
                    display.innerText = 0;
                }
                if(display.innerText == '0'){
                    display.innerText = '';
                }
                display.innerText += 3;
                lastPressed = 'num';
                break;
            case 'btn-4':
                if(lastPressed == 'op'){
                    display.innerText = 0;
                }
                if(display.innerText == '0'){
                    display.innerText = '';
                }
                display.innerText += '4';
                lastPressed = 'num';
                break;
            case 'btn-5':
                if(lastPressed == 'op'){
                    display.innerText = 0;
                }
                if(display.innerText == '0'){
                    display.innerText = '';
                }
                display.innerText += '5';
                lastPressed = 'num';
                break;
            case 'btn-6':
                if(lastPressed == 'op'){
                    display.innerText = 0;
                }
                if(display.innerText == '0'){
                    display.innerText = '';
                }
                display.innerText += '6';
                lastPressed = 'num';
                break;
            case 'btn-7':
                if(lastPressed == 'op'){
                    display.innerText = 0;
                }
                if(display.innerText == '0'){
                    display.innerText = '';
                }
                display.innerText += '7';
                lastPressed = 'num';
                break;
            case 'btn-8':
                if(lastPressed == 'op'){
                    display.innerText = 0;
                }
                if(display.innerText == '0'){
                    display.innerText = '';
                }
                display.innerText += '8';
                lastPressed = 'num';
                break;
            case 'btn-9':
                if(lastPressed == 'op'){
                    display.innerText = 0;
                }
                if(display.innerText == '0'){
                    display.innerText = '';
                }
                display.innerText += '9';
                lastPressed = 'num';
                break;
        }
    }
    else {
        switch(button.getAttribute('class')) {
            case 'btn-AC':
                operand1 = '';
                operand2 = '';
                operator = '';
                display.innerText = '0';
                pressed = 0;
                break;
            case 'btn-+/-':
                if (!display.innerText.includes('-') && display.innerText != 0){
                    display.innerText = '-' + display.innerText;
                }
                else {
                    display.innerText = display.innerText.replace('-', '');
                }
                break;
            case 'btn-C':
                if (lastPressed == 'num') {
                    if (display.innerText.length == 1 || display.innerText.length == 2 && display.innerText.includes('-')) {
                        display.innerText = 0;
                    }
                    else {
                        display.innerText = display.innerText.replace(display.innerText[display.innerText.length - 1], '');
                    }
                }
                break;
            case 'btn-/':
                if (lastPressed == 'op'){
                    operator = button.innerText;
                    return;
                }
                lastPressed = 'op'
                if(operator != '' && operator != button.innerText){
                    operand2 = display.innerText;
                    operand1 = operate(operand1, operator, operand2);
                    display.innerText = operand1
                    operator = button.innerText;
                    return;
                }
                pressed = 1;
                if(operand1 == ''){
                    operator = button.innerText;
                    operand1 = display.innerText;
                    operand1 = operate(operand1, operator, 1);
                }
                else {
                    operand2 = display.innerText
                    operand1 = operate(operand1, operator, operand2);
                    display.innerText = operand1;
                }
                break;
            case 'btn-*':
                if (lastPressed == 'op'){
                    operator = button.innerText;
                    return;
                }
                lastPressed = 'op'
                if(operator != '' && operator != button.innerText){
                    operand2 = display.innerText;
                    operand1 = operate(operand1, operator, operand2);
                    display.innerText = operand1
                    operator = button.innerText;
                    return;
                }
                pressed = 1;
                if(operand1 == ''){
                    operator = button.innerText;
                    operand1 = display.innerText;
                    operand1 = operate(operand1, operator, 1);
                }
                else {
                    operand2 = display.innerText
                    operand1 = operate(operand1, operator, operand2);
                    display.innerText = operand1;
                }
                break;
            case 'btn--':
                if (lastPressed == 'op'){
                    operator = button.innerText;
                    return;
                }
                lastPressed = 'op'
                if(operator != '' && operator != button.innerText){
                    operand2 = display.innerText;
                    operand1 = operate(operand1, operator, operand2);
                    display.innerText = operand1
                    operator = button.innerText;
                    return;
                }
                pressed = 1;
                if(operand1 == ''){
                    operator = button.innerText;
                    operand1 = display.innerText;
                    operand1 = operate(operand1, operator, 0);
                }
                else {
                    operand2 = display.innerText
                    operand1 = operate(operand1, operator, operand2);
                    display.innerText = operand1;
                }
                break;
            case 'btn-+':
                if (lastPressed == 'op'){
                    operator = button.innerText;
                    return;
                }
                pressed = 1;
                lastPressed = 'op'
                if(operator != '' && operator != button.innerText){
                    operand2 = display.innerText;
                    operand1 = operate(operand1, operator, operand2);
                    display.innerText = operand1
                    operator = button.innerText;
                    return;
                }
                if(operand1 == ''){
                    operator = button.innerText;
                    operand1 = display.innerText;
                    operand1 = operate(operand1, operator, 0);
                }
                else {
                    operand2 = display.innerText
                    operand1 = operate(operand1, operator, operand2);
                    display.innerText = operand1;
                }
                break;
            case 'btn-=':
                if (operand1 != '' && operator != ''){
                lastPressed = 'op';
                operand2 = display.innerText;
                display.innerText = operate(operand1, operator, operand2);
                operand1 = display.innerText;
                operand2 = ''
                }
                else {
                    break;
                }
                break;
            case 'btn-.':
                if (!display.innerText.includes('.')){
                    display.innerText += '.';
                }
                break;
        }
    }
}

function operate(a,operator,b){
    if(operator == '+'){
        return add(+a, +b);
    }
    else if(operator == '-'){
        return substract(a,b);
    }
    else if(operator == '*'){
        return multiply(a,b);
    }
    else if(operator == '/'){
        return divide(a,b)
    }
    function add(a,b) {
        return a+b;
    }
    
    function substract(a,b) {
        return a-b;
    }
    
    function multiply(a,b) {
        return a*b;
    }
    
    function divide(a,b) {
        if(b==0){
            return 'ERROR';
        }
        else {
            return a/b;
        }
    }
}

//va despues de isnumber()
/* if (isNumber()) {
    if (operator == ''){
    operand1 += button.innerText;
    display.innerText = operand1;
    }
else {
    operand2 += button.innerText;
    display.innerText = operand2;
}
}
if (!isNumber()){
    if(button.innerText == 'AC'){
        display.innerText = '0';
    }
    if(button.innerText == '=') {
        display.innerText = operate(operand1, operator, operand2);

    }
    if(operand1 != '' && operator != '' && operand2 !== ''){
        display.innerText = operate(operand1, operator, operand2);nuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
    }
    else{
        operator = button.innerText;
    }
} */