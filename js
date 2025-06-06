function mudarCor() {
  const cores = ["#f8b400", "#2ecc71", "#e74c3c", "#3498db", "#9b59b6", "#1abc9c"]; // nova cor adicionada
  document.body.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
}
