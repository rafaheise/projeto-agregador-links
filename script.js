function toggleMode() {
  const html = document.documentElement //atribuir a HTML esse objeto, significa que ele vai configurar apenas o elemento
/*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */
  html.classList.toggle("light") //esse método funciona da mesma maneira que o ifelse acima

  //substituindo a imagem do profile
  const img = document.querySelector("#profile img") //atribui a IMG a possibilidade de seleção da imagem a partir da fonte (source)

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png") //se estive no modo light, atribui a imagem com fundo amarelo
    img.setAttribute("alt", "Foto perfil com oculos") //esse método altera o texto conforme o modo (dark/light). Mas só aparece quando src não é encontrada
  } else {
    img.setAttribute("src", "./assets/avatar.png") //se estive no modo dark, atribui a imagem com óculos
    img.setAttribute("alt", "Foto perfil com fundo amarelo") //esse método altera o texto conforme o modo (dark/light). Mas só aparece quando src não é encontrada
  }
}