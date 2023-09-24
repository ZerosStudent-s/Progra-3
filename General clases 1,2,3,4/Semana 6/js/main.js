//!Jalar por variables los elementos del html
window.addEventListener("load", function (event) {
    console.log("'Todos los recursos terminaron de cargar!");
    fetch('./js/mocks/company.json')
    .then(response => response.json())
    .then(company => {
    //!Definir las variables con los datos del json
    const imageCompany = document.getElementById("CompanyImage");
    imageCompany.src = company.img;
    document.getElementById('companyName').innerText=company.companyName;//!Para textos fijos no es necesario traer el elemento padre de donde se añadiran
    document.getElementById('descripcion').innerText=company.description;//! documento elemento id del elemento inner text para 


    company.services.forEach(services => {
      const contenedor = this.document.getElementById("Services");
      const ico = this.document.createElement("img");
      const descripcion = document.createElement("p");
      ico.src = services.ico;
      ico.alt = services.id;
      descripcion.textContent = services.description;
    
      const itemContenedor = document.createElement("div");
      itemContenedor.className = "ServClas";
      ico.className = "ServICon";
      itemContenedor.appendChild(ico);
      itemContenedor.appendChild(descripcion);
      contenedor.appendChild(itemContenedor);
    

    });

      });

      ;
    })
    


