export default function Stories() {

    const info = [
        {imagem: "assets/img/9gag.svg", nome: "9gag"}, 
        {imagem: "assets/img/meowed.svg", nome: "meowed"}, 
        {imagem: "assets/img/barked.svg", nome: "barked"}, 
        {imagem: "assets/img/nathanwpylestrangeplanet.svg", nome: "nathanwpylestrangeplanet"}, 
        {imagem: "assets/img/wawawicomics.svg", nome: "wawawicomics"}, 
        {imagem: "assets/img/respondeai.svg", nome: "respondeai"}, 
        {imagem: "assets/img/filomoderna.svg", nome: "filomoderna"}, 
        {imagem: "assets/img/memeriagourmet.svg", nome: "memeriagourmet"}
    ]

    return(
        <div class="stories">

            {info.map((f) => <Story data={f}/>)}
    
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props) {
    return(
        <div class="story">
            <div class="imagem">
                <img src={props.data.imagem} />
            </div>
            <div class="usuario">
                {props.data.nome}
            </div>
        </div>
    )
}