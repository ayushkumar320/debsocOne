import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import { MdOutlineAlternateEmail } from "react-icons/md";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-center md:text-left">
            © {year} <span className="text-orange-400 font-semibold">SMVIT DEBSOC</span>. All rights reserved.
          </p>
          <h5 className="text-sm uppercase tracking-wide text-center">Follow us on social media</h5>
          <div className="flex space-x-5 text-2xl">
            <a
              href="https://www.instagram.com/smvit_debsoc/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors duration-300"
            >
              <BiLogoInstagramAlt />
            </a>
            <a
              href="https://www.facebook.com/people/SMVIT-DEBSOC/100085129608350/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors duration-300"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.youtube.com/@smvitdebsoc738"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors duration-300"
            >
              <TfiYoutube />
            </a>
            <a
              href="mailto:smvitdebsoc12@gmail.com"
              className="hover:text-orange-400 transition-colors duration-300"
            >
              <MdOutlineAlternateEmail />
            </a>
          </div>
        </div>
      </footer>

      <section className="bg-gray-950 text-gray-400 px-6 py-6">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="/Frontend/founder/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500 underline text-lg md:text-xl font-semibold"
          >
            Click here to Meet the Creators
          </a>
          <p className="text-sm md:text-base mt-3">
            This website was lovingly crafted by the development team of SMVIT Debating Society.
            From clean design to smooth functionality, everything you see is built by passionate minds who love tech and debates.
          </p>
          <p className="mt-2 text-sm">Want to collaborate or have suggestions? Reach out through our socials!</p>
        </div>
      </section>
    </>
  );
}

export default Footer;
