let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = 
[
    'Be yourself; everyone else is already taken.' , 'Be the change that you wish to see in the world.' ,
    'Live as if you were to die tomorrow. Learn as if you were to live forever.' , 'We accept the love we think we deserve.' , 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle' ,
    'I have not failed. Ive just found 10,000 ways that wont work.' , 'It is never too late to be what you might have been.' ,
    'In the Soviet army it takes more courage to retreat than advance.' , 'Only the dead have seen the end of war.' ,
    'He who fears being conquered is sure of defeat.' , 'You have power over your mind - not outside events. Realize this, and you will find strength.' , 
    'The best revenge is to be unlike him who performed the injury.' , 'It is not death that a man should fear, but he should fear never beginning to live.' ,
    'If it is not right do not do it, if it is not true do not say it.' , 'We suffer more often in imagination than in reality' , 'Be tolerant with others and strict with yourself.' ,
    'We are more often frightened than hurt' , 'I begin to speak only when Im certain what Ill say isnt better left unsaid.' ,
    'Logic will get you from A to Z imagination will get you everywhere.' , 'Life is like riding a bicycle. To keep your balance, you must keep moving.' , 'A clever person solves a problem. A wise person avoids it.' , 
    'Science without religion is lame, religion without science is blind.'
];
btn.addEventListener ('click' , function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})