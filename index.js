let boton = document.querySelector("#btnNota");
let cerrar = document.querySelector(".close");

boton.addEventListener("click", addNote);
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close")) {
        removeNote(event.target.closest(".note"));
    }
});

function addNote() {
    let container = document.querySelector(".container");
    let note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="operation">
        <div class="title">
           <input type="text" placeholder="Titulo de la nota" value="">
           <button class="close">X</button>
        </div>
        <div class="test">
            <textarea class="text" placeholder="Escribe una nota" value=""></textarea>
        </div>
    </div>
    `;
    container.appendChild(note);
}

function removeNote(note) {
    let container = document.querySelector(".container");
    container.removeChild(note);
}

