// const cantidad = prompt ("Dime cuantas veces repetir")
// let resultado;
// let suma=0 //en caso de hacer sumatorias dentro de la misma variable
// for (let i=1; i<=cantidad; i++) {
//     suma += 6/i;
    
// }
// console.log(suma);
// const cantidad = prompt ("Dime cuantas veces repetir")
// let suma=0
// let signo=1
// for (let i=1, cont=1; i<=cantidad; i++, cont+=2, signo*=-1) {
//     suma+=4/cont*signo;
// }
// console.log(suma)
// const a = prompt("Base")
// const b = prompt("Altura")
// class Triangulo {
//     constructor (base, altura) {
//       this.base = base;
//       this.altura = altura;
//     }
//     area () {
//       return (this.base * this.altura)/2;
//     }
//   }
//   const trian = new Triangulo(a, b);
  
//   console.log(trian.area());
class Dado{
    lanzar(){
      return  Math.floor(Math.random()*100); 
    }    
}
let miDado = new Dado();
//console.log(miDado.lanzar())
//for (let i = 0; i < 10; i++) {
    //console.log(miDado.lanzar())
//}

class Tortuga{
    constructor(numero){
        this.numero = numero;
        this.posicion = 0;
        this.dado = new Dado();
    }
    correr(){
        let avanzar = this.dado.lanzar();
        if (avanzar % 2 == 0) {
            this.posicion +=3;
            
            console.log("La Tortuga avanzó 3 y queda en " + this.posicion);           
        }
        else if (avanzar % 5 == 0){
            this.posicion -=6;
            
            console.log("La Tortuga retrocede 6 y queda en " + this.posicion);            

        }
        else{
        this.posicion +=1;
            console.log("La Tortuga avanzó 1 y queda en " + this.posicion);            
        }
    }

}
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
let Liebres = new Liebre(2);
let Tortugas = new Tortuga(1);

while(Tortugas.posicion <100){
    console.log("Es el turno numero",num++);
    Liebres.correr2();
    Tortugas.correr();
    
}
if (Tortugas.posicion <Liebres.posicion) {
       console.log("Ganó la liebre quedando en la posición " , Liebres.posicion) 
}
else{
    console.log("Ganó la tortuga quedando en la posición " , Tortugas.posicion) 

}


