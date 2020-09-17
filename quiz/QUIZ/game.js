var inputs=[];var correctAns =[];var scores=0;
var mainDiv = createDiv();
document.body.append(mainDiv);
var cookieDetails = document.cookie.split(";");  
var cookieDetail;
/* getting dificculty and catogary details from cookies stored in option.js */
for(var i=0;i<cookieDetails.length;i++){
    var charAtValue = cookieDetails[i].indexOf("=");
    inputs[i] = cookieDetails[i].slice(charAtValue+1);  
}

fetchApiDetails();

/* Asyn call to fetch api questions and answers */
async function fetchApiDetails(){
    var apiInfo = await fetch('https://opentdb.com/api.php?amount=10&category='+inputs[1]+'&difficulty='+inputs[0]+'&type=multiple');
    var apiData = await apiInfo.json();
    createTemplate(apiData);
}
/* creating template for questions and answers by setting interval of 5 secs for each questions */
function createTemplate(apiData){
    var i=0;
    setInterval(function(){
        if(i>=1&&i<10){document.getElementById("mainDiv1").remove();
         document.getElementById("choice").remove();
        }
        if(i<10){
        var mainDiv1 = createDiv();
        mainDiv1.setAttribute("id","mainDiv1");
        document.body.append(mainDiv1);
        mainDiv1.append(apiData.results[i].question);
        createAnswers(apiData,i);i++;
        endGame(i);
        }
    },5000)
}

/* passing details oh result of high scores to end.html */
function endGame(i){
    if(i==10){
        document.getElementById("mainDiv1").remove();
        document.getElementById("choice").remove();
        var mainDiv = createDiv();
        mainDiv.innerText = "your Score is"+scores;
        document.location='end.html?score='+scores;
    document.body.append(mainDiv); 
    }
}

/* fetching correct answers and inserting into array of wrong answers and shuffling the options randomly by using math.random() */
function createAnswers(apiDataAnswers,i){
    var answersMainDiv =  document.createElement('div');
        answersMainDiv.setAttribute("id","choice");
        correctAns[i]=apiDataAnswers.results[i].correct_answer;
        var randomPos = Math.floor(Math.random()*4);
        apiDataAnswers.results[i].incorrect_answers.splice(randomPos,0,apiDataAnswers.results[i].correct_answer);
        apiDataAnswers.results[i].incorrect_answers.forEach(answers => {
        var answersDiv =  document.createElement('div');
        answersDiv.setAttribute("class","choice-text");
        answersDiv.setAttribute("id","choice-text");
        answersDiv.setAttribute("value",answers);
        answersDiv.setAttribute("onclick",'validateAnswers("'+answers+"*"+apiDataAnswers.results[i].correct_answer+'")');
        answersDiv.innerText = answers;
        answersMainDiv.append(answersDiv);
        document.body.append(answersMainDiv);
    });
    
}

/* Validation the answers pressed */
function validateAnswers(answers){
    answer = answers.split("*");
    if(answer[0]==answer[1]){ scores=scores+10;}
}

function createDiv(){
    var mainDiv = document.createElement('div');
    mainDiv.setAttribute('class','container mainDiv');
    return mainDiv;
}
