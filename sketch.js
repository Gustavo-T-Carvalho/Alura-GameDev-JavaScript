  function setup() {

    createCanvas(windowWidth, windowHeight);
    somDoJogo.loop();
    frameRate(40);
    jogo = new Jogo();
    jogo.setup();
    gameOver = new Cenario(imagemGameOver, 0)
    telaInicial = new TelaInicial();
    telaGameOver = new TelaGameOver();
    telaVitoria = new TelaVitoria();
    cenas = {
      jogo,
      telaInicial,
      telaGameOver,
      telaVitoria
    };
   
       botaoGerenciador = new BotaoGerenciador('iniciar',width/2,height/2);
       
  }

  function keyPressed() {
    jogo.keyPressed(key);
  }

  function draw(){
    cenas[cenaAtual].draw();
    if (cenaAtual === 'jogo'){
  
      jogo.draw();
    }else if(cenaAtual === 'telaGameOver'){
      telaGameOver.draw();
      
    }else if(cenaAtual === 'telaVitoria'){
      telaVitoria.draw();
      
    }
    
  }
    
    
  