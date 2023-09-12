import { Button } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../CustomHeading";

const ActiveBtn = ({ i, text }) => {
  const temp = text.split(" ");
  const normalText = temp.filter((item, i) => i !== temp.length - 1);
  const highlight = temp[temp.length - 1];
  return (
    <Button
      display={"flex"}
      gap={"10px"}
      alignItems={"center"}
      border={"1px solid rgb(237, 3, 49)"}
      color={"#6C6768"}
      bgColor={"white"}
      justifyContent={"left"}
      boxShadow={
        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
      }
      textAlign={"left"}
      minW={"300px"}
      h={"80px"}
      rounded={"md"}
      mt={{ lg: "20px" }}
      _hover={{ bgColor: "white" }}
    >
      <Button p={"1rem"} bgColor={"#fedfe5"}>
        {i + 1}
      </Button>{" "}
      <CustomHeading underline={false} text={normalText} />{" "}
      <CustomHeading underline={true} text={highlight} />
    </Button>
  );
};

export default ActiveBtn;
