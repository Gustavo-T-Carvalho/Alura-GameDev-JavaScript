class Vidas{
  constructor(imagem,vidas){
    this.imagem = imagem;
    this.vidas = vidas;
    
  }
  
  perdeuVida(){
    this.vidas -=1; 
  }
  ganhouVida(){
    if(this.vidas<5){
      this.vidas +=1;
    }
  }
  exibe()  {
    
    let i = 0;
    while(i<this.vidas){
      image(this.imagem,i*55,0,50,50);
      i +=1; 
    }
   
  }  
    
  

}