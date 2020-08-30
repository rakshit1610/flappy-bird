function mymove() {
    var elem = document.getElementById("bird");   
    var top =200;
    
   setInterval(frame, 5);
    function frame() {
      if(top<550){
              top++; 
        elem.style.top = top + "px"; 
        console.log(top);
      }
    }
    document.addEventListener("click",function (e){
        if(top>30){
        top-=100;
        elem.style.top = top + "px";
        } 
    });
  
  }