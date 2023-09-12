import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

const InactiveBtn = ({ i, text, handleActiveIndex }) => {
  const [Hovered, SetHovered] = useState(false);

  return (
    <Button
      display={"flex"}
      gap={"10px"}
      alignItems={"center"}
      border={"1px solid rgb(206, 204, 205)"}
      color={"#6C6768"}
      bgColor={"white"}
      justifyContent={"left"}
      textAlign={"left"}
      minW={"300px"}
      h={"80px"}
      rounded={"md"}
      mt={{ lg: "20px" }}
      onClick={() => handleActiveIndex(i)}
      _hover={{ bgColor: "#fffafb" }}
      onMouseEnter={() => SetHovered(true)}
      onMouseLeave={() => SetHovered(false)}
    >
      <Button
        p={"1rem"}
        bgColor={Hovered ? "white" : "#cccccc"}
        color={Hovered ? "#ed0331" : "#6C6768"}
      >
        {i + 1}
      </Button>{" "}
      {text}
    </Button>
  );
};

export default InactiveBtn;
