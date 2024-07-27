function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  const DoceSalgado1 = document.querySelector("#DoceSalgado1")
  const DoceSalgado2 = document.querySelector("#DoceSalgado2")
  const DoceSalgado3 = document.querySelector("#DoceSalgado3")
  const DoceSalgado4 = document.querySelector("#DoceSalgado4")

  //Substituir a Imagem
  if (html.classList.contains("light")) {
    //se tiver lightMode, adicionar a imagem light
    img.setAttribute("src", "./assets/Cake.png")
    DoceSalgado1.textContent = "Doces"
    DoceSalgado2.textContent = "Bolos"
    DoceSalgado3.textContent = "Mousses"
    DoceSalgado4.textContent = "Doces Diversos"
  } else {
    //se tiver sem o lightMode, manter a imagem normal
    img.setAttribute("src", "./assets/pastel.png")
    DoceSalgado1.textContent = "Risoles"
    DoceSalgado2.textContent = "Folhados"
    DoceSalgado3.textContent = "Assados"
    DoceSalgado4.textContent = "Salgados Diversos"
  }
}
