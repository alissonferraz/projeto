function toggleMode() { 
    const html = document.documentElement // guarda da variável html, o html da página index
    const img = document.querySelector("#profile img")
    html.classList.toggle('light') // verifica se tem light, se tiver ele tira, e se não tiver ele coloca
    if(html.classList.contains('light')){ 
        img.setAttribute('src', './assets/avatar-light.png')
    }
    else { 
        img.setAttribute('src', './assets/avatar.png')
    }


}

