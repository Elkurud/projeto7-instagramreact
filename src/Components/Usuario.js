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
            <img src={foto} alt="" onClick={editarFoto} data-test="profile-image"/>
            <div class="texto">
                <span>
                <p data-test="name"><strong>{nome}</strong></p>
                <ion-icon name="pencil" onClick={editarNome} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}