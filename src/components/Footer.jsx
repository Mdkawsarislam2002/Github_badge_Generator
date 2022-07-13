import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <h2 className="text-xl font-bold text-center">Find Me Here </h2>
        <div className=" flex flex-wrap items-center justify-center">
          <a className="m-2" href="https://twitter.com/mdkawsar2002">
            <img src="https://img.shields.io/badge/@MdKawsar2002-323330?style=for-the-badge&logo=twitter&logoColor=white" />
          </a>
          <a className="m-2" href="https://www.facebook.com/mdkawsarislam2002/">
            <img src="https://img.shields.io/badge/Md Kawsar Islam Yeasin-323330?style=for-the-badge&logo=Facebook&logoColor=white" />
          </a>
          <a className="m-2" href="https://github.com/mdkawsar2002">
            <img src="https://img.shields.io/badge/Md Kawsar Islam Yeasin-323330?style=for-the-badge&logo=github&logoColor=white" />
          </a>
          <a
            className="m-2"
            href="https://www.linkedin.com/in/md-kawsar-islam-yeasin-8bb808222/"
          >
            <img src="https://img.shields.io/badge/Md Kawsar Islam Yeasin-323330?style=for-the-badge&logo=linkedin&logoColor=white" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
