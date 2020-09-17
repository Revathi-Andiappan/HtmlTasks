
var mainDiv = createDiv();
document.body.append(mainDiv);

/* create main div */
function createDiv(){
    var mainDiv = document.createElement('div');
    mainDiv.setAttribute('class','container mainDiv');
    mainDiv.innerText="HIGH SCORES"; 
    var mainDiv1 = getUsersScores();
   
    var buttonDiv = document.createElement('div')
    var button = buttonCreateDiv("GO HOME","","\index.html");
    buttonDiv.append(button);
    mainDiv.append(mainDiv1);
    mainDiv.append(buttonDiv);
    return mainDiv;
}

/* Fetch High scores and username details from Local Storage */
function getUsersScores(){
    var highScoreMain = document.createElement('div');
    highScoreMain.setAttribute("style","color:rgb(45, 52, 54)");
    var keys = Object.keys(localStorage);
    var values = Object.values(localStorage);
    for(var i=0;i<keys.length;i++){
        var highScore = document.createElement('div');
        highScore.innerText = keys[i] + " : "+values[i];
        highScoreMain.append(highScore);
    }
    return highScoreMain;
}
/* Create page links */
function buttonCreateDiv(textValue, idValue, onclickLink){
    var buttonDiv = document.createElement('div')
    var button = document.createElement('div');
    button.setAttribute("value","play");
    button.setAttribute("id",idValue);
    button.setAttribute("onclick","document.location='"+onclickLink+"'");
    button.setAttribute("class","button button1");
    button.innerText=textValue;
    buttonDiv.append(button);
    return buttonDiv;
}
