    let speisekarten = document.getElementById("speisekarten");
    let dropDownMenu = document.getElementById("drop-menu");
    
speisekarten.addEventListener("click", function() {        
    dropDownMenu.classList.toggle("drop-menu-close");
    dropDownMenu.classList.toggle("drop-menu-open")
}, false);
