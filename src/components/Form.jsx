import React, { useRef, useState } from "react";
import LastArea from "./LastArea";

const Form = () => {
  const BadgeNameRef = useRef();
  const BadgeLogoRef = useRef();

  const [IsThere, setIsThere] = useState(false);
  const [BadgeName, setBadgeName] = useState("react");
  const [BadgeLogo, setBadgeLogo] = useState("react");
  const [BackGroundColor, setBackGroundColor] = useState("blue");
  let ResultImgValue = `https://img.shields.io/badge/${BadgeName}-${BackGroundColor}.svg?style=for-the-badge&logo=${BadgeLogo}&logoColor`;

  const changeHandler = (e) => {
    e.preventDefault();
    setBadgeName(BadgeNameRef.current.value);
    setBadgeLogo(BadgeLogoRef.current.value);
  };
  // const menuTrigger = () => {
  //   setMenuState((menuState) => !menuState);
  // };
  // let toggleStyle = menuState ? "squce" : "";

  const showResult = () => {
    setIsThere((IsThere) => !IsThere);
  };
  let flow = IsThere ? "toggle" : "h-0 ";

  return (
    <>
      <div className=" relative w-screen h-screen">
        <div className="border-opacity-60 border-slate-700 dark:border-slate-300 lg:mt-0 lg:top-16 lg:left-1/3 dark:bg-gray-800 lg:absolute w-full max-w-sm p-6 m-auto mt-10 bg-white border rounded-md shadow-md">
          <h1 className="dark:text-white text-3xl font-semibold text-center text-gray-700">
            Generate GitHub Badge
          </h1>

          <form onChange={changeHandler} className="mt-6">
            <div>
              <label
                htmlFor="username"
                className="dark:text-gray-200 block text-sm text-gray-800"
              >
                Badge Name
              </label>

              <input
                ref={BadgeNameRef}
                placeholder="Example:  React JS  (Any Name You Want )"
                type="text"
                className="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md"
              />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="dark:text-gray-200 block text-sm text-gray-800"
                >
                  Badge Logo
                </label>
              </div>

              <input
                placeholder="Example :  react (Exact Name ) "
                ref={BadgeLogoRef}
                type="text"
                className="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md"
              />
            </div>

            <div className="flex justify-between mt-4">
              {/*  BackgroundColor */}
              <div>
                <label htmlFor="cars" className="mb-2">
                  Background Color:
                </label>

                <select
                  onChange={(e) => {
                    setBackGroundColor(e.target.value);
                  }}
                  className=" 
     block
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                >
                  <option value="brightgreen">brightgreen</option>
                  <option value="green">green</option>
                  <option value="yellow">yellow</option>
                  <option value="orange">orange</option>
                  <option value="red">red</option>
                  <option value="blue">blue</option>
                  <option value="lightgrey">lightgrey</option>
                  <option value="success">success</option>
                  <option value="important">important</option>
                  <option value="critical">critical</option>
                  <option value="informational">informational</option>
                  <option value="inactive">inactive</option>
                  <option value="9cf">9cf</option>
                  <option value="ff69b4">ff69b4</option>
                  <option value="blueviolet">blueviolet</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <div className=" h-14 hover:bg-gray-600 focus:outline-none focus:bg-gray-600 flex items-center justify-center w-full px-4 py-2 m-auto mx-auto tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md">
                <h5 className="mx-2">Preview </h5>
                <img alt={BadgeName} src={ResultImgValue} />
                {/*<img alt="vue love" src="https://img.shields.io/badge/vue love-green.svg?style=for-the-badge&logo=vue.js&logoColor=blue"/> */}
                {/* BackGroundColor - LogoColor */}
              </div>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="dark:border-gray-600 lg:w-1/5 w-1/5 border-b"></span>

            <p className="dark:text-gray-400 hover:underline text-xs text-center text-gray-500 uppercase">
              KIY
            </p>

            <span className="dark:border-gray-400 lg:w-1/5 w-1/5 border-b"></span>
          </div>

          <LastArea
            showResultEvent={showResult}
            flow={flow}
            BadgeName={BadgeName}
            ResultImgValue={ResultImgValue}
          />
        </div>
      </div>
    </>
  );
};
export default React.memo(Form);
