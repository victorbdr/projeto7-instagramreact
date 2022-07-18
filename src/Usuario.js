function QuemUsa(props) {
  return (
    <div class="usuario">
      <img src={props.suafoto} alt="foto user" />
      <div class="texto">
        <strong>{props.logado}</strong>
        {props.seunome}
      </div>
    </div>
  );
}
function Usuario() {
  const usuarios = [
    {
      foto: "./img/catanacomics.svg",
      username: "catanacomics",
      nome: "Catana",
    },
  ];
  return (
    <div class="usuario">
      {usuarios.map((usuario) => (
        <QuemUsa
          suafoto={usuario.foto}
          logado={usuario.username}
          seunome={usuario.nome}
        />
      ))}
    </div>
  );
}

export default Usuario;
