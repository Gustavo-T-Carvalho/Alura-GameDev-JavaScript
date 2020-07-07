class Personagem extends Animacao {

  constructor(imagem, posicaoX, variacaoY, largura, altura, larguraSprite, alturaSprite, quantidadeDeFrames, larguraDaLinha) {
    super(imagem, posicaoX, variacaoY, largura, altura, larguraSprite, alturaSprite, quantidadeDeFrames, larguraDaLinha)
    this.imagemCorrendo = imagemCorrendo;
    this.imagemAbaixado = imagemAbaixado;
    this.imagemPulando = imagemPulando
    this.variacaoY = variacaoY;
    this.abaixado = false;
    this.velocidadeDoPulo = 30;
    this.gravidade = 3;
    this.poder = false;
    this.podePular = 2;
    this.yInicial = height - this.alturaPersonagem - variacaoY
    this.posicaoY = this.yInicial


  }
  pula(somDoPulo) {
    if (this.podePular > 0) {
      this.velocidadeDoPulo = -25;
      somDoPulo.play();
      this.podePular = this.podePular - 1;
    }
  }


  desceMaisRapido() {

    this.gravidade = 20;
    this.podePular = 0;
  }

  aplicaPoder() {
    this.poder = true;
    this.frameAtual = 0;
  }

  desativaPoder() {
    this.poder = false;
    this.frameAtual = 0;
  }

  andaFrente() {
    if (this.posicaoX < width - this.larguraPersonagem) {
      if (this.poder) {
        
        this.posicaoX = this.posicaoX + 20;
      } else {
        this.posicaoX = this.posicaoX + 10;
      }
    }
  }

  andaAtras() {
    if (this.posicaoX > 0) {
      if (this.poder) {
        this.posicaoX = this.posicaoX - 30;
      } else {
        this.posicaoX = this.posicaoX - 10;
      }
    }
  }



  aplicaGravidade() {

    this.posicaoY = this.posicaoY + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

    if (this.posicaoY > this.yInicial) {
      this.posicaoY = this.yInicial;
      this.podePular = 2;
      this.gravidade = 2;
    }
  }

  estaColidindo(inimigo) {
    fill(0)
    let correcaoPonto = 0
    let correcaoAltura = 20
    if(this.abaixado == true){
      correcaoAltura =  60
      correcaoPonto = 60
    }
     
    
    
    
    const colisao = collideRectRect(
      this.posicaoX + 30,
      this.posicaoY + correcaoAltura,
      this.larguraPersonagem - correcaoAltura,
      this.alturaPersonagem - correcaoPonto,
      inimigo.posicaoX,
      inimigo.posicaoY,
      inimigo.larguraPersonagem,
      inimigo.alturaPersonagem)

    return colisao;
  }


  estaColidindoTroll(inimigo) {
   
      


    const colisaoComTaco = collideRectRect(
   
      this.posicaoX + 30,
      this.posicaoY + 20,
      this.larguraPersonagem - 50,
      this.alturaPersonagem - 20,
      inimigo.posicaoX + 38,
      inimigo.posicaoY + 95,
      inimigo.larguraPersonagem - 50,
      inimigo.alturaPersonagem - 130)

    const colisaoComTroll = collideRectRect(
      this.posicaoX + 30,
      this.posicaoY + 20,
      this.larguraPersonagem - 50,
      this.alturaPersonagem - 20,
      inimigo.posicaoX + 110,
      inimigo.posicaoY + 47,
      inimigo.larguraPersonagem - 110,
      inimigo.alturaPersonagem - 130)


    if (colisaoComTaco || colisaoComTroll) {
      return true;
    } else {
      return false;
    }



  }

  exibe(frameParaAnimacoes, controle) {
    let posicao;
    
    if(this.posicaoY < this.yInicial){
      posicao = this.retornaPosicao(width,height);
     
      image(this.imagemPulando, this.posicaoX, this.posicaoY+50, this.larguraPersonagem-20, this.alturaPersonagem-20, 0, 0, width, height);
      
    }
    else if (this.abaixado) {
      posicao = this.retornaPosicao(width,height);
      image(this.imagemAbaixado, this.posicaoX, this.posicaoY+50, this.larguraPersonagem-10, this.alturaPersonagem-50, 0, 0, width, height);
    } else if (this.poder == false) {
     
      posicao = this.retornaPosicao(this.larguraSprite,this.alturaSprite);
      image(this.imagem, this.posicaoX, this.posicaoY, this.larguraPersonagem, this.alturaPersonagem, posicao[0], posicao[1], this.larguraSprite, this.alturaSprite);

    } else {
      posicao = this.retornaPosicao(55,71);
      image(this.imagemCorrendo, this.posicaoX, this.posicaoY, this.larguraPersonagem, this.alturaPersonagem, posicao[0], posicao[1], 55, 71);

    }

    if (controle === 0) {
      this.anima();
    } else {
      if (frameParaAnimacoes % controle == 0) {
        this.anima();
      }
    }





  }
  anima() {
    this.frameAtual++;
    if (this.frameAtual == this.quantidadeDeFrames - 1) {
      this.frameAtual = 0;
    }

  }
  retornaPosicao(largura,altura){
    
    let encontra = 0;
  let i = 0;
  let j = 0;
    while(encontra<this.frameAtual){
      i++;
      if(i>this.larguraDaLinha-1){
        j++;
        i=0;
      }
      encontra++;
    }
    
    var posicao= [(i*largura),(j* altura)];
    return posicao;    
  }


}