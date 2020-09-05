function start() {

  var elem = document.getElementById("bird");   
  var bottom =400;
  var score=0;
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
      if(score>=20){
        pipeLeft-=2.5;
      }
      else if(score>=10){
        pipeLeft-=2;
      }
      else{
      pipeLeft-=1.5;
      }
      }
      pipe.style.left= pipeLeft + "px";
      upperPipe.style.left= pipeLeft + "px";
      if (pipeLeft===-80 ){               //moves pipe towards left
        clearInterval(pipetimmer);
        document.querySelector('.frame').removeChild(pipe);    //pipe div is removed
        updateScore();
      }
     
      function updateScore(){
      if(pipeLeft<elem.style.left-79){
        score++;
        document.getElementById('sc').innerText=score;
      
      }
    }

      if(pipeLeft<258 && pipeLeft>160 && (bottom<(285+pipeBottom)||bottom>pipeBottom+300+200-64.7)|| bottom === 78 )   
       {
         gameover();         //bird touches track movement stops or touches pipe(160 and 275 for corner cases)
      }
      
      
    }

    if(gamerunning!=0)
    {
     


     if(score>=20){
      setTimeout(pipeCreator,1800);
    }
    else if(score>=10){
      setTimeout(pipeCreator,1800);
    }
    else{
      setTimeout(pipeCreator,2500);
    }
    }
  }

  pipeCreator();
  
  function gameover()
     {
      gamerunning=0;
      document.querySelector('.track').classList.remove('trackmove');
      clearInterval(timmer);


      window.setTimeout(()=>{
      document.querySelector('.endscreen').style.display="block";
      document.querySelector('#sc').style.display="none";
      document.querySelector('.final').innerText=score;
      
      },500)
    
      document.querySelector('.btn').addEventListener('click',()=>{
        window.location.reload();
         })
     }
     
}

