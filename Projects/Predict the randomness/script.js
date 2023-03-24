'use strict'
let numsArr = document.querySelectorAll('.number');
let randomNoEl = document.getElementById('random_number')
let messageEl = document.querySelector('.message')
let attemptsEl = document.getElementById('remaining_attempts')
let defatt = 50

for (let i = 0; i < numsArr.length; i++) {
    numsArr[i].addEventListener('click', function () {
        let userNo = +numsArr[i].textContent;
        let genratedNo = (Math.trunc(Math.random() * 10) + 1);
        randomNoEl.textContent = genratedNo
        if (genratedNo === userNo) {
            messageEl.textContent = 'Correct prediction :)'
        }
        else {
            messageEl.textContent = 'Wrong prediction :('
        }
        defatt--
        remaining_attempts.textContent = defatt
    });
}



