window.onload = (event) => {
    console.log("page is fully loaded");
    let CardInput = document.getElementById("input");
    CardInput.addEventListener("change",(event)=>{
        console.log(event.target.value);
    });
    
    const cardText = document.getElementById("input");
    const my_cards = document.getElementById("my_cards");
    


    let createCard = document.getElementById("BTN")
    createCard.addEventListener("click", function() {
        const text = cardText.value;
        if (text.trim() !== "") {
            // Crear una nueva tarjeta
            const my_card = document.createElement("div");
            my_card.className = "my_card";
            my_card.textContent = text;
            
            // Agregar la tarjeta al contenedor
            my_cards.appendChild(my_card);
            
            // Limpiar el campo de entrada de texto
            cardText.value = "";
        }
    });

};