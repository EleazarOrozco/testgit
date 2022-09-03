// const array = [1,2,3,4,5,6,7,8,9,10];
// let aux = array[array.length-1];
//  for (i=array.length-1; i >=1; i--){
//     array[i]=array[i-1];                     DE LA ULTIMA POSICION A LA PRIMERA Y SE
//                                              RECORREN TODOS
// }
// array[0]=aux;
// console.log(array)


// const array = [1,2,3,4,5,6,7,8,9,10];
// let aux = array[0];
//  for (i=0; i <array.length-1; i++)         DE LA PRIMERA A LA ULTIMA Y SE RECORREN
//     array[i]=array[i+1];
// array[array.length-1]=aux;
//     console.log(array)
// const array = [1,2,3,4,5,6,7,8,9,10]

// for (i = 0, j=9; i < array.length/2; i++, j--) {
//     let aux = array[i]                              INVERTIR ARREGLO
//      array[i]=array[j]
//      array[j]=aux
// }
// console.log(array)

//NUMEROS PRIMOS
num = 1000;
let array = [num];
let conteo;
for (a = 1; a<=num; a++) {
conteo=0
for (i = 0; i<=num; i++) {
    array[i]=0
}
for (i=2; i <=num; i++) {
    if (array[i]==0) {
        conteo++
        for (c = i+i; c <=num; c+=i) {
            array[c]=1
         }       
        }   
    }
}
console.log(num,"numeros", conteo , "primos encontrados")
//NUMEROS PRIMOS