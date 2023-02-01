"use strict";

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

let allLi = ``
const ul = document.querySelector('.questions')
for (let j = 0 ; j < questions.length ; j++) {
    const li = []
    li[j] = `<li>${questions[j].caption}<br><input type="radio" name="name${j}" id="Так"/>
 <label  htmlFor="Так">Так</label><br><input type="radio" name="name${j}" id="Ні"/>
 <label  htmlFor="Ні">Ні</label></li>`
    allLi = allLi + `${li[j]}`
}
ul.innerHTML =  allLi

document.querySelector(".check").addEventListener('click',function (){
    let result = 0
    for (let i = 0 ; i < (questions.length)*2 ; i=i+2) {
        const answer =[]
        answer[i] = document.querySelectorAll("input")[i].checked
        if (answer[i] === questions[i/2].correctAnswer ) {
            result++
        }
    }
    return alert(`Your result is : ${result} / ${questions.length}`)
} )

