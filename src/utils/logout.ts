export function logout() {
  if (!confirm("Deseja encerrar a sessão")) {
    return;
  }
  alert("Sessão encerrada!");
  sessionStorage.clear();
  window.location.href = "/index.html";
}
