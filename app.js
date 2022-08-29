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
console.log(miDado.lanzar())
//for (let i = 0; i < 10; i++) {
    //console.log(miDado.lanzar())
//}

class Corredor{
    constructor(numero){
        this.numero = numero;
        this.posicion = 0;
        this.dado = new Dado();
    }
    correr(){
        let avanzar = this.dado.lanzar();
        if (avanzar % 2 == 0) {
            this.posicion +=3;
            
            console.log("el corredor "+ this.numero+" avanzó 3 y queda en " + this.posicion);           
        }
        else if (avanzar % 5 == 0){
            this.posicion -=6;
            
            console.log("el corredor "+ this.numero+" retrocede 6 y queda en " + this.posicion);            

        }
        else{
        this.posicion +=1;
            console.log("el corredor "+ this.numero+" avanzó 1 y queda en " + this.posicion);            
        }
    }

}
let num = 1;

let cMale = new Corredor(1);
let cFmale = new Corredor(2);

while(cMale.posicion <100 && cFmale.posicion <100){
    console.log("Es el turno numero",num++); 
    cMale.correr();
    cFmale.correr()
    
}
if (cMale.posicion <cFmale.posicion) {
       console.log("Ganó el corredor " , cFmale.numero , " quedando en la posición " , cFmale.posicion) 
}
else{
    console.log("Ganó el corredor " , cMale.numero , " quedando en la posición " , cMale.posicion) 

}


