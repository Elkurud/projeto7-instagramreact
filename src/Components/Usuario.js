import React from "react"


export default function Usuario() {
    
    const [nome, setNome] = React.useState("Catana")
    const [foto, setFoto] = React.useState("assets/img/catanacomics.svg")
    
    function editarNome() {

        const resposta = prompt("Qual será o seu novo nome?")
        setNome(resposta)
    }
    
    function editarFoto() {

        const resposta = prompt("Insira o link de sua nova foto?")
        if (resposta){
            setFoto(resposta)
        }
    }

    return(
        <div class="usuario">
            <img src={foto} onClick={editarFoto}/>
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                {nome}
                <ion-icon name="pencil" onClick={editarNome} ></ion-icon>
                </span>
            </div>
        </div>
    )
}