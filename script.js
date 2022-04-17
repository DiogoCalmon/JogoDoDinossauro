let personagem = document.querySelector("#personagem")
let quadrado = document.querySelector("#quadrado")

let pular = () => {
    if(personagem.classList != "animar"){
        personagem.classList.add("animar")
    }

    setTimeout(function(){
        personagem.classList.remove("animar")
    }, 700)
}

let testarColisao = setInterval( function(){
    let topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue("top")
    )
    let esquerdaDoQadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue("left")
    )

    if(esquerdaDoQadrado < 20 && esquerdaDoQadrado > 0 && topoPersonagem >= 130){
        quadrado.style.animation = "none"
        quadrado.style.display = "none"
        alert("game over!")
    }
})