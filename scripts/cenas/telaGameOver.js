class TelaGameOver {
  constructor() {

  }
  draw() {
    this._imagemDeFundo();
    this._texto();
     this._botao();
  }
  _imagemDeFundo(){
    
   image(imagemGameOver,0,0,width,height); 
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textSize(35);
    fill('red');
    textAlign(RIGHT);
    text("Um Ranger Vermelho ", width/2.8,height/2);
    text(" nunca desistiria", width/3.5,height/1.65);
    fill('yellow');
    text("Pontos: " + pontuacao.pontos, width/5.1,height/1.4);
  }
  _botao(){
    botaoGameOver.posicaoY = height/7*5;
    botaoGameOver.draw();
    
  }
  
  
  
}