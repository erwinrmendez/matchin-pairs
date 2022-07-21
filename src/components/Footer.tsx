import React from "react";

const Footer = () => {
  return (
    <footer>
      <p className="text-xs text-white text-center p-4">
        &copy; {new Date().getFullYear()} - Created by{" "}
        <a href="https://github.com/erwinrmendez">@ErwinM</a>
      </p>
      <p className="text-xs text-slate-400">
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
