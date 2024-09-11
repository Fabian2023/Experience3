import { useRoutes, BrowserRouter } from "react-router-dom";
import Register from "./Components/Register";
import PhotoCam from "./Components/PhotoCam";
import Landingin from "./Components/Landing";
import  Simulador from "./Components/Simulator";
import MemoryMatch from "./Components/Memory";
import Menu from "./Components/Menu";



import "./App.css";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Landingin /> },
    { path: "/Photo", element: <PhotoCam /> },
    { path: "/register", element: <Register /> },
    { path: "/simulador", element: <Simulador /> },
    { path: "/memorymatch", element: <MemoryMatch /> },
    {path: "/menu", element: <Menu /> },
    
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
