'use strict';

function ageInDays() {
    let currentDate = new Date();

    let day = document.querySelector('#day').value;
    let month = document.querySelector('#month').value;
    let year = document.querySelector('#year').value;

    let dateOfBirth = new Date(year + '-' + month + '-' + day);

    let difference = Math.abs(currentDate - dateOfBirth);
    let result = Math.round(difference/(1000 * 3600 * 24));

    if ((day === '') || (month === '') || (year === '')) {
        document.getElementById('result').innerHTML = 'You have to fill in the full date of birth.';
    } else if (dateOfBirth > currentDate) {
        document.getElementById('result').innerHTML = 'You can\'t be possibly that young!';
    } else if (isNaN(result) || isNaN(day) || isNaN(month) || isNaN(year)) {
        document.getElementById('result').innerHTML = 'Put in a proper date, dummy.';
    } else {
        let textAnswer = 'You are ' + result.toString() + ' days old. Congratulations!';
        // console.log(result);
    
        document.getElementById('result').innerHTML = textAnswer;
    }
}

function reset() {
    document.getElementById('result').innerHTML = '';
    let day = document.querySelector('#day').value = '';
    let month = document.querySelector('#month').value = '';
    let year = document.querySelector('#year').value = '';
}
