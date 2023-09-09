//!Jalar por variables los elementos del html

let img = document.getElementById("img");
window.addEventListener("load", function (event) {
    console.log("'Todos los recursos terminaron de cargar!");
    fetch('./js/mocks/company.json')
    .then(response => response.json())
    .then(company => {
     
    console.log(company)
      //!Definir las variables con los datos del json
    img.src = company.img
    document.getElementById('companyName').innerText=company.companyName;
    document.getElementById('descripcion').innerText=company.description;//! documento elemento id del elemento inner text para 
    
    console.log(company, company.services);
      let DescC = document.getElementById("DesC")
      company.services.forEach(service => {
      const myserv = document.createElement(`desc_${service.id}`).innerText = service.description; 
      myserv.appendChild(DescC);

      });
    })
    

  });
