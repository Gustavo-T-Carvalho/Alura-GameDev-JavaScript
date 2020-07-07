class TelaInicial {
  constructor() {

  }
  draw() {
    this._imagemDeFundo();
    this._poderes();
    this._texto();
    this._botao();
  }
  _imagemDeFundo(){
   image(imagemTelaInicial,0,0,width,height); 
  }
  
  _poderes(){
     
    image(imagemMoeda,12,height/2,35,35);
    image(imagemPoder,12,height/1.7,35,35);
    image(imagemCoracao,12,height/1.5,35,35);
    }
  
  
 
  _texto(){
    textFont(fonteTelaInicial);
    textSize(50);
    fill('rgb(100%,100%,100%)');
    textAlign(RIGHT);
    text("Power Rangers ", width/2,height/5);
    textSize(100)
    
    textFont(fonteTelaInicial);
    textSize(20);
    fill('rgb(100%,100%,100%)');
    textAlign(RIGHT);
    text("Utilize as setas do seu teclado ", width/2.8,height/3);
    
    text("para desviar dos perigos e  levar ",width/2.75,height/2.6)
    text("Jason ao Megazord",width/4.15,height/2.3)
    textAlign(LEFT);
      text("+5 Pontos",55,height/1.8)
     text("Aumenta a velocidade e os pontos adquiridos",55,height/1.6)
     text("Vida extra",55,height/1.4)
    
  }
  
  _botao(){
    botaoGerenciador.posicaoY = height/6*5;
    botaoGerenciador.draw();
    
  }
  
}