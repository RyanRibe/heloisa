function togglecolor() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Perfil do usuário para fundo claro")
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute("alt", "Foto de Perfil do usuário")
  }

  /*const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
}
