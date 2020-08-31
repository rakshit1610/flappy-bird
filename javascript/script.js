function start() {
    var elem = document.getElementById("bird");   
    var top =200;
   setInterval(gravity, 5);
    function gravity() {
      if(top<550){                        //adding gravity to bird
              top++; 
        elem.style.top = top + "px"; 
      }
    }
    document.addEventListener("click",function (e){
        if(top>30){                                                 //makes  bird jump
        top-=100;
        elem.style.top = top + "px";
        } 
    });
  
  }