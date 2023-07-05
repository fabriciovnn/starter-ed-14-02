const logado = localStorage.getItem('data')

if(!logado) {
  document.location.replace("http://127.0.0.1:5501/index.html")
}