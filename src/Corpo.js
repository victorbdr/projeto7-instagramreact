function MenuStories(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.img} />
      </div>
      <div class="usuario">{props.usuario}</div>
    </div>
  );
}

function Corpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <div class="stories">
          <MenuStories img="./img/9gag.svg" usuario="9gag" />
          <MenuStories img="./img/meowed.svg" usuario="meowed" />
          <MenuStories img="./img/barked.svg" usuario="barked" />
          <MenuStories
            img="./img/nathanwpylestrangeplanet.svg"
            usuario="nathanwpylestrangeplanet"
          />
          <MenuStories img="./img/wawawicomics.svg" usuario="wawawicomics" />
          <MenuStories img="./img/respondeai.svg" usuario="respondeai" />
          <MenuStories img="./img/filomoderna.svg" usuario="filomoderna" />
          <MenuStories
            img="./img/memeriagourmet.svg"
            usuario="memeriagourmet"
          />
        </div>
      </div>
    </div>
  );
}
export default Corpo;
