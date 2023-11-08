function toggleMode() {
  const html = document.documentElement

  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}

  html.classList.toggle("light")

  //Pegar a Tag IMG
  const img = document.querySelector("#profile img")
  //Substituir a Imagem
  if (html.classList.contains("light")) {
    //Se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-lightJu.png")
  } else {
    // se tver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/AvatarJu.png")
  }
}
