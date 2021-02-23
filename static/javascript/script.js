'use strict';

const ageTwenty = 7300;
const ageJeanne = 44695;

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
        if (result < ageTwenty) {
            let textAnswer = 'You are ' + result.toString() + ' days old. Congratulations!';
            document.getElementById('result').innerHTML = textAnswer;
        } else if ((result >= ageTwenty) && (result < ageJeanne)) {
            let textAnswer = 'You are ' + result.toString() + ' days old. Impressive!';
            document.getElementById('result').innerHTML = textAnswer;
        } else {
            document.getElementById('result').innerHTML = 'Value_ERROR: ~!F@u(_7Y#$1NPU7%^&*(_+{"|<3!';
            setTimeout(function() {
                document.getElementById('result').innerHTML = 'Just kidding.';
            }, 3000);
            setTimeout(function() {
                document.getElementById('result').innerHTML = 'You are ' + result.toString() + ' days old which makes you the oldest person ever. You are truly amazing!';
            }, 5000);
        }
    }
}


function reset() {
    document.getElementById('result').innerHTML = '';
    let day = document.querySelector('#day').value = '';
    let month = document.querySelector('#month').value = '';
    let year = document.querySelector('#year').value = '';
}

var myVar = setInterval(count, 1);

var counter = 0;

function count() {      
        document.getElementById('nrms').innerHTML =`While viewing this website you just got ${counter} milliseconds older.`;
        counter++;  
}
