import Link from "next/link";

const SubMenu1 = ({ subMenuItems }) => {
  return (
    <ul className="sub-menu-1">
      {subMenuItems.map((item, index) => (
        <li key={index} className={item.items ? "sub-items-1" : ""}>
          <Link href={item.href} title={item.title}>
            {item.label}
          </Link>
          {/* Render submenus recursively if they exist */}
          {item.items && <SubMenu subMenuItems={item.items} />}
        </li>
      ))}
    </ul>
  );
};

const SubMenu = ({ subMenuItems }) => {
  return (
    <ul className="sub-menu">
      {subMenuItems.map((item, index) => (
        <li key={index} className={item.items ? "sub-items sub-items-1" : ""}>
          <Link href={item.href} title={item.title}>
            {item.label}
          </Link>
          {/* Render submenus recursively if they exist */}
          {item.items && <SubMenu1 subMenuItems={item.items} />}
        </li>
      ))}
    </ul>
  );
};

const NavMenu = ({ menuItems }) => {
  return (
    <ul className="menu">
      {menuItems.map((item, index) => (
        <li key={index} className={item.items ? "sub-items" : ""}>
          <Link href={item.href} title={item.title}>
            {item.label}
          </Link>
          {/* Render submenus recursively if they exist */}
          {item.items && <SubMenu subMenuItems={item.items} />}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
