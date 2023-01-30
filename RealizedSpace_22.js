"use strict";

//  Дано елементи розмітки

//<ul class="questions"></ul>
//<button class="check">Check result</button>
//  та список питань:

    const questions = [{
        caption: 'Подія натискання на елемент називається click?',
        correctAnswer: true
    },
        {
            caption: 'Усередині розмітки не можна додати обробник події?',
            correctAnswer: false
        },
        {
            caption: 'Припинити спливання події можна за допомогою метода stopImmediatePropagation?',
            correctAnswer: false
        },
        {
            caption: 'Припинити спливання події можна за допомогою метода stopPropagation?',
            correctAnswer: true
        }]

/*
Додати кожне запитання до елемента ul у вигляді чекбокс і текст запитання.

    По натисканню на кнопку "Перевірити" вивести повідомлення про кількість
    правильних відповідей і загальну кількість питань (наприклад "Your result is 3/4").

Програма має працювати для довільної кількості запитань.

   ******************************************************************************

Підказки:

    чекбокс це елемент input, у якого властивість type="checkbox"
щоб у коді перевірити, чи відмічений чекбокс, треба прочитати його булеву
властивість checked. у ній буде true, якщо галочка є, і false в протилежному випадку
щоб прочитати відповідь на якесь з питань, можна шукати відповідний чекбокс по індексу
якщо задача складна, можна її робити поетапно (переходити до наступного тільки після перевірки, що працює попередній), виконуючи наступні вправи:
    1) тільки додати чекбокс на сторінку з коду

2) додати чекбокс на сторінку з коду та по натисканню на кнопку вивести повідомлення, чи вибраний чекбокс

3) додати до ul тільки один елемент, який містить тільки текст першого запитання

4) додати до ul тільки один елемент, який містить чекбокс і текст першого запитання

5) додати до ul тільки один елемент, який містить чекбокс і текст першого запитання.
 Та по натисканню на кнопку вивести повідомлення, чи правильно відповів користувач

6) додати до ul тільки 2 елементи - у першому чекбокс і текст першого запитання,
 у другому чекбокс і текст другого запитання. Та по натисканню на кнопку вивести
  повідомлення з кількістю правильних відповідей з двох

7) зробити саме дз: додати до ul усі елементи, де кожен це чекбокс і текст
відповідного запитання. Та по натисканню на кнопку вивести повідомлення з кількістю
 правильних відповідей з усіх

 */
//document.querySelector(".check").onclick = function () {
document.querySelector(".check").addEventListener('click',function (){
    let result = 0
    for (let i = 0 ; i < questions.length ; i++) {
        const answer =[]
        answer[i] = document.querySelectorAll("input")[i].checked
        if (answer[i] === questions[i].correctAnswer ) {
            result++
        }
    }
    return alert(`Your result is : ${result} / ${questions.length}`)
} )