class Pontuacao{
  constructor(){
    this.pontos = 0;
    
  }
  
  adicionaPonto(poder){
    if(poder){
      this.pontos+=2; 
    }else{
      this.pontos+=1; 
    } 
  }
  
  pegouMoeda(poder){
    if(poder){
      this.pontos+=10; 
    }else{
      this.pontos+=5; 
    }
  }
  exibe(){
    textAlign(RIGHT);
    fill('#fff');
    textSize(37);
    text(this.pontos, width-30,50)
    
    
  }

}