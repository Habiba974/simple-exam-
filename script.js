const score= document.querySelector("#score")
const questionArea= document.querySelector("#question-area")

let myScore=0
score.textContent=myScore

const questions=[
    {
        question:"What is the capital of India?",
        option:['New Delhi','Mumbai','Bangalore'],
        answer:0
    },

    {
        question:"Who is the founder of Microsoft?",
        option:['Bill Gates','Mark Zuckerberg','Jeff Bezos'],
        answer:0
    },
    {
        question:"What is the capital of Australia??",
        option:['Melbourne','Canberra','Sydney'],
        answer:1
    },
    {
        question:"Who painted the Mona Lisa?",
        option:[' Leonardo da Vinci','Vincent van Gogh','Michelangelo'],
        answer:0
    },
    {
        question:"Which country won the FIFA World Cup in 2018?",
        option:['Germany','Argentina','France'],
        answer:2
    },
    {
        question:"Who is the author of the Harry Potter series?",
        option:['Stephen King','George R.R. Martin','J.K. Rowling'],
        answer:2
    },
 
]




function displayQuestion(){
    questions.forEach(que=>{

       const questionDiv= document.createElement('div')
       questionDiv.classList.add('question-box')
     
       const logo=document.createElement('h1')
       logo.textContent='📝'
       questionDiv.append(logo)

  const questionText = document.createElement('p');
    questionText.textContent = que.question;
    questionDiv.appendChild(questionText);

const quButtons=document.createElement('div')
quButtons.classList.add('button-box')
questionDiv.append(quButtons)

//*looping in option to get into array
que.option.forEach((option, index) => {
const btn = document.createElement('button');
      btn.classList.add('btn');
      btn.textContent = option;

      btn.addEventListener('click', (event) => {
        if (index === que.answer) {
          myScore++;
          score.textContent = myScore;
           addResult(questionDiv, 'Correct!', 'correct')
            event.target.classList.add('correct');
        }else{
            addResult(questionDiv, 'Wrong!', 'wrong')
            event.target.classList.add('wrong');
        }
   disableButtons(quButtons, event.target);
  event.target.disabled = true;
});
      quButtons.appendChild(btn);
    });

const showAnwser=document.createElement('div')
showAnwser.classList.add('show-anwser')
questionDiv.append(showAnwser)

       questionArea.appendChild(questionDiv)
    })

}
displayQuestion()

function addResult(questionDiv, answer, className) {
  const answerDisplay = questionDiv.querySelector('.show-anwser')
  answerDisplay.classList.remove('wrong')
  answerDisplay.classList.remove('correct')
  answerDisplay.classList.add(className)
  answerDisplay.textContent = answer
}

function disableButtons(buttonBox, selectedButton) {
  const buttons = buttonBox.querySelectorAll('button');
  buttons.forEach((button) => {
    if (button !== selectedButton) {
      button.disabled = true;
    }
  });
}