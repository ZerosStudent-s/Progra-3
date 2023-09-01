//var//!vaiable global
//let//!Propia de la funcion
//const//!quemado o sin modificar mas
//querySelection//!Busqueda por clases
//function//!Funciones
window.addEventListener("load",(event) =>{//primera accion

let passwordImput = document.getElementById("password"); //Importe de datos
    passwordImput.addEventListener("change",(event)=>{
        console.log(event.target.value);
    });
    let btnSubmit = document.getElementById("BTN");
    btnSubmit.addEventListener("click",(event)=>{
        console.log(passwordImput.value);//jalar valor
    })
});