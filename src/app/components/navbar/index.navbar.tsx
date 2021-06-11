import React from "react";
import logo from "../../../assets/img/Aktindo-Logo.svg";

import { Link } from "react-router-dom";
import { Tooltip } from "@material-ui/core";

export interface NavbarProps {}

export interface NavbarState {
  theme: string;
}

export interface Item {
  label: string;
  icon: string;
  href: string;
}

export class Navbar extends React.Component<NavbarProps, NavbarState> {
  state = {
    theme: "aktindo-dark",
  };

  componentDidMount() {
    this.updateTheme();
  }

  render() {
    const items: Item[] = [
      {
        label: "Home",
        icon: "home",
        href: "/",
      },
      {
        label: "Projects",
        icon: "biotech",
        href: "/projects",
      },
      {
        label: "Skills",
        icon: "code",
        href: "/skills",
      },
    ];

    return (
      <div className="navbar shadow-lg bg-neutral text-neutral-content">
        <div className="flex-none px-2 mx-2 text-center">
          <img src={logo} alt="" width="32px" className="align-middle" />
          <span className="text-lg tracking-wider uppercase font-bold font-poppins align-middle">
            Aktindo
          </span>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="items-stretch flex">
            {items &&
              items.map((item: Item, index) => (
                <Tooltip
                  key={index}
                  title={item.label}
                  placement="bottom"
                  arrow
                >
                  <Link to={item.href} className="btn btn-square btn-ghost">
                    <span className="material-icons-round">{item.icon}</span>
                  </Link>
                </Tooltip>
              ))}
          </div>
        </div>
        <div className="flex-none">
          <button
            className="btn btn-ghost btn-square"
            onClick={() => this.changeTheme()}
          >
            <span className="material-icons-round">
              {this.state.theme === "aktindo-light"
                ? "dark_mode"
                : "light_mode"}
            </span>
          </button>
        </div>
      </div>
    );
  }

  updateTheme() {
    const theme = localStorage.getItem("theme") || this.state.theme;

    document.querySelector("html")?.setAttribute("data-theme", theme);
  }

  changeTheme() {
    const theme = localStorage.getItem("theme") || this.state.theme;

    if (theme === "aktindo-light") {
      document
        .querySelector("html")
        ?.setAttribute("data-theme", "aktindo-dark");
      localStorage.setItem("theme", "aktindo-dark");
      this.setState({ theme: "aktindo-dark" });
    } else {
      document
        .querySelector("html")
        ?.setAttribute("data-theme", "aktindo-light");
      localStorage.setItem("theme", "aktindo-light");
      this.setState({ theme: "aktindo-light" });
    }
  }
}
