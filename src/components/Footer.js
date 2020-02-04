import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo-sm.jpg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="text-light-blue-vivid-400 bg-black font-semibold border-t border-cool-grey-900 flex flex-col sm:flex-row  sm:justify-around sm:items-center">
        <div className="w-24 border rounded-lg overflow-hidden border-light-blue-vivid-400 mt-10 mx-auto sm:mx-0 sm:mt-0">
          <img
            src={logo}
            alt="Excellent Tech Solutions"
            // style={{ width: "12em", height: "8em" }}
          />
        </div>
        <section className="mt-10 sm:mt-0">
          <ul className="flex flex-col justify-center items-center">
            <li>
              <Link
                to="/"
                className="rounded hover:text-light-blue-vivid-700 focus:text-light-blue-vivid-700 focus:outline-none px-2 py-1"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="rounded hover:text-light-blue-vivid-700 focus:text-light-blue-vivid-700 focus:outline-none px-2 py-1"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="rounded hover:text-light-blue-vivid-700 focus:text-light-blue-vivid-700 focus:outline-none px-2 py-1"
                to="/blog"
              >
                Latest Stories
              </Link>
            </li>
            <li>
              <Link
                className="rounded hover:text-light-blue-vivid-700 focus:text-light-blue-vivid-700 px-2 py-1"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </section>
        <div className="flex justify-around py-10">
          <a
            title="facebook"
            className="bg-light-blue-vivid-200 p-3 hover:bg-light-blue-vivid-400 focus:bg-light-blue-vivid-400 focus:outline-none rounded"
            href="https://facebook.com"
          >
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a
            title="twitter"
            className="bg-light-blue-vivid-200 p-3 hover:bg-light-blue-vivid-400 focus:bg-light-blue-vivid-400 focus:outline-none rounded sm:mx-2"
            href="https://twitter.com"
          >
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a
            title="instagram"
            className="bg-light-blue-vivid-200 p-3 hover:bg-light-blue-vivid-400 focus:bg-light-blue-vivid-400 focus:outline-none"
            href="https://instagram.com"
          >
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;
