class Item{
  constructor(imagem,posicaoX,variacaoY,largura,altura,raridade){
  
   this.imagem = imagem
   this.posicaoX = posicaoX
   
    this.variacaoY = variacaoY
 
   this.larguraPersonagem = largura
   this.alturaPersonagem = altura
   this.velocidadeSetada = false;
    this.alturaSetada = false;
  
   this.posicaoY = height - this.alturaPersonagem - variacaoY
  
   this.raridade = raridade;
  this.velocidade = 10;
  
  
  }
  setVelocidade(velocidade){
     this.velocidade = velocidade;
     this.velocidadeSetada = true;
   }
  
   setAltura(altura){
     this.posicaoY = altura;
     this.alturaSetada = true ;
   }
  
  exibe()  {
    
                     image(this.imagem,this.posicaoX,this.posicaoY,this.larguraPersonagem,this.alturaPersonagem);
  
    
  }    
   
   move(){
    
    this.posicaoX = this.posicaoX-this.velocidade;
    if(this.posicaoX< -this.larguraPersonagem){
      this.removeDaTela();
    }
  
    }
  
   removeDaTela(){
   this.posicaoX = width + random()*this.raridade*width;  
    
   this.velocidadeSetada= false;  
     this.alturaSetada = false;
     
   }
  
   
     
}