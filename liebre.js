class Dado{
    lanzar(){
      return  Math.floor(Math.random()*100); 
    }    
}
let miDado = new Dado();
//for (let i = 0; i < 10; i++) {
    //console.log(miDado.lanzar())
//}

class Liebre{
    constructor(numero){
        this.numero = numero;
        this.posicion = 0;
        this.dado = new Dado();
    }
    correr2(){
        let avanzar = this.dado.lanzar();
        if (avanzar<=20) {
            this.posicion +=0;

            console.log("La Liebre no avanzó y queda en " + this.posicion);           
        }
        else if (avanzar>20 && avanzar<=40){
            this.posicion +=9;

            console.log("La Liebre avanza 9 y queda en " + this.posicion);            
        }
        else if(avanzar>40 && avanzar<=50){
            this.posicion -=12;

            console.log("La Liebre retrocede 12 y queda en " + this.posicion);            
        }
        else if(avanzar>50 && avanzar<=85){
            this.posicion +=1;

            console.log("La Liebre avanza 1 y queda en " + this.posicion);            
        }
        else{
        this.posicion -=2;

        console.log("La Liebre retrocede 2 y queda en " + this.posicion); 
    }
    }

}
let num = 1;

let Liebres = new Liebre(1);

while(Liebres.posicion <100 && Tortugas.posicion <100){
    console.log("Es el turno numero",num++); 
    Liebres.correr2();
    
}
if (Liebres.posicion <Tortugas.posicion) {
       console.log("Ganó el corredor " , cFmale.numero , " quedando en la posición " , cFmale.posicion) 
}
else{
    console.log("Ganó el corredor " , cMale.numero , " quedando en la posición " , cMale.posicion) 

}