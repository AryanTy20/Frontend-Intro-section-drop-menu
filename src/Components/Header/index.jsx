import { useState, useEffect, useRef } from "react";
import "./style.scss";

import {
  logo,
  calendarIcon,
  planningIcon,
  reminderIcon,
  todoIcon,
  menuIcon,
  closeMenuIcon,
} from "../../../assets";

import { useWindowResize } from "../../Hook/useWindowResize";

const Header = () => {
  const [height, width] = useWindowResize();
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = [
    {
      title: "Feature",
      submenu: [
        {
          icon: todoIcon,
          title: "Todo List",
        },
        {
          icon: calendarIcon,
          title: "Calendar",
        },
        {
          icon: reminderIcon,
          title: "Reminders",
        },
        {
          icon: planningIcon,
          title: "Planning",
        },
      ],
    },
    {
      title: "Company",
      submenu: [
        {
          title: "History",
        },
        {
          title: "Our Team",
        },
        {
          title: "Blog",
        },
      ],
    },
  ];

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {width < 600 && menuOpen && <div className="overlay"></div>}
        <ul
          className={width > 600 ? "menu" : "mobile-menu"}
          active={menuOpen.toString()}
        >
          {menu?.map((item, i) => (
            <li key={i}>
              <DropMenu menu={item} id={i} />
            </li>
          ))}
          <li>Careers</li>
          <li>About</li>
        </ul>
        {width > 600 && (
          <div className="auth">
            <p>Login</p>
            <button>Register</button>
          </div>
        )}
        {width < 600 && (
          <div className="ham" onClick={() => setMenuOpen(!menuOpen)}>
            <img src={menuOpen ? closeMenuIcon : menuIcon} alt="" />
          </div>
        )}
      </div>
    </>
  );
};

const DropMenu = ({ menu, id }) => {
  const [dropMenu, setDropMenu] = useState(false);
  return (
    <>
      <div className="dropmenu">
        <span onClick={() => setDropMenu(!dropMenu)}>
          {menu?.title}
          {dropMenu ? (
            <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
              <path strokeWidth="1.5" fill="none" d="m1 5 4-4 4 4" />
            </svg>
          ) : (
            <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
              <path strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4" />
            </svg>
          )}
        </span>
        {dropMenu && (
          <div
            className="out"
            style={{
              left: id > 0 && 0,
            }}
          >
            {menu?.submenu.map((item, i) => (
              <p key={i}>
                {item.icon && <img src={item.icon} alt="" />}
                {item.title}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
