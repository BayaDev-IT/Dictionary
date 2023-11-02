//============ События в DOM - Events =========

//1 способ
// const showMessage = () => {
//     alert('hello');
// }


// const skidysh = () => {
//     console.log('Bang Bang Bang');
// }


//2 Способ
// const btn = document.querySelector("#btn");

// btn.onclick = () => {
//     document.body.style.background = 'white';
// }

// btn.onmouseover = () => {
//     document.body.style.background = 'yellow';
// }

// const code = document.querySelector("#code");

// code.onmouseover = () => {
//     code.style.cssText = `
//     width: 300px;
//     height: 500px;
//     transition: 0.3s;
//     `
// }

// code.onmouseleave = () => {
//     code.style.cssText = `
//     width: 150px;
//     height: 300px;
//     transition: 0.3s;
//     `
// }

//=======================

// const resizeImg = () => {
//     code.style = 'transform: scale(1.5);'
// }
// const normalImg = () => {
//     code.style = 'transform: scale(1);'
// }

// code.onmouseover = resizeImg
// code.onmouseleave = normalImg

//===================== 3 способ ===============
// использовать прослушивать событий
// (Event Listener)

// const btn = document.querySelector("#btn");

// btn.addEventListener('click', () => {
//     alert('Hello')
// })

// const showMessage = () => {
//     alert('Say Hello')
// }

// btn.addEventListener('click', showMessage)



//===================

// const input1 = document.querySelector('#inp1');
// const input2 = document.querySelector('#inp2');
// const input3 = document.querySelector('#inp3');
// const btn = document.querySelector('#btn');
// const output = document.querySelector('.output');

// Ключ value -  возвращает значения введеное пользователем в инпутах 
// btn.addEventListener('click', () => {
    // output.append(input1.value,input2.value, input3.value)
    // output.textContent=`${input1.value} ${input2.value} ${input3.value}`
//     output.innerHTML = `
//     <h2>${input1.value}</h2>
//     <h2>${input2.value}</h2>
//     <h2>${input3.value}</h2>
//     `

//     input1.value = ''
//     input2.value = ''
//     input3.value = ''
// })

//=============== Calculator ===

// const inp1 = document.querySelector('#inp1')
// const inp2 = document.querySelector('#inp2')
// const inp3 = document.querySelector('#inp3')
// const btn = document.querySelector('#btn')
// const output = document.querySelector('.output')

// btn.addEventListener('click', () => output.innerHTML = eval(inp1.value + inp2.value + inp3.value))

// btn.addEventListener('click', () => {
//     let equal = 0;
//     if(inp2.value === '+') {
//         equal = +inp1.value + +inp3.value
//     } else if(inp2.value === '-') {
//         equal = inp1.value - inp3.value
//     } else if(inp2.value === '*') {
//         equal = inp1.value * inp3.value
//     } else if(inp2.value === '/') {
//         equal = inp1.value / inp3.value
//     }

//     output.innerHTML = `<h2>${equal}</h2>`

//     inp1.value = '';
//     inp2.value = '';
//     inp3.value = '';
// })

// ============ My way ========================
//btn.addEventListener('click', () => {
//     switch(inp2.value) {
//         case '+':  output.innerHTML = `
//         <h2>${+inp1.value + +inp3.value}</h2>
//         `
//         break;
//         case '-':  output.innerHTML = `
//         <h2>${+inp1.value - +inp3.value}</h2>
//         `
//         break;
//         case '*':  output.innerHTML = `
//         <h2>${+inp1.value * +inp3.value}</h2>
//         `
//         break;
//         case '/':  output.innerHTML = `
//         <h2>${+inp1.value / +inp3.value}</h2>
//         `
//         break;
//         default: alert('Enter please true value'); break;
//     }

//     inp1.value = '';
//     inp2.value = '';
//     inp3.value = '';
// })

// дз 
// //Почему 0.1 + 0.2 = 0.30000000000000004
// Проблема, которую вы видите здесь, связана с представлением чисел с плавающей запятой в компьютерах. Это не специфично для JavaScript, а является общей проблемой для большинства языков программирования, использующих арифметику с плавающей запятой. В основе этой проблемы лежит то, что внутреннее представление чисел с плавающей запятой в компьютере ограничено определенным количеством битов, что приводит к потере точности при выполнении операций с плавающей запятой.

// В JavaScript числа представляются с использованием стандарта двоичной арифметики с плавающей запятой двойной точности по стандарту IEEE 754. Это означает, что числа представлены в виде битовой последовательности, которая может быть приближенной к исходному числу, особенно когда речь идет о десятичных числах.

// Таким образом, когда вы выполняете операции с числами, которые не могут быть точно представлены в двоичной системе (например, 0.1 и 0.2, которые имеют бесконечные двоичные представления), происходят небольшие ошибки округления, что приводит к неточности в результатах.

// Есть несколько способов решения этой проблемы. Один из них - использовать специальные библиотеки, которые могут обрабатывать десятичные числа точнее, такие как BigDecimal. В JavaScript также можно использовать методы округления, такие как `toFixed`, чтобы получить желаемый результат. Например:

// ```javascript
// let result = 0.1 + 0.2;
// result = result.toFixed(1); // '0.3'
// ```

// Также можно умножить числа на определенное количество десятичных знаков, выполнить операции, а затем разделить результат на это же число, чтобы получить более точный результат.


// Calculator ===============================================

// let result = ''
// const display = document.createElement('input')
// display.value = result
// display.disabled = true
// const btnWrapper = document.createElement('div')


// document.body.append(display, btnWrapper);

// const arr = [
//     '7', '8', '9',
//     '4', '5', '6',
//     '1', '2', '3',
//     '+', '0', '-', '*',
//     '/', '=', 'AC', 'C'
// ];

// const getNumber = (event) => {
//     // console.log(event.target.value);
//     let num = event.target.value;
//     if(num == 'AC') {
//         result = '';
//     } else if(num == 'C'){
//         // result = result.slice(0, -1);
//         result = result.substring(0, result.length - 1);
//     } else if(num == '=') {
//         result = `${eval(result)}`;
//     } else {
//         result += num;
//     }
    
//     display.value = result;
// }

// arr.forEach(el => {
//     // console.log(el);
//     const btn = document.createElement('input');
//     btn.type = 'button';
//     btn.value = el;
//     btn.addEventListener('click', getNumber);

//     btnWrapper.append(btn);
// })





//=================================== my way ===================== calc

// const calculatorDiv = document.getElementById('calculator')
// for(let i = 0; i < arr.length; i++) {
//     const btn = document.createElement('button');
//     btn.textContent = arr[i];
//     calculatorDiv.appendChild(btn);
//     btn.addEventListener('click', function() {
//         if (btn.textContent === '=') {
//             try {
//                 const result = eval(output.textContent);
//                 output.textContent = result;
//             } catch (error) {
//                 output.textContent = 'Error';
//             }
//         } else if (btn.textContent === 'AC') {
//             output.textContent = '';
//         } else if (btn.textContent === 'C') {
//             output.textContent = output.textContent.slice(0, -1);
//         } else {
//             output.textContent += btn.textContent;
//         }
//     });
//     btn.style.cssText = `
//         width: 30px;
//         height: 30px;
//     `
// }

// calculatorDiv.style.cssText = `
// margin: 0 auto;
// display: flex;
// justify-content: center;
// align-items: center;
// gap: 25px;
// width: 150px;
// flex-wrap: wrap;
// `
// const wrapper = document.querySelector('.wrapper');
// wrapper.style.cssText = `
// display: flex;
// flex-direction: column-reverse;
// gap: 20px;
// justify-content: center;
// align-items: center;
// border: 2px solid black;
// width: 500px;
// margin: 0 auto;
// `

// const output = document.querySelector('.output');
// output.style.cssText = `
// height: 100px;
// width: 300px;
// background-color: aqua;
// display: flex;
// justify-content: end;
// align-items: flex-end;
// color: red;
// font-size: 30px;
// padding: 10px
// `
// const calcText = document.querySelector('h1')
// calcText.style.cssText = `
// display: flex;
// justify-content: center;
// `





// //==========================
// const body = document.body;
// body.append(btn)








//==========================================

const addEng = document.getElementById ('engword')
const addRus = document.getElementById ('rusword')
const btnAdd = document.querySelector ('#wordAdd')
const btnTest = document.querySelector ('#btnTest')
const divTest = document.querySelector ('.testModal')

divTest.style = 'display:none'

const h2 = document.querySelector ('h2')
const inpAnswer = document.querySelector ('#answer')
const btnCheck = document.querySelector ('#check')
const points = document.querySelector ('#points')

const dic = {
    apple: 'яблоко',
    pear: 'груша',
    orange: 'апельсин',
    apricot: 'абрикос',
    peach: 'персик',
}

let point = 0
let i = 0
let arrEng = []
let arrRus = []
let dictlenght = Object.keys(dic).length

btnAdd.addEventListener ('click', () => {
    if (!addEng.value || !addRus.value) {
        alert('Введите слова!!!!')
        
    } else {
        dic[addEng.value ] = addRus.value
        alert ('Слова добавлены')
        dictlenght = Object.keys(dic).length
        addEng.value = ''
        addRus.value = ''
        addPoints ()
    }
})


//========================================================================

const test = () => {
    divTest.style = 'display:block'
    
    for (let key in dic) {
        arrEng.push(key)
        arrRus.push (dic[key])
    }
    addQuestion()
    points.innerHTML = `${point} / ${dictlenght}`
}

btnTest.addEventListener ('click', test)

const addQuestion = () => {
    h2.innerHTML = arrEng[i]
}

const addPoints = () => {
    points.innerHTML = `${point} / ${dictlenght}`

}

const check = () => {
    if (inpAnswer.value == arrRus[i]) {
        alert ('Правильно!')
        point++
    } else {
        alert ('Неверно!')
    }
    i++

    if (arrEng.length <=i){
        i = 0
        point = 0
        divTest.style = 'display:none'
    } 
    addQuestion()
    addPoints()
    inpAnswer.value = ''
}

btnCheck.addEventListener ('click', check)
