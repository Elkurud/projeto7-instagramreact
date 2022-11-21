export default function Sugestoes() {

    const info = [
        {nome:"bad.vibes.memes", img:"assets/img/bad.vibes.memes.svg"}, 
        {nome:"chibirdart", img:"assets/img/chibirdart.svg"}, 
        {nome:"razoesparaacreditar", img:"assets/img/razoesparaacreditar.svg"}, 
        {nome:"adorable_animals", img:"assets/img/adorable_animals.svg"}, 
        {nome:"smallcutecats", img:"assets/img/smallcutecats.svg"}, 
    ]

    return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
    
            {info.map((f) => <Sugestao data={f}/>)}

        </div>
    )
}

function Sugestao(props){
    return(
        <div class="sugestao">
                <div class="usuario">
                    <img src={props.data.img} />
                    <div class="texto">
                        <div class="nome">{props.data.nome}</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
    )
}