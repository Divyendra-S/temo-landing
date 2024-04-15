import React, { useState } from "react";
import Table from "./Table";
import Background from "../public/background.png";
import Image from "next/image";
import QueryEditor from "./QueryEditor";
import Visual from "../public/Visual.png";
import { cn } from "@/lib/utils/cn";

const QuerySection = () => {
  const [QueryId, setQueryId] = useState(1);
  return (
    <div>
      <div className="bg-[#FBFAF9]  w-[1188px] rounded-[35px] pt-[136px] pb-[72px] flex flex-col  text-center items-center ">
        <div className="">
          <h2 className=" text-[48px] text-[#37322f] leading-[52px] ">
            Query your data - your way
          </h2>
          <p className=" mt-2 text-[#4a4340] text-[16px] leading-[24px] flex justify-center ">
            Streamline your data analysis with our seamless SQL and visual
            editor.
            <br /> Give everyone in your team the superpowers they need.
          </p>
          <div className=" my-[24px] mx-auto text-center h-8 w-[216px] ">
            <div className="flex rounded-full  justify-between bg-white shadow-effect-tabs">
              <div
                onClick={() => setQueryId(1)}
                className={cn(
                  " rounded-l-full  bg-white text-[14px] leading-[20px] border-r border-light-gray px-4 py-2 w-1/2 flex gap-2 justify-center cursor-default",
                  {
                    "scale-105 transition duration-100 shadow-effect-tabs":
                      QueryId == 1,
                  }
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  height="20"
                  width="20"
                >
                  <path
                    fill="#37322F"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.75 4.5C1.75 2.98122 2.98122 1.75 4.5 1.75L15.5 1.75C17.0188 1.75 18.25 2.98122 18.25 4.5L18.25 15.5C18.25 17.0188 17.0188 18.25 15.5 18.25L4.5 18.25C2.98122 18.25 1.75 17.0188 1.75 15.5L1.75 4.5ZM4.5 3.25C3.80965 3.25 3.25 3.80965 3.25 4.5L3.25 15.5C3.25 16.1904 3.80965 16.75 4.5 16.75L15.5 16.75C16.1904 16.75 16.75 16.1904 16.75 15.5L16.75 4.5C16.75 3.80965 16.1904 3.25 15.5 3.25L4.5 3.25ZM5.66685 9.55C5.91537 9.21863 6.38547 9.15147 6.71685 9.39999L8.31686 10.6L8.35019 10.625C8.56528 10.7862 8.78722 10.9525 8.94871 11.1149C9.13178 11.299 9.35022 11.5876 9.35022 12C9.35022 12.4124 9.13177 12.701 8.9487 12.8851C8.78721 13.0475 8.56527 13.2138 8.35018 13.375L8.31685 13.4L6.71679 14.6C6.38541 14.8485 5.91531 14.7814 5.66679 14.45C5.41827 14.1186 5.48543 13.6485 5.81681 13.4L7.41687 12.2C7.52135 12.1216 7.60724 12.0572 7.68071 12C7.60724 11.9428 7.52135 11.8783 7.41687 11.8L5.81686 10.6C5.48548 10.3515 5.41832 9.88138 5.66685 9.55ZM11.0665 13.25C10.6523 13.25 10.3165 13.5858 10.3165 14C10.3165 14.4142 10.6523 14.75 11.0665 14.75L13.9999 14.75C14.4141 14.75 14.7499 14.4142 14.7499 14C14.7499 13.5858 14.4141 13.25 13.9999 13.25L11.0665 13.25Z"
                  />
                </svg>
                SQL
              </div>

              <div
                onClick={() => setQueryId(2)}
                className={cn(
                  " rounded-r-full  bg-white text-[14px] leading-[20px]  px-4 py-2 w-1/2 flex gap-2 justify-center cursor-default",
                  {
                    "scale-105 transition duration-100 shadow-effect-tabs":
                      QueryId == 2,
                  }
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21 20"
                  height="20"
                  width="21"
                >
                  <path
                    fill="#605A57"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 1.75C3.48122 1.75 2.25 2.98122 2.25 4.5V15.5C2.25 17.0188 3.48122 18.25 5 18.25H16C17.5188 18.25 18.75 17.0188 18.75 15.5V4.5C18.75 2.98122 17.5188 1.75 16 1.75H5ZM3.75 4.5C3.75 3.80964 4.30964 3.25 5 3.25H16C16.6904 3.25 17.25 3.80964 17.25 4.5V15.5C17.25 16.1904 16.6904 16.75 16 16.75H5C4.30964 16.75 3.75 16.1904 3.75 15.5V4.5ZM9.04064 13.0061L7.12731 6.6283L13.5051 8.54163L12.0678 9.49985C11.7002 9.74488 11.6487 10.2649 11.9611 10.5773L14.0506 12.6667L13.1658 13.5516L11.0763 11.4621C10.7639 11.1497 10.2439 11.2012 9.99886 11.5688L9.04064 13.0061ZM6.58271 5.21208C6.04875 5.05189 5.5509 5.54974 5.71109 6.0837L8.19665 14.3689C8.36686 14.9363 9.12097 15.0489 9.44956 14.556L10.659 12.7419L12.6708 14.7536C12.9441 15.027 13.3874 15.027 13.6607 14.7536L15.2526 13.1617C15.526 12.8884 15.526 12.4451 15.2526 12.1718L13.2409 10.16L15.055 8.95055C15.5479 8.62196 15.4353 7.86786 14.8679 7.69764L6.58271 5.21208Z"
                  />
                </svg>
                Visual
              </div>
            </div>
          </div>
        </div>
        {QueryId === 1 ? (
          <div className="flex flex-col items-center">
            {" "}
            <Table />
            <div className="bg-[#37322f] gap-1 rounded-[10px] mt-[18px] mb-4 flex text-[#fbfaf9] py-2 pl-3 font-[500] pr-4 shadow-effect-editor-button text-[14px] leading-5 ">
              <svg
                fill="none"
                height="20"
                viewBox="0 0 20 20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1667 16.6684C11.1667 16.8525 11.0174 17.0018 10.8333 17.0018C10.6492 17.0018 10.5 16.8525 10.5 16.6684C10.5 16.4844 10.6492 16.3351 10.8333 16.3351C11.0174 16.3351 11.1667 16.4844 11.1667 16.6684ZM15.1891 5.65808L14.9391 5.22507L15.1891 5.65808C15.3485 5.56603 15.5524 5.62066 15.6445 5.78009C15.7365 5.93952 15.6819 6.14338 15.5225 6.23543C15.363 6.32748 15.1592 6.27285 15.0671 6.11342L14.6467 6.35612L15.0671 6.11342C14.9751 5.95399 15.0297 5.75013 15.1891 5.65808ZM16.6667 8.83511C16.8508 8.83511 17 8.98435 17 9.16845C17 9.35254 16.8508 9.50178 16.6667 9.50178C16.4826 9.50178 16.3333 9.35254 16.3333 9.16845C16.3333 8.98435 16.4826 8.83511 16.6667 8.83511ZM16.3579 12.3248C16.5173 12.4168 16.5719 12.6207 16.4799 12.7801C16.3878 12.9395 16.184 12.9942 16.0246 12.9021C15.8651 12.8101 15.8105 12.6062 15.9025 12.4468C15.9946 12.2873 16.1985 12.2327 16.3579 12.3248ZM14.345 15.1919C14.4371 15.3514 14.3824 15.5552 14.223 15.6473C14.0636 15.7393 13.8597 15.6847 13.7677 15.5253C13.6756 15.3658 13.7302 15.162 13.8897 15.0699L13.6397 14.6369L13.8897 15.0699C14.0491 14.9779 14.253 15.0325 14.345 15.1919Z"
                  fill="currentColor"
                  stroke="currentColor"
                ></path>
                <path
                  d="M7.70833 12.2917V16.875H3.125M7.5 16.4063C4.93915 15.4062 3.125 12.915 3.125 10C3.125 6.20304 6.20304 3.125 10 3.125C10.9614 3.125 11.8768 3.32235 12.7077 3.67876"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
              Load Query
            </div>
            <QueryEditor />
          </div>
        ) : (
          <div>
            <Image src={Visual} alt="visual" width={816} height={650} />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuerySection;
