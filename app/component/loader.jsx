import React from "react";
import RnNp from "../../public/RnNP.gif";
import Image from "next/image";

const Loader = () => {
  return (
    <>
      <Image
        className="w-[100px] m-auto block"
        src={RnNp}
        alt="loading..."
      ></Image>
    </>
  );
};

export default Loader;
