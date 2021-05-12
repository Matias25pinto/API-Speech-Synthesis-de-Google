"use strict";
let listaPacientes = ["Matias", "Juan", "Alberto", "Ana"];
let btnLlamar = document.getElementById("llamar");
let btnSiguiente = document.getElementById("siguiente");
let btnRetroceder = document.getElementById("retroceder");
let cantidadPacientes = listaPacientes.length;
let pacienteActual = 0;

const constuirPanel = () => {
  let contenedorPanel = document.getElementById("contenedorPanel");
  let panel = document.getElementById("panel");
  contenedorPanel.removeChild(panel);

  panel = document.createElement("div");
  panel.id = "panel";
  panel.className = "p-5 mb-4 mt-4 rounded-3 bg-success text-center";
  panel.textContent = `Paciente Nro: ${pacienteActual + 1} ${
    listaPacientes[pacienteActual]
  }`;
  contenedorPanel.appendChild(panel);
};

const construirLista = () => {
  //Construir lista
  let listaContenedor = document.getElementById("listaContenedor");
  let ulContenedor = document.getElementById("ulContenedor");
  listaContenedor.removeChild(ulContenedor);
  ulContenedor = document.createElement("ul");
  ulContenedor.id = "ulContenedor";
  ulContenedor.className = "list-group";
  listaPacientes.map((paciente, index) => {
    let li = document.createElement("li");
    li.textContent = paciente;
    if (index === pacienteActual) {
      li.className = "list-group-item active";
    } else {
      li.className = "list-group-item";
    }
    ulContenedor.appendChild(li);
    listaContenedor.appendChild(ulContenedor);
  });
};
// Construir por primera vez
constuirPanel();
construirLista();

//Pasar al siguiente paciente de la lista
const siguientePaciente = () => {
  if (pacienteActual < cantidadPacientes - 1) {
    ++pacienteActual;
    console.log(pacienteActual);
    constuirPanel();
    construirLista();
  }
  llamarPaciente(listaPacientes[pacienteActual]);
};
//Retroceder la lista
const retrocederPaciente = () => {
  if (pacienteActual > 0) {
    --pacienteActual;
    console.log(pacienteActual);
    constuirPanel();
    construirLista();
  }
  llamarPaciente(listaPacientes[pacienteActual]);
};

//Llamar los btn
btnLlamar.addEventListener("click", () => {
  llamarPaciente(listaPacientes[pacienteActual]);
});

btnSiguiente.addEventListener("click", siguientePaciente);

btnRetroceder.addEventListener("click", retrocederPaciente);

//La función que se encarga de llamar al paciente de texto a voz
const llamarPaciente = (texto) => {
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
};
