//!Jalar por variables los elementos del html


window.addEventListener("load", function (event) {
    console.log("'Todos los recursos terminaron de cargar!");
    fetch('./js/mocks/company.json')
    .then(response => response.json())
    .then(company => {
     
    console.log(company)
      //!Definir las variables con los datos del json
    
    document.getElementById('companyName').innerText=company.companyName;
    document.getElementById('descripcion').innerText=company.description;//! documento elemento id del elemento inner text para 
    
    })
    

  });
