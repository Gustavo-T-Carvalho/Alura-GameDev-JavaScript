class TelaVitoria {
  constructor() {

  }
  draw() {
    this._exibe();
    this._texto();
   
  }


  _texto() {
    textFont(fonteTelaInicial);
    textSize(35);
    fill('white');
    textAlign(CENTER);
    text("VAI MEGAZORD! ", width / 2, height / 2);
  }


  

  _exibe() {
    var posicao = this.retornaPosicao();
    image(imagemMegazordVitoria, 0, 0, width, height, posicao[0], posicao[1], 85, 100);

    this.anima();


  }







  anima() {
    this.frameAtual++;
    if (this.frameAtual == 2) {
      this.frameAtual = 0;
    }
  }

  retornaPosicao() {
    let encontra = 0;
    let i = 0;
    let j = 0;
    while (encontra < this.frameAtual) {
      i++;
      if (i > this.larguraDaLinha - 1) {
        j++;
        i = 0;
      }
      encontra++;
    }

    var posicao = [(i * 85), (j * 100)];
    return posicao;
  }

}