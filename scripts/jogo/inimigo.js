class Inimigo extends Animacao{
  constructor(imagem,posicaoX,variacaoY,largura,altura,larguraSprite,alturaSprite,quantidadeDeFrames,larguraDaLinha,velocidade,delay){
  super(imagem,posicaoX,variacaoY,largura,altura,larguraSprite,alturaSprite,quantidadeDeFrames,larguraDaLinha)
    this.velocidade = velocidade;
   this.velocidadeSetada = false;
    this.alturaSetada = false;
    this.visivel = true;
  }
  move(){
    
    this.posicaoX = this.posicaoX-this.velocidade;
   
    
    if (this.posicaoX< -this.larguraPersonagem){
         
        
        this.posicaoX = width + this.larguraPersonagem;
        this.visivel = false;
  }
  
}
  
  saiuDaTela(){
   return this.visivel;
   
    
  }
  removeDaTela(){
   this.posicaoX = width + this.larguraPersonagem;  
   this.visivel = false;
   }
  
   setVelocidade(velocidade){
     this.velocidade = velocidade;
     this.velocidadeSetada = true;
   }
  
   setAltura(altura){
     this.posicaoY = altura;
     this.alturaSetada = true ;
   }
  
  
}