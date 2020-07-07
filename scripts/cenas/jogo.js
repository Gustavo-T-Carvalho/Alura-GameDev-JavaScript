class Jogo {
  constructor() {
    this.inimigoAtual = 0;
  }

  setup() {

    cenario = new Cenario(imagemCenario,imagemCenario, 1,2400,height);
    ceu = new Cenario (imagemCeu,imagemCeu,4,1500,400);
    personagem = new Personagem(imagemPersonagem, 0, 30, 110, 135, 53, 73, 6, 6 , imagemCorrendo);
    const inimigoTerrestre = new Inimigo(imagemInimigoTerrestre, width, 30, 108, 130, 54, 65, 6, 6, 10, 100)
    const inimigoGrande = new Inimigo(imagemInimigoGrande, width, 0, 200, 200, 100, 118, 6, 6, 25, 500)
    megazordCaido = new Animacao(imagemMegazordCaido,width-300,0,300,200,width,height,1,1);
    
    
  
    const inimigoVoador = new Inimigo(imagemInimigoVoador, width, 200, 75, 75, 29, 29, 7, 7, 12, 400)
    const poder = new Item(imagemPoder, width*2, height*2, 50, 50,3);
    const moeda = new Item(imagemMoeda, width , height , 50, 50,2);
    const coracao = new Item(imagemCoracao, width *3, height*3, 50, 50,4);
    contadorPoder = 0;
    podeContar = false;
    pontuacao = new Pontuacao();
    inimigos.push(inimigoTerrestre);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
    itens.push(coracao)
    itens.push(moeda);
    itens.push(poder);
    vidas = new Vidas(imagemCoracao, 3);
    frameRate(30)
  }


  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula(somDoPulo);
      
    }
    
    
    
  }
 

  draw() {
    if (pontuacao.pontos>100 && cenario.atual==="cidade"){
      cenario.mudaCenario();
      
    }
    
    if (pontuacao.pontos>250){
      cenario.paraCenario();
      ceu.paraCenario();
      pararObjetos=true;
      
    }
    if (podeContarAbaixado){

      contadorAbaixado +=1;
    }
    frameParaAnimacoes = frameParaAnimacoes +1;
    if (aconteceuGameOver) {
      menorValorVelocidade = 7;
      maiorValorVelocidade = 12;
      cenario.imagem = imagemCenario;
      cenario.segundaImagem = imagemCenario;
      cenario.mudouImagem1 = 0;
      cenario.mudouImagem2 = 0;
      cenario.x1=0;
      cenario.x2=1200;
      frameParaAnimacoes = 0;
      somDoJogo.loop();
      vidas.vidas = 3;
      personagem.posicaoX = 0;
      personagem.posicaoY = height - personagem.alturaPersonagem;
      pontuacao.pontos = 0;
      inimigos.forEach(inimigo => {
        inimigo.posicaoX = width + inimigo.larguraPersonagem;
        
      })
       itens.forEach(item => {
        item.posicaoX = width + int(random(1,3))*width;
      })

      personagem.poder = false;
      aconteceuGameOver = false;
    }
    if (contadorAbaixado == 4){
      personagem.abaixado = false;
      podeContarAbaixado = false;
    }

    if (pontuacao.pontos > 100) {
      menorValorVelocidade = (10)
      maiorValorVelocidade = (18)
    }
    
    ceu.exibe();
      cenario.exibe();
    
    if(pararObjetos){
      megazordCaido.exibeMegazordCaido();
      if (personagem.estaColidindo(megazordCaido)) {
        
        cenaAtual = 'telaVitoria';
      }
    }
      ceu.move();
    
    
    contadorDeFrame = contadorDeFrame + 1;
    pontuacao.exibe();

    if (podeContar) {
      contadorPoder += 1;
      cenario.velocidade = 3;
      if (contadorPoder == 150) {
        personagem.desativaPoder();
        cenario.velocidade = 1;
        
      }

    }

    if (contadorDeFrame === 30 && !pararObjetos) {
      pontuacao.adicionaPonto(personagem.poder);
      contadorDeFrame = 0;

    }

    personagem.exibe(frameParaAnimacoes, 5);
    personagem.aplicaGravidade();
    vidas.exibe();


    itens.forEach(item => {
      if (item.velocidadeSetada == false) {

        velocidade = int(random( 7,10));
        item.setVelocidade(velocidade);
      }
      if (item.alturaSetada == false) {
        altura = int(random(200, 450));
        item.setAltura(altura)
      }
      if (!pararObjetos){
        item.exibe();
        item.move();
      }
      if (personagem.estaColidindo(item)) {
        if (item.imagem == imagemMoeda) {
          somMoeda.play();
          pontuacao.pegouMoeda(personagem.poder);
          item.removeDaTela();
        } else if (item.imagem == imagemPoder) {
          somPoder.play();
          personagem.aplicaPoder();
          
          item.removeDaTela();
          contadorPoder = 0;
          podeContar = true;
        } else {
          somVida.play();
          item.removeDaTela();
          vidas.ganhouVida();
        }

      }

    })

    
    if (keyIsDown(RIGHT_ARROW) && !personagem.abaixado) {
      personagem.andaFrente();
      cenario.movendoFrente();
    }

    if (keyIsDown(LEFT_ARROW) && !personagem.abaixado) {
      personagem.andaAtras();
      cenario.movendoTras();
    }
    if (keyIsDown(DOWN_ARROW)) {
      personagem.desceMaisRapido();
      personagem.abaixado = true;
      podeContarAbaixado = true;
      contadorAbaixado = 0;
    }
    
    cenario.move();
    cenario.resetaVelocidade();
    const inimigo = inimigos[this.inimigoAtual]

    const inimigoInvisivel = !inimigo.saiuDaTela();
    if (inimigo.visivel == false) {
      inimigo.visivel = true;
      inimigo.velocidadeSetada = false;
      inimigo.alturaSetada = false;
    }

    if (inimigo.velocidadeSetada == false) {

      velocidade = int(random(menorValorVelocidade, maiorValorVelocidade));

      inimigo.setVelocidade(velocidade);
    }
    if (inimigo.alturaSetada == false && inimigo.imagem == imagemInimigoVoador) {
      
      altura = int(random(180, 420));
      
      inimigo.setAltura(altura)
    }
    if (!pararObjetos){
    inimigo.exibe(frameParaAnimacoes,5)
    }
    inimigo.move();

    if (inimigoInvisivel) {
      this.inimigoAtual = int(random(3));

    }

    if (inimigo.imagem != imagemInimigoGrande) {
      if (personagem.estaColidindo(inimigo) && !pararObjetos) {
        somDano.play();
        inimigo.removeDaTela();

        vidas.perdeuVida();

        if (vidas.vidas == 0) {
          botaoGameOver = new BotaoGerenciador('tentar novamente', width / 2, height / 2);
          cenaAtual = 'telaGameOver';
          aconteceuGameOver = true;
          somDoJogo.stop();
        }
      }
    } else {
      if (personagem.estaColidindoTroll(inimigo) && !pararObjetos) {
        somDano.play();
        inimigo.removeDaTela();
        vidas.perdeuVida();
        if (vidas.vidas == 0) {
          botaoGameOver = new BotaoGerenciador('tentar novamente', width / 2, height / 2);
          cenaAtual = 'telaGameOver';
          aconteceuGameOver = true;
          somDoJogo.stop();
        }
      }
    }

  }


}