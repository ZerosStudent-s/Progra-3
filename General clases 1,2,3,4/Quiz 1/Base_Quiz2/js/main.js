window.onload = (event) => {
    console.log("page is fully loaded");
    let CardInput = document.getElementById("input");
    CardInput.addEventListener("change",(event)=>{
        console.log(event.target.value);
    });

    
    let btnSave = document.getElementById("BTN");
    btnSave.addEventListener("click",(event)=>{
        console.log(CardInput.value);
    })



};