function Quiz(questions){
    this.score = 0;
    this.questions = questions
    this.questionIndex = 0
}

function Question(text , options , answer){
    this.text = text;
    this.options = options
    this.answer = answer
}

Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex]
}

Quiz.prototype.checkOptionWithanswer = function(ans){
    if(this.getQuestionByIndex().answer == ans){
        this.score++
    }
    this.questionIndex++
}

Quiz.prototype.isEnded = function(){
    return this.questionIndex == this.questions.length
}

/**
 * 1. Javascript supports --> Functions, XHTML, CSS, HTML --> Functions
 * 2. Which language used for styling web pages  --> HTML, JQuery, CSS, XML --> CSS
 * 3. Which is not a Javascript Framework --> Python, JQuery, Django, NodeJS --> Django
 * 4. Which is used to connect to Database --> PHP, HTML, JS, All --> PHP
 * 5. Javascript is a --> Language, Programming Language, Development, All -->  Programming Language
 */


let questions =[
    new Question("Which of the following is not javascript data types?",["Null type","Undefined type","Number type","All of the mentioned"],"All of the mentioned"),

    new Question (" Javascript is a",["Language", "Programming Language", "Development", "All"],"Programming Language"),
    
    new Question("When interpreter encounters an empty statements, what it will do",["Shows a warning","Prompts to complete the statement","Throws an error","Ignores the statements"],"Ignores the statements"),
    
    new Question ("Which is not a Javascript Framework",["Python","JQuery","Django","NodeJS"],"Django"),
    
    new Question ("The function and  var are known as",["Keywords","Data types","Declaration statements","Prototypes"],"Declaration statements"),]
    

let quiz = new Quiz(questions)

function displayQuestions(){
    
    if(quiz.isEnded()){
        showScores()
    }
    else{

    let questionElm = document.getElementById("question")
     questionElm.innerText = quiz.getQuestionByIndex().text

     let choices = quiz.getQuestionByIndex().options
     for(let i = 0; i<choices.length; i++){
        let elem = document.getElementById("choice"+i)
        elem.innerText = choices[i];
        handleClickOnBtn("btn"+i, choices[i])
     }

     showProgress()
    }
}

function showProgress(){
    let curr = quiz.questionIndex + 1
    let elem = document.getElementById("progress")
    elem.innerText = 'Question '+curr+' of '+quiz.questions.length
}
function handleClickOnBtn(id,choice){
    let buttonElem = document.getElementById(id)
    buttonElem.onclick = function(){
        quiz.checkOptionWithanswer(choice)
        displayQuestions()
    }
}
function showScores(){
    let result = '<h1>Result</h1><h2 id="score">Your Score: '+quiz.score+'. And marks percentage is: '+[(quiz.score/questions.length)*100] + '%</h2>'
    let quizElem = document.getElementById("quiz")
    quizElem.innerHTML = result
}
displayQuestions()