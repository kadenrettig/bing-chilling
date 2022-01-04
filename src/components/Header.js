import React from "react";

const Header = () => {
  return (
    <header
      id="top"
      class="fixed w-full bg-red-800 text-white md:flex md:justify-between"
    >
      <a class="text-lg font-bold block px-6 py-4"> WE ARE WATCHING </a>
      <nav>
        <ul className="m-3 md:flex">
          <li>
            <a
              href="https://nhglobalpartners.com/china-social-credit-system-explained/"
              className="button m-3 font-bold rounded-full text-xl shadow bg-gray-800 px-4 py-2 text-white hover:bg-red-400"
            >
              APPLY FOR SOCIAL CREDIT
            </a>
          </li>
          <li>
            <a
              href="https://www.biography.com/athlete/john-cena"
              className="button m-3 font-bold rounded-full text-xl shadow bg-gray-800 px-4 py-2 text-white hover:bg-red-400"
            >
              {" "}
              ABOUT OUR REPRESENTATIVE
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Death"
              className="button m-3 font-bold rounded-full text-xl shadow bg-gray-800 px-4 py-2 text-white hover:bg-red-400"
            >
              {" "}
              FORBIDDEN
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
