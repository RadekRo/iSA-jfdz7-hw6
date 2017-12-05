var sender = 'mikey';
var receiver = 'JANE';
var sms = '   Hello Jane, I am really tired today, I will call you tommorrow.         ';

var firstName = 'John';
var lastName = 'Doe';

function smsGenerator(a, b, c) {
    var smsSender = a.substr(0,1).toUpperCase() + a.substr(1).toLowerCase();
    var smsReceiver = b.substr(0,1).toUpperCase() + b.substr(1).toLowerCase();
    var smsBody = c.trim();

    return '(FROM: ' + smsSender + ') (TO: ' + smsReceiver + ') (MESSAGE: ' + smsBody + ')';
}

function showInitials(name, surname) {
    var firstInitial = name.substr(0,1).toUpperCase();
    var secondInitial = surname.substr(0,1).toUpperCase();

    return firstInitial + '.' + secondInitial;
}

function randomNumber() {
    var luckyNumber = Math.random() * 100;
    luckyNumber = luckyNumber.toFixed(2);
    return 'Twoja szczęśliwa liczba to: ' + luckyNumber;
}

function getDinnerPrice() {
    var dinnerTip = 20;
    var dinnerPrice = 100;
    return dinnerTip + dinnerPrice;

}

console.log("Exercise #1:\n" + smsGenerator(sender, receiver, sms));
console.log("Exercise #2:\n" + showInitials(firstName, lastName));
console.log("Exercise #3:\n" + randomNumber());
console.log("Exercise #4:\n" + getDinnerPrice());
