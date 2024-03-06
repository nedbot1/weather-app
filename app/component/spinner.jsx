import React from "react";
import Image from "next/image";

const Spinner = () => {
  return (
    <>
      <Image
        className="m-auto block"
        src="/spinner.gif"
        width={100}
        height={100}
        alt="loading..."
      ></Image>
    </>
  );
};

export default Spinner;
