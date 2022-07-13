import React from "react";
import { GithubIcon } from "./icons";
const Nav = () => {
  return (
    <>
      <div className="dark:bg-slate-800 hover:bg-slate-200 dark:text-gray-200 bg-slate-100 flex justify-between px-4 py-5 transition-all">
        <div className="text-xl font-bold">KIY</div>
        <div id="menu">
          <a
            href="https://github.com/Mdkawsarislam2002/Github_badge_Generator"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
