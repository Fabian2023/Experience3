// Components/Menu.js
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl mb-8 font-bold">EXPERIENCES</h1>
      <ul className="space-y-4">
        <li className="text-4xl">
          <Link to="/simulador">Simulador</Link>
        </li>
        <li className="text-4xl">
          <Link to="/">Photobooth</Link>
        </li>
        <li className="text-4xl">
          <Link to="/memorymatch">Memory Match</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
