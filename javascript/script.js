function start() {

  var elem = document.getElementById("bird");   
  var bottom =400;
  let gamerunning=1;
  document.querySelector('.track').classList.add('trackmove');
 let timmer=setInterval(frame, 6);
  function frame() {
      if(gamerunning){             //adding gravity to bird
    bottom--; 
      elem.style.bottom = bottom + "px"; 
      }
  }
  document.addEventListener("click",jump)
  function jump(){
      if(bottom<510 && gamerunning){
        console.log(bottom)
      bottom+=90;                                //makes  bird jump
      elem.style.bottom = bottom + "px";
      } 
  }

  function pipeCreator(){
    var pipeLeft= 1300;
    var Heightvar= (-60)+Math.random()*(40-(-60));
    var pipeBottom= Heightvar;    // creates pipe of random height
    var pipe= document.createElement('div');
    var upperPipe= document.createElement('div');
    pipe.classList.add('pipe');
    upperPipe.classList.add('upperPipe');
    if(gamerunning){
    document.querySelector('.frame').appendChild(pipe);  // a div added as pipe
    document.querySelector('.frame').appendChild(upperPipe);
  }
    pipe.style.bottom= pipeBottom + "px";
    pipe.style.left= pipeLeft + "px";
    upperPipe.style.left= pipeLeft + "px";
    upperPipe.style.bottom= pipeBottom+ 500 + "px";

    var pipetimmer= setInterval(movepipe, 4);

    function movepipe(){
      if(gamerunning){
      pipeLeft--;
      }
      pipe.style.left= pipeLeft + "px";
      upperPipe.style.left= pipeLeft + "px";
      if (pipeLeft===-80 ){               //moves pipe towards left
        clearInterval(pipetimmer);
        document.querySelector('.frame').removeChild(pipe);    //pipe div is removed
      }
     
      if(pipeLeft<258 && pipeLeft>160 && (bottom<(285+pipeBottom)||bottom>pipeBottom+300+200-64.7)|| bottom === 78 )   
       {
         gameover();         //bird touches track movement stops or touches pipe(160 and 275 for corner cases)
      }
      
      
    }

    if(gamerunning!=0)
    {
     setTimeout(pipeCreator,3500);
    }
  }

  pipeCreator();
  
  function gameover()
     {
      gamerunning=0;
      document.querySelector('.track').classList.remove('trackmove');
      clearInterval(timmer);
      
     }

}

