"use client";

import Image from "next/image";
import React from "react";

interface ExploreBtnProps {
  text: string;
}

const ExploreBtn: React.FC<ExploreBtnProps> = ({ text }) => {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={() => console.log("CLICK")}
    >
      <a href="#events">
        <span>{text || "Click Me"}</span>
        <Image
          src="/icons/arrow-down.svg"
          alt="arrow-down"
          width={24}
          height={24}
        />
      </a>
    </button>
  );
};

export default ExploreBtn;
