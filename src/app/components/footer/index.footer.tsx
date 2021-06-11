import React from "react";
import logo from "../../../assets/img/Aktindo-Logo.svg";

export interface FooterProps {}

export interface FooterState {}

export class Footer extends React.Component<FooterProps, FooterState> {
  state = {};
  render() {
    return (
      <footer className="body-font bg-base-200 fixed left-0 bottom-0 w-full z-50">
        <div className="container px-4 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center">
            <img src={logo} alt="Aktindo-Logo" width="50px" />
            <span className="ml-1 text-xl uppercase font-poppins font-bold">
              Aktindo
            </span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-base-300 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} Aktindo Inc. —
            <a
              href="https://twitter.com/aktindo"
              className="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @aktindo
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start z-0">
            <a
              className="text-gray-400 hover:text-gray-500 transition duration-300 mr-3"
              href="https://github.com/Aktindo"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="text-gray-400 hover:text-gray-500 transition duration-300 mr-3"
              href="https://twitter.com/aktindo"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="text-gray-400 hover:text-gray-500 transition duration-300"
              href="http://localhost:3000/discord"
            >
              <i className="fab fa-discord"></i>
            </a>
          </span>
        </div>
      </footer>
    );
  }
}
