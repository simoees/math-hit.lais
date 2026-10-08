// Carrega o nome salvo do aluno no navegador
document.addEventListener("DOMContentLoaded", () => {
  const nomeSalvo = localStorage.getItem("mathhit_nome");
  if (nomeSalvo) {
    document.getElementById("nome-aluno").value = nomeSalvo;
  }
  
  // Carrega Matemática por padrão ao abrir
  carregarMateria('matematica');
});

// Salva o nome do aluno quando ele digita
document.getElementById("nome-aluno").addEventListener("input", (e) => {
  localStorage.setItem("mathhit_nome", e.target.value);
});

// Função para alternar entre as matérias
function carregarMateria(materiaKey) {
  // Atualiza botões ativos
  const botoes = document.querySelectorAll(".btn-materia");
  botoes.forEach(btn => btn.classList.remove("active"));
  
  event.target.classList.add("active");

  // Atualiza título
  const nomesMaterias = {
    matematica: "Matemática",
    fisica: "Física",
    quimica: "Química",
    biologia: "Biologia",
    portugues: "Português"
  };
  
  document.getElementById("titulo-materia").textContent = `Paródias de ${nomesMaterias[materiaKey]}`;

  // Renderiza os cards da matéria
  const container = document.getElementById("lista-parodias");
  container.innerHTML = "";

  const lista = bancoDeParodias[materiaKey] || [];

  if (lista.length === 0) {
    container.innerHTML = "<p>Nenhuma paródia cadastrada para esta matéria ainda!</p>";
    return;
  }

  lista.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.titulo}</h3>
      <span class="ritmo">🎵 ${item.ritmo}</span>
      <div class="macete">${item.macete}</div>
      <div class="letra">${item.letra}</div>
    `;
    container.appendChild(card);
  });
}
