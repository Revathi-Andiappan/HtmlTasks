            var mainDiv = createDiv();
            document.body.append(mainDiv);

            /* create main division */
            function createDiv(){
                var mainDiv = document.createElement('div');
                mainDiv.setAttribute('class','container mainDiv');
                mainDiv.innerText="QUICK QUIZ";
                var buttonDiv = document.createElement('div')
                var button1 = buttonCreateDiv("PLAY","play","\option.html");
                buttonDiv.append(button1);
                var button2 = buttonCreateDiv("HIGH SCORES","highScores","\highScores.html");
                buttonDiv.append(button2);
                mainDiv.append(buttonDiv);
                return mainDiv;
            }
            /* create next page links */
            function buttonCreateDiv(textValue, idValue, onclickLink){
                var buttonDiv = document.createElement('div')
                var button = document.createElement('button');
                button.setAttribute("value","play");
                button.setAttribute("id",idValue);
                button.setAttribute("onclick","document.location='"+onclickLink+"'");
                button.setAttribute("class","button");
                button.innerText=textValue;
                buttonDiv.append(button);
                return buttonDiv;
            }
