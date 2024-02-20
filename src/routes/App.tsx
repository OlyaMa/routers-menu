import { Outlet } from "react-router-dom";
import Menu from "./Menu.tsx";

export default function App() {
  return (
    <div>
      <div>
        <Menu />
        <div className="page">
          <Outlet />
        </div>
      </div>
    </div>
  );
}