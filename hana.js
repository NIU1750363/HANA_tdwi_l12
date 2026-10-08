function showPlantesInterior() {
    
    const select = document.getElementById("plantes-interior-select"); //el select de les plantes de interior 
    const resultat = document.getElementById("resultat-planta"); //el div on esta el resultat i on es mostrara en plantalla
    
    const plantaSeleccionada = select.options[select.selectedIndex].text; 
    const valorSeleccionat = select.value;

    if (valorSeleccionat == "") {
        resultat.innerHTML = ""; // Si no hi ha res seleccionat, no mostrem res
    } else {
        resultat.innerHTML = "Planta seleccionada: " + plantaSeleccionada; // Mostrem el nom
    }
}

function toggleSelectInterior() { //funcio per amagar o mostrar el selector de plantes d'interior
    const select = document.getElementById("plantes-interior-select");
    
    if (select.style.display == "none") {
        select.style.display = "block"; //mostra
    } else {
        select.style.display = "none"; //amaga
        const resultat = document.getElementById("resultat-planta");
        resultat.innerHTML = ""; // per netejar el resultat quan ja no es mostra el selector 
    }
}