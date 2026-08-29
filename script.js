const botao = document.getElementById("botaoMenuH")
const linha = document.querySelectorAll(".linha")

botao.addEventListener("click",() => {
    const menu = document.querySelector(".menuH")

    menu.classList.toggle("ativo")
    linha.forEach((linha,i) => {
        linha.classList.toggle("menuFechar")
    })
    
})

const icons = document.querySelectorAll(".iconeTratamento")

const descricoes = document.querySelectorAll(".DescTratamento")

icons.forEach((icon, index) => {
    icon.addEventListener("click" , () => {
        if(descricoes[index]) { 
            toggleDescricao(icon , descricoes[index])
        }
    })
})

function toggleDescricao(icon, descricao){
    icon.classList.toggle("virar")

    if(icon.classList.contains("virar")) {
        descricao.style.maxHeight = descricao.scrollHeight + "px"
        descricao.style.padding = "15px 5%;"
    } else {
        descricao.style.maxHeight = "0"
        descricao.style.padding = "0"
    }
}

