var countryNames=[];

/* Get countries list API call*/
fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(response =>countryToDisplay(response))
.catch(); 

/* create Display view of countries*/
function countryToDisplay(response){
    response.forEach((country)=>{
        countryNames.push(country.name);
    })
    createMainDiv(response.length,response);
    return response;
}

/* creating Main div element */
function createMainDiv(displayLength,finalReport){
    let mainDiv = document.createElement('div');
    mainDiv.setAttribute("class", "");
    for(var i=0;i<displayLength;i++){
        var flag1 = finalReport[i].flag; 
        var name1 = finalReport[i].name; 
        var cardDiv =  createDivElement(flag1,name1);
        mainDiv.append(cardDiv);
    }
   document.body.append(mainDiv);
}

/* call to get weather API */ 
function fetchWeather(name1){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+name1+'&APPID=57b29ecc96e0ccd16931424f51ed9a7c';
    
    fetch(url)
    .then(response => response.json())
    .then(response => displayWeather(response) )
    .catch();
}

/* Display weather report after fetching weather API response*/
function displayWeather(response){
    document.getElementById(response.name).style.display="block";
    document.getElementById(response.name).innerText="TEMPERATURE: "+response.main.temp ;    
}

/* creating card, card text, card body element for display */
function createDivElement(flag1,name1){
    /* card  div*/
    let card = document.createElement('div');
    card.setAttribute("class", "card");
    card.setAttribute("style", "width:200px;height:200px;float:left;margin:8px;border-style:ridge;border-color:black;");
    /* card Body div*/
    let cardBody = document.createElement('div');
    cardBody.setAttribute("class", "card-body");
    cardBody.setAttribute("style","width:200px;height:120px;");
    /* card Title div*/
    let cardTitle = document.createElement('div');
    cardTitle.setAttribute("class", "card-title");
    cardTitle.setAttribute("style", "text-align:center");console.log("REVATHI"+name1);
    cardTitle.innerHTML='<div style=margin-top:10px;>'+name1+'</div><button><a class="btn btn-primary" onclick=fetchWeather("'+name1+'")>weather report</button><div style="display:none;color:rgb(187, 8, 8)" id="'+name1+'"><div>';
    /* card Text div*/
    let cardText = document.createElement('div');
    cardText.innerHTML='<img class="" style="height:120px;width:200px" src='+flag1+'>'
    cardText.setAttribute("class", "card-text");
    cardText.setAttribute("style","width:200px;height:120px;object-fit:contain;text-align:center;");
    /* appending all divs */
    cardBody.append(cardText);
    cardBody.append(cardTitle);
    card.append(cardBody);

    return card;
}
