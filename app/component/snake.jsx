import React from "react";
import snake from "../../public/snake.gif";
import Image from "next/image";

const Snake = () => {
  return (
    <>
      <Image
        className="w-[100px] m-auto block"
        src={snake}
        alt="loading..."
      ></Image>
    </>
  );
};

export default Snake;
