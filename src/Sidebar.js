import Usuario from "./Usuario";
import ParaVoce from "./ParaVoce";
import Links from "./Links";
function Sugestao(props) {
  return (
    <div class="sidebar">
      <div class="sugestoes">
        <div class="sugestao">
          <div class="usuario">
            <img src={props.img} alt="fotouser" />
            <div class="texto">
              <div class="nome">{props.user}</div>
              <div class="razao">{props.follow}</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>
      </div>
    </div>
  );
}
function Sidebar() {
  const sugestoes = [
    {
      foto: "./img/bad.vibes.memes.svg",
      usuario: "bad.vibes.memes",
      situacao: "Segue você",
    },
    {
      foto: "./img/chibirdart.svg",
      usuario: "chibirdart",
      situacao: "Segue você",
    },
    {
      foto: "./img/razoesparaacreditar.svg",
      usuario: "razoesparaacreditar",
      situacao: "Novo no Instagram",
    },
    {
      foto: "./img/adorable_animals.svg",
      usuario: "adorable_animals",
      situacao: "Segue você",
    },
    {
      foto: "./img/smallcutecats.svg",
      usuario: "smallcutecats",
      situacao: "Segue você",
    },
  ];
  return (
    <div class="sidebar">
      <Usuario />
      <ParaVoce />
      {sugestoes.map((sugestao) => (
        <Sugestao
          img={sugestao.foto}
          user={sugestao.usuario}
          follow={sugestao.situacao}
        />
      ))}
      <Links />
    </div>
  );
}

export default Sidebar;
