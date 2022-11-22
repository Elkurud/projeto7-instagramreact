import React from "react"


export default function Greet() {

    const [caixa, setCaixa] = React.useState(
        <div class="greet">
            <div class="card">
                <img src="https://www.itabirito.mg.leg.br/imagens/insta.png/image"/>
                <span>Seja Bem Vindo!</span>
                <button onClick={sumir}>Entrar</button>
            </div>
        </div>
    )

    function sumir(){
            const resposta = <div></div>
            setCaixa(resposta)
        }

    return(
        <div>
            {caixa}
        </div>
    )

}