import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Stories from "./Stories";
function Corpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>
      <div class="sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

export default Corpo;
