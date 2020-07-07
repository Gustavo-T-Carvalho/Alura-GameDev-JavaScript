class Animacao{
    constructor(imagem,posicaoX,variacaoY,largura,altura,larguraSprite,alturaSprite,quantidadeDeFrames,larguraDaLinha){
  
      
  
  this.imagem = imagem
  this.variacaoY = variacaoY
 
  this.larguraPersonagem = largura
  this.alturaPersonagem = altura
  this.posicaoX = posicaoX
  
  this.posicaoY = height - this.alturaPersonagem - variacaoY
  
  this.frameAtual=0
  
  this.larguraSprite = larguraSprite
  this.alturaSprite = alturaSprite
  this.quantidadeDeFrames = quantidadeDeFrames;
  this.larguraDaLinha = larguraDaLinha;
    }


  exibe(frameParaAnimacoes,controle)  {
    var posicao = this.retornaPosicao();
                     image(this.imagem,this.posicaoX,this.posicaoY,this.larguraPersonagem,this.alturaPersonagem,posicao[0],posicao[1],this.larguraSprite,this.alturaSprite);
    if(controle === 0){
      this.anima();
    }else{
      if(frameParaAnimacoes%controle ==0){
        this.anima();
      }
    }
    
  
  
  
  
  }    
    anima(){
    this.frameAtual++;
    if(this.frameAtual==this.quantidadeDeFrames-1){
      this.frameAtual = 0;
    }
  }
  
    retornaPosicao(){
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
    
    var posicao= [(i*this.larguraSprite),(j* this.alturaSprite)];
    return posicao;    
  }
  
  exibeMegazordCaido(){
    
    image(imagemMegazordCaido,this.posicaoX,this.posicaoY,this.larguraPersonagem,this.alturaPersonagem);
    
 
    
  }
  
  
}