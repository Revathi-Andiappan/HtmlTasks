var timerDiv = createDivCustom();
            let timerConsole = document.createElement('input');
            timerConsole.setAttribute("type","text");
            timerConsole.setAttribute("id","timerConsole");
            timerConsole.setAttribute("class","timerConsole");
            timerDiv.append(timerConsole);
            var count = 10;
        function timer(){
            setTimeout(function(){
                document.getElementById("timerConsole").value = count--
                    setTimeout(function(){
                        document.getElementById("timerConsole").value =  count--
                            setTimeout(function(){
                                document.getElementById("timerConsole").value =  count--
                                    setTimeout(function(){
                                        document.getElementById("timerConsole").value =  count--
                                            setTimeout(function(){
                                                document.getElementById("timerConsole").value =  count--
                                                    setTimeout(function(){
                                                        document.getElementById("timerConsole").value =  count--
                                                            setTimeout(function(){
                                                                document.getElementById("timerConsole").value =  count--
                                                                    setTimeout(function(){
                                                                        document.getElementById("timerConsole").value =  count--
                                                                            setTimeout(function(){
                                                                                document.getElementById("timerConsole").value =  count--
                                                                                    setTimeout(function(){
                                                                                        document.getElementById("timerConsole").value =  count--
                                                                                            setTimeout(function(){
                                                                                                document.getElementById("timerConsole").value =  "HAPPY NEW YEAR 2021"
                                                                                            },1000);
                                                                                    },1000);
                                                                            },1000);
                                                                    },1000);
                                                            },1000);
                                                    },1000);
                                            },1000);
                                    },1000);
                            },1000);
                    },1000);
            },1000);
        };
        if(count==1){
        document.getElementById("timerConsole").value =  "HAPPY NEW YEAR 2021"
        }
            var t2 = (timer());
            document.body.append(timerDiv);

           function createDivCustom(){
            let divEle = document.createElement('div');
            divEle.setAttribute("class", "container my-container");
            return divEle;
            }