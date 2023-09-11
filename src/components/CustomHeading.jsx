import { Image } from "@chakra-ui/react";
import React from "react";

const CustomHeading = ({ underline, text }) => {
  return (
    <span
      style={{
        color: "#ed0331",
        position: "relative",
      }}
    >
      {text}
      {underline ? (
        <Image
          src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
          alt="underline"
          pos={"absolute"}
          bottom={-2}
          left={0}
          w={"100%"}
          zIndex={10}
        />
      ) : null}
    </span>
  );
};

export default CustomHeading;
