function openServices(){
    if (typeof window !== "undefined") {
    var elemento = document.getElementById("submenu1");
    elemento.style.display='block';
    }
}

function openRecursos(){
    if (typeof window !== "undefined") {
    var elemento = document.getElementById("submenu2");
    elemento.style.display='block';
    }
}

export {openServices,openRecursos}


