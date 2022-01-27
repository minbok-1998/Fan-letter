const question = document.createElement('h1');
const firstAnswer = document.createElement('button');
firstAnswer.classList.add('first');
const secondAnswer = document.createElement('button');

test.appendChild(question);
test.appendChild(firstAnswer);
test.appendChild(secondAnswer);

let i = 0;

question.innerText = testArr[i].question;
firstAnswer.innerText = testArr[i].answerOne;
secondAnswer.innerText =  testArr[i].answerTwo;

function resultOne() {
    test.remove();
    
    const result = document.querySelector('#result');
    const CharacterImg = document.createElement('img');
    const CharacterName = document.createElement('p');
    CharacterName.classList.add('name');
    const CharacterInfo = document.createElement('p');
    CharacterInfo.classList.add('info');
    const CharacterDetail = document.createElement('p');
    CharacterDetail.classList.add('detail');

    result.appendChild(CharacterImg);
    result.appendChild(CharacterName);
    result.appendChild(CharacterInfo);
    result.appendChild(CharacterDetail);

    if(i == 5) {
        i = i-5;
    } else if(i == 7) {
        i = i-3;
    } else if(i == 9) {
        i = i-7
    } else if(i = 10) {
        i = i-9;
    }

    CharacterName.innerText = resultArr[i].name;
    CharacterInfo.innerText = resultArr[i].intro;
    CharacterDetail.innerText = resultArr[i].detail;
}

function resultTwo() {
    test.remove();
    
    const result = document.querySelector('#result');
    const CharacterImg = document.createElement('img');
    const CharacterName = document.createElement('p');
    CharacterName.classList.add('name');
    const CharacterInfo = document.createElement('p');
    CharacterInfo.classList.add('info');
    const CharacterDetail = document.createElement('p');
    CharacterDetail.classList.add('detail');

    result.appendChild(CharacterImg);
    result.appendChild(CharacterName);
    result.appendChild(CharacterInfo);
    result.appendChild(CharacterDetail);

    if(i ==7) {
        i = i-2;
    } else if(i == 9) {
        i = i-6;
    } else if(i == 10) {
        i = i-4;
    }

    CharacterName.innerText = resultArr[i].name;
    CharacterInfo.innerText = resultArr[i].intro;
    CharacterDetail.innerText = resultArr[i].detail;
}

function first() {
    if(i == 0) {
        i = i+1;
    } else if(i == 1) {
        i = i+3;
    } else if(i == 2) {
        i = i+1;
    } else if(i == 3){
        i =i+8;
    } else if(i == 4) {
        i = i+2;
    } else if(i == 5) {
        resultOne();
    } else if(i == 6) {
        i = i+1;
    } else if(i == 7) {
        resultOne();
    } else if(i == 8) {
        i = i-5;
    } else if(i == 9) {
        resultOne();
    } else if(i == 10) {
        resultOne();
    }

    question.innerText = testArr[i].question;
    firstAnswer.innerText = testArr[i].answerOne;
    secondAnswer.innerText =  testArr[i].answerTwo;

    return i;
}

function second() {
    if(i == 0) {
        i = i+2;
    } else if(i == 1){
        i = i+7;
    } else if (i == 2) {
        i = i+6;
    } else if(i == 3){
        i = i+7;
    } else if(i == 4) {
        i = i+1;
    } else if(i == 5) {
        i = i+5;
    } else if(i ==6) {
        i =i+3;
    } else if(i == 7) {
        resultTwo();
    } else if(i == 8) {
        i = i-2;
    }else if(i == 9) {
        resultTwo();
    } else if(i == 10) {
        resultTwo();
    } 

    question.innerText = testArr[i].question;
    firstAnswer.innerText = testArr[i].answerOne;
    secondAnswer.innerText =  testArr[i].answerTwo;

    return i; 
}

firstAnswer.addEventListener('click', first);
secondAnswer.addEventListener('click', second);