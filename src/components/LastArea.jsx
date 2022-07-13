import React from "react";
import { PlusIcon } from "./icons";
import { CopyBtn } from "./icons";

const LastArea = ({ showResultEvent, ResultImgValue, BadgeName, flow }) => {
  const CopyToClipBoard = (e) => {
    let resultCopy = `<img alt='${BadgeName}' src='${ResultImgValue}' />`;
    navigator.clipboard.writeText(resultCopy);
  };
  return (
    <>
      <div className="flex items-center mt-6 -mx-2">
        <button
          onClick={showResultEvent}
          type="button"
          className="hover:bg-blue-400 focus:bg-blue-400 focus:outline-none flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md"
        >
          <PlusIcon />

          <span className="sm:inline mx-2">Get Code</span>
        </button>

        <button
          onClick={CopyToClipBoard}
          className="hover:bg-gray-200 p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-200 transform bg-gray-300 rounded-md"
        >
          <CopyBtn />
        </button>
      </div>
      <input
        className={`resultArea px-4  border-slate-900 overflow-hidden w-full transition-all duration-500   mt-2 border-2  rounded-lg ${flow}`}
        type="textarea"
        placeholder="ResultImgValue"
        readOnly
        value={ResultImgValue}
      />
    </>
  );
};

export default LastArea;
