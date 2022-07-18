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

function Stories() {
  const contStories = [
    { image: "./img/9gag.svg", title: "9gag" },
    { image: "./img/meowed.svg", title: "meowed" },
    { image: "./img/barked.svg", title: "barked" },
    {
      image: "./img/nathanwpylestrangeplanet.svg",
      title: "nathanwpylestrangeplanet",
    },
    { image: "./img/wawawicomics.svg", title: "wawawicomics" },
    { image: "./img/respondeai.svg", title: "respondeai" },
    { image: "./img/filomoderna.svg", title: "filomoderna" },
    { image: "./img/memeriagourmet.svg", title: "memeriagourmet" },
  ];
  return (
    <div class="corpo">
      <div class="esquerda">
        <div className="stories">
          {contStories.map((storie) => (
            <MenuStories img={storie.image} usuario={storie.title} />
          ))}
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stories;
