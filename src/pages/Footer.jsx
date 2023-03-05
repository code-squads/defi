import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="flex text-white justify-center p-10">
          <p className="copyright tracking-wider">
            © {year} Copyright <span className="font-bold ">Defi</span> by Code
            Squads. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
