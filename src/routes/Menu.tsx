import MenuItem from "../components/MenuItem";

const menuItems = [
  {
    name: "Главная",
    path: "/",
  },
  {
    name: "Дрифт-такси",
    path: "/drift",
  },
  {
    name: "Time Attack",
    path: "/timeattack",
  },
  {
    name: "Forza Karting",
    path: "/forza",
  },
];

export default function Menu() {
  return (
    <div>
      <nav className="menu">
        {menuItems.map((item) => {
          return <MenuItem item={item} key={item.name} />;
        })}
        ;
      </nav>
    </div>
  );
}