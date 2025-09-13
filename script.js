let btn = document.getElementById('btn');
let answers = document.getElementById('answers');

let quotes = [
    '-Maybe-',
    '-Sometime-',
    '-Not now-',
    '-Anytime can happen-',
    '-Never-',
    '-Act Brave-',
    '-You will not be disappointed-',
    '-Focus on this-',
    '-Enjoy it-',
    '-Definitely-',
    '-Do it once-',
    '-Dont do that-',
    '-Take a rest for a while-',
    '-Impossible-',
    '-Absolutely yes-',
    '-Go for it-',
    '-Better late than never-',
    '-Slowly-',
    '-Just do it-',
    '-Dont tell anyone-',
    '-This is crazy-',
    '-You should get some help-',
    '-Why not?-',
    '-There is a chance-',
    '-No way-',
    '-You wil find yourself in a better position-',
    '-Listen to advices-',
    '-Learn more-',
    '-Yes-',
    '-No-',
    '-Depends on you-',
    '-Be patient-',
    '-Postpone this for later-',
    '-Dont ask for it-',
    '-Dont worry-',
    '-Stay on your first desicion-',
    '-Is is not recommended-',
    '-Prove them wrong-',
    '-It will be so boring-',
    '-Dont listen anyone-',
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    answers.innerHTML = randomQuote;
})