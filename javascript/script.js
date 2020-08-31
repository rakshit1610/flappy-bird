function mymove() {
    var elem = document.getElementById("bird");   
    var top =50;
    
   setInterval(frame, 5);
    function frame() {
      if(top<465){
              top++; 
        elem.style.top = top + "px"; 
        console.log(top);
      }
    }
    document.addEventListener("click",function (){
        if(top>30){
        top-=100;
        elem.style.top = top + "px";
        } 
    });

    function pipeCreator(){
      var pipeLeft= 700;
      var Heightvar= Math.random()*70;
      var pipeBottom= Heightvar;
      var pipe= document.createElement('div');
      pipe.classList.add('pipe');
      document.querySelector('.frame').appendChild(pipe);
      pipe.style.bottom= pipeBottom + "px";
      pipe.style.left= pipeLeft + "px";
  
  
      var id= setInterval(movepipe, 10);
  
      function movepipe(){
        pipeLeft--;
        pipe.style.left= pipeLeft + "px";
  
        if (pipeLeft===-80){
          clearInterval(id);
          document.querySelector('.frame').removeChild(pipe);
        }
      }
  
      setTimeout(pipeCreator,3500);
    }
  
    pipeCreator();
  
  
  }

  