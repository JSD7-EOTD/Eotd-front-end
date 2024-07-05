import React from "react";
import logoWhite from "../../../public/images/icon/logo-white.png";
function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-gradient-to-r from-[#794222] to-[#BD8356] text-base-content lg:px-40">
        <aside>
          <img
            src={logoWhite}
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
          />
          <p className="text-white">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-white">Services</h6>
          <a className="link link-hover text-white">Branding</a>
          <a className="link link-hover text-white">Design</a>
          <a className="link link-hover text-white">Marketing</a>
          <a className="link link-hover text-white">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Company</h6>
          <a className="link link-hover text-white">About us</a>
          <a className="link link-hover text-white">Contact</a>
          <a className="link link-hover text-white">Jobs</a>
          <a className="link link-hover text-white">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Legal</h6>
          <a className="link link-hover text-white ">Terms of use</a>
          <a className="link link-hover text-white ">Privacy policy</a>
          <a className="link link-hover text-white ">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
