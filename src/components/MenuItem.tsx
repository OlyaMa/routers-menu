import { NavLink, useMatch } from "react-router-dom";

interface MenuItemProps {
  item: {
    name: string;
    path: string;
  };
}

export default function MenuItem({ item }: MenuItemProps) {
  const match = useMatch(item.path);
  return (
    <NavLink
      key={item.name}
      to={item.path}
      className={match ? "menu__item-active menu__item" : "menu__item"}
    >
      {item.name}
    </NavLink>
  );
}