import React from "react"

export default function Posts() {

    const postinfo = [
        {nome: "meowed", perfil: "assets/img/meowed.svg", post: "assets/img/gato-telefone.svg", likes: 101523, likerimg: "assets/img/respondeai.svg", liker: "respondeai"},
        {nome: "barked", perfil: "assets/img/barked.svg", post: "assets/img/dog.svg", likes: 99159, likerimg: "assets/img/adorable_animals.svg", liker: "adorable_animals"}
    ]
    return(
        <div class="posts">
            {postinfo.map((f) => <Post data={f}/>)}
        </div>
    )
}


function Post(props) {
   
  /*func de save e unsave*/

  const [bookmark, setBookmark] = React.useState(<ion-icon name="bookmark-outline" onClick={save}></ion-icon>)
  
  function save() {

    const resposta = <ion-icon name="bookmark" class="bookmark" onClick={unsave}></ion-icon>
    setBookmark(resposta)

  }

  function unsave() {
    
    const resposta = <ion-icon name="bookmark-outline" onClick={save}></ion-icon>
    setBookmark(resposta)

  }

  /*func de like e deslike*/

  const [like, setLike] = React.useState(<ion-icon name="heart-outline" onClick={curtir}></ion-icon>)
  const [num1, setNum1] = React.useState(props.data.likes)
  const [img, setImg] = React.useState(<img src={props.data.post} onClick={curtir}/>)

  function curtir() {

    const x = <img src={props.data.post}/>
    let novoNum = num1 + 1
    const resposta = <ion-icon name="heart" class="heart" onClick={removeLike}></ion-icon>
    setLike(resposta)
    setNum1(novoNum)
    setImg(x)

  }

  function removeLike() {
    
    const x = <img src={props.data.post} onClick={curtir}/>
    const novoNum = num1
    const resposta = <ion-icon name="heart-outline" onClick={curtir}></ion-icon>
    setLike(resposta)
    setNum1(novoNum)
    setImg(x)

  }

  return(
            <div class="post">
                <div class="topo">
                  <div class="usuario">
                    <img src={props.data.perfil} />
                    {props.data.nome}
                  </div>
                  <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                  </div>
                </div>
    
                <div class="conteudo" >
                  {img}
                </div>
    
                <div class="fundo">
                  <div class="acoes">
                    <div>
                      {like}
                      <ion-icon name="chatbubble-outline"></ion-icon>
                      <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                      {bookmark}
                    </div>
                  </div>
    
                  <div class="curtidas">
                    <img src={props.data.likerimg} />
                    <div class="texto">
                      Curtido por <strong>{props.data.liker}</strong> e <strong>outras {num1} pessoas</strong>
                    </div>
                  </div>
                </div>
            </div>
    )
}