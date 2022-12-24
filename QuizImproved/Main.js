let score = 0;
let currentQuestion = 0;
let  quizEl = document.getElementById("quiz");
const questions =[
    {
        ques:'India lies in which continent?',
        ans:['Asia','North America','Africa','Australia'],
        correct: 0
    },
    {
        ques:'What is the capital of India',
        ans:['Bangalore','Delhi','Chennai','Bombay'],
        correct: 1
    },
    {
        ques:'Who is named the Nightingale of India?',
        ans:['Margaret Atwood','Mother Teresa','Michelle Obama','Sarojini Naidu'],
        correct: 3
    },
    {
        ques:'Which is the national Bird of India?',
        ans:['Crow ','Swan','Peacock','Duck'],
        correct: 2
    },
]
function  init(i)
{
    // console.log(currentQuestion);

    quizEl.innerHTML=`   <form id="Ques">
    <h2>${currentQuestion+1 +". "+questions[i].ques}</h2>
    <ul>
      <li><input type="radio" value="0" name="Ans">${questions[i].ans[0]}</li>
      <li><input type="radio" value="1" name="Ans">${questions[i].ans[1]}</li>
      <li><input type="radio" value="2" name="Ans">${questions[i].ans[2]}</li>
      <li><input type="radio" value="3" name="Ans">${questions[i].ans[3]}</li>
    </ul>

    <button type="submit">Sumit</button>
  </form>`
 
    currentQuestion +=1;

}

document.addEventListener("submit", function(e) {
        e.preventDefault();
        console.log(currentQuestion);
        if (currentQuestion!=0)
        {
            const tarSel=e.target.querySelector('input[type=radio]:checked')
            if (tarSel==null)
            {
                return alert("Please select an answer");
            }

            updateResult(tarSel,currentQuestion-1);
        }
        
       
        if (currentQuestion > questions.length-1)
        {

             quizEl.innerHTML=`<div><h2>Quiz Completed</h2><h2>Score : ${score}</h2><form id="Ques"><br><button type="submit">Re Start Test</button></form></div>`
        
            currentQuestion=0;
            score=0
             
        }
        else{
            //console.log(e);
         init(currentQuestion);}
        

});

function updateResult(selIn,quesIndex)
{
// console.log(selIn.value);
// console.log(questions[quesIndex].correct);
if(selIn.value ==questions[quesIndex].correct)
{
    score+=1;
}
console.log(selIn)
console.log("score:"+score);
}
