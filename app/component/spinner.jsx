import React from "react";
import spinner from "../../public/spinner.gif";
import Image from "next/image";

const Spinner = () => {
  return (
    <>
      <Image
        className="w-[100px] m-auto block"
        src={spinner}
        alt="loading..."
      ></Image>
    </>
  );
};

export default Spinner;
