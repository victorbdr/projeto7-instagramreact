import React from "react";
function Posts() {
  const [postContents, setPostContents] = React.useState([
    {
      usuario: "./img/meowed.svg",
      nome: "meowed",
      conteudo: "./img/gato-telefone.svg",
      curtido: "./img/respondeai.svg",
      quemcurtiu: "respondeai",
      quantos: "outras 101.523 pessoas",
      estaCurtido: false,
    },
    {
      usuario: "./img/barked.svg",
      nome: "barked",
      conteudo: "./img/dog.svg",
      curtido: "./img/adorable_animals.svg",
      quemCurtiu: "adorable_animals",
      quantos: "outras 99.159 pessoas",
      estaCurtido: false,
    },
  ]);
  /* const postContents = [
    {
      usuario: "./img/meowed.svg",
      nome: "meowed",
      conteudo: "./img/gato-telefone.svg",
      curtido: "./img/respondeai.svg",
      quemcurtiu: "respondeai",
      quantos: "outras 101.523 pessoas",
    },
    {
      usuario: "./img/barked.svg",
      nome: "barked",
      conteudo: "./img/dog.svg",
      curtido: "./img/adorable_animals.svg",
      quemcurtiu: "adorable_animals",
      quantos: "outras 99.159 pessoas",
    },
  ]; */

  function likePost(index) {
    const posts = [...postContents];
    posts[index].estaCurtido = !posts[index].estaCurtido;
    setPostContents(posts);
  }

  function Attributes(props) {
    return (
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.profile} alt="profile" />
            {props.name}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
        <div class="conteudo">
          <img src={props.foto} alt="post" />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div class="icones">
              <div class="vermelho" onClick={() => likePost(props.index)}>
                {props.estaCurtido ? (
                  <ion-icon name="heart" class="redheart"></ion-icon>
                ) : (
                  <ion-icon name="heart-outline"></ion-icon>
                )}
              </div>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.like} alt="curtido" />
            <div class="texto">
              Curtido por <strong>{props.quemgosta}</strong> e
              <strong>{[props.numero]}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class="usuario">
      {postContents.map((postContent, index) => (
        <Attributes
          profile={postContent.usuario}
          name={postContent.nome}
          foto={postContent.conteudo}
          like={postContent.curtido}
          quemgosta={postContent.quemCurtiu}
          numero={postContent.quantos}
          estaCurtido={postContent.estaCurtido}
          index={index}
        />
      ))}
    </div>
  );
}
export default Posts;
