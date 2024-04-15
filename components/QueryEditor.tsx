import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const QueryEditor = () => {
  const [query, setQuery] = useState("");

  const handleRun = () => {
    // Implement your logic to execute the SQL query
    console.log("Running query:", query);
  };

  const handleFormat = () => {
    // Implement your logic to format the SQL query
    console.log("Formatting query:", query);
  };

  const getLineNumbers = () => {
    const lines = query.split("\n").length;
    return Array.from({ length: lines }, (_, i) => i + 1).join("\n");
  };

  return (
    <motion.div
      className="bg-white rounded-lg  shadow-effect-editor text-[13px] leading-4 h-[225px] "
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between  w-[764px] h-[49px] text-[#959593] border-b border-[#70451a12] ">
        <div className=" p-[6px] ">
          <span className=" py-[10px] px-[12px] text-[#959593] ">Preview</span>
          <span className=" py-[10px] px-[12px] text-[#e16741] ">SQL</span>
        </div>

        <div className="flex space-x-2 p-[10px]  ">
          <button className="h-7 pr-3 pl-2   " onClick={handleFormat}>
            <span>Format</span>
          </button>
          <button
            className=" py-[6px] pl-2 pr-3 text-[#aba8a6] bg-[#e3e0de] rounded-md flex justify-center items-center gap-2 "
            onClick={handleRun}
          >
            <FaPlay className="text-white" />
            <span>Run</span>
          </button>
        </div>
      </div>

      <div className="flex ">
        <div className="  text-gray-600 px-4 py-4 rounded-l-md h-[176px] bg-[#ededed4d] ">
          <pre>{getLineNumbers()}</pre>
        </div>
        <textarea
          className=" text-gray-800 bg-white w-full  p-4 rounded-r-md focus:outline-none  "
          placeholder="Enter your SQL query here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></textarea>
      </div>
    </motion.div>
  );
};

export default QueryEditor;
