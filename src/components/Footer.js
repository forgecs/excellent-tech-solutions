import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo-sm.jpg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="text-light-blue-vivid-400 bg-black">
        <div className=" font-semibold border-t border-cool-grey-900 flex flex-col sm:flex-row sm:justify-around sm:items-center">
          <address className="text-center mx-auto sm:mx-0 mt-10 sm:mt-0">
            <div>1240 Commercial Drive,</div>
            <div>Unit F-1, Gulf Shores, AL 36542</div>
            <a href="tel:+12519797743">251-979-7743</a> <br />
            <a href="mailto:excellenttechsolutions@gmail.com">
              excellenttechsolutions@gmail.com
            </a>
          </address>
          <div className="flex justify-around py-10">
            <a
              title="facebook"
              className="bg-light-blue-vivid-200 p-1 hover:bg-light-blue-vivid-400 focus:bg-light-blue-vivid-400 focus:outline-none rounded"
              href="https://facebook.com"
            >
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: "2em", height: "2em" }}
              />
            </a>
          </div>
          <div className="pb-10 sm:pb-0">
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
          </div>
        </div>
        <div className="flex justify-center">
          <div className="inline-block border-t border-cool-grey-900 py-4">
            <div className="footer-copyright">
              © {new Date().getFullYear()} Excellent Tech Solutions
            </div>
            <div>
              Built by{" "}
              <a
                className="border-b border-r border-light-blue-vivid-400 hover:text-cool-grey-050 hover:bg-light-blue-vivid-400 pb-1 pr-1"
                href="https://www.forgecs.com/"
              >
                Forge Creative Systems
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
