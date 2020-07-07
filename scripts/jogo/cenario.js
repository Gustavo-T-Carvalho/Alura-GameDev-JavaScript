class Cenario{
  constructor(imagem,segundaImagem,velocidade,comprimento,altura){
  this.imagem = imagem;
  this.parou = false;
  this.segundaImagem = imagem;
  this.altura = altura 
  this.comprimentoImagem = comprimento;
  this.mudouImagem1 = 0;
  this.mudouImagem2 = 0;
  this.velocidade = velocidade;
  this.velocidadeInicial = velocidade
  this.atual = "cidade"; 
  this.x1 = 0;  
  this.x2 = comprimento;
    
  
  this.ondeEstaTransicao = 0;
  this.ondeEstaImagemParque = 0;
  } 
  exibe()
  {
  
        
      
    image(this.imagem,this.x1,0,this.comprimentoImagem,this.altura); 
    image(this.segundaImagem,this.x2,0,this.comprimentoImagem,this.altura);
    
    
    
  }
  
  move() {
    if(this.parou==false){
      this.x1 = this.x1 - this.velocidade;
      this.x2 = this.x2 - this.velocidade;
    }
    
    
    
    
    if(this.x1< - this.comprimentoImagem){
      this.x1 = this.x2 + this.comprimentoImagem;
       
      
      if(this.atual == "final" && this.mudouImagem1 == 1){
          this.imagem = imagemCenarioParque;
         
          this.atual = "acabou";
        }
      if(this.atual == "parque" && this.mudouImagem1 == 0){
          this.imagem = imagemCenarioParque;
         
          this.atual = "final";
        }
      if(this.atual== "transicao"){
        this.imagem = imagemCenarioTransicao;
        this.atual = "parque";
        this. mudouImagem1 = 1;
      }
      
      
    }
    if(this.x2<-this.comprimentoImagem){
     this.x2 = this.x1 + this.comprimentoImagem; 
      
      if(this.atual == "final" && this.mudouImagem2 == 1){
          this.segundaImagem = imagemCenarioParque;
         
          this.atual = "acabou";
        }
        if(this.atual == "parque" && this.mudouImagem2 == 0){
          this.segundaImagem = imagemCenarioParque;
          this.atual = "final";
        }
       if(this.atual== "transicao"){
        this.segundaImagem = imagemCenarioTransicao;
         this.atual = "parque";
         this.mudouImagem2 = 1;
      }
      
      
    }
     
    
    
  }
  movendoFrente(){
    this.velocidade = this.velocidade + 0.6;
  }
  
  movendoTras(){
    this.velocidade = this.velocidade - 0.6;
  }
  
  
  resetaVelocidade(){
    this.velocidade = this.velocidadeInicial; 
    
    
  }
  mudaCenario(cenarioAtual){
    
    
    this.atual = "transicao";
  }
  paraCenario(){
    this.parou = true;   
  }
  
  }