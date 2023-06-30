import React from "react";
import '../index.css';
import iedcvideo from "./iedcvideo.mp4";

function Ino() {
  return (
    <div className=" h-full p-6 max-w-[1128px] m-auto">
      <div><p className="text-[#eceded] text-5xl bold font-[Inter] text-center font-bold">INO Points</p></div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex xl:flex-row sm:flex-col gap-16 font-[Inter] sm:text-center h-full">
        <div className="p-10 pr-40 w-full sm:items-center font-[Inter] sm:p-0">
          <h1 className="text-[#eceded] text-3xl font-[Inter] text-left font-bold  mb-3">INO Points</h1>
          <p className="text-[#9ca9b3] text-xl font-[Inter] text-left">Introducing 𝗜𝗡𝗢 𝗣𝗢𝗜𝗡𝗧𝗦 A revolution in how CET thinks. Your work and hardships will now be recognized by 𝗜𝗘𝗗𝗖 𝗖𝗘𝗧. Earn through registrations to events and workshops Redeem cash prize and vouchers. So what are you waiting for !! Start farming your INO POINTS now. 𝗖𝗢𝗠𝗣𝗘𝗧𝗘 𝗖𝗢𝗟𝗟𝗘𝗖𝗧 𝗖𝗢𝗡𝗡𝗘𝗖𝗧</p>
        </div>
        <video width={528} height={290.4} controls src={iedcvideo} autoPlay/>
      </div>
    </div>
  );
}

export default Ino;
