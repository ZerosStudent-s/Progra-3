//!Arreglo
const[a,b] = [1,2,3,4,5];
const{id} = returnObjet();
console.log(a,b, id)
//!Estiramiento
let array1 = [1,2,3];
let array2 = [4,5];
let arrayResult =[...array1,...array2];

let estudiante ={id: 1, nombre: 'x'}
estudiante = {...estudiante, edad:21}
console.log(estudiante)

function returnObjet(){
return {id:100 , nombre:''}


//!Condicional para arreglos
function filterMethod(){
    let array = [1,2,3,4,5];
    let newArray = array.filter(x=> x>3);
    console.log({newArray});
}

//!Modificar arreglo multi, suma, cambio de formato, etc
function MapMethod(){
    let array = [1,2,3,4,5];
    let newArray = array.map(element =>element*2);
    console.log({newArray});
}

//!Find
function findMethod(){
    let array = [1,2,3,4,5];
    let objectFound = array.filter(element => element ==4);
    if(objectFound)//!Para no imprimir undifine
    console.log(objectFound);
}
//! = cambia valor   ,  == compara valor   , === compara tomando en cuenta valor y tipo de valor(int,string,char)
}

window.onload=(event)=>{
 filterMethod();

};