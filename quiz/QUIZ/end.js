
            var mainDiv = createDiv();
            document.body.append(mainDiv);
            
            function createDiv(){
                var mainDiv = document.createElement('div');
                mainDiv.setAttribute('class','container mainDiv');
               mainDiv.innerText="YOUR SCORE : "+urlScore[1]; 
               var mainDiv1 = document.createElement('div');
               mainDiv1.innerHTML='<input type="text" id="userName" placeholder="username"></input><div onclick="saveName()">Save</div>'
                var buttonDiv = document.createElement('div')
                var button = buttonCreateDiv("PLAY AGAIN","","\option.html");
                buttonDiv.append(button);
                var button = buttonCreateDiv("GO HOME","","\index.html");
                mainDiv.append(mainDiv1);
                buttonDiv.append(button);
                mainDiv.append(buttonDiv);
                return mainDiv;
            }
            /* save high scores and username in local storage */
            function saveName(){
                localStorage.setItem(document.getElementById("userName").value,urlScore[1]);
                document.getElementById("userName").value="";
            }
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