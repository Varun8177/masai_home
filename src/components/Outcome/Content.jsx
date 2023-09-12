import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Career from "./Content/Career";
import Ambition from "./Content/Ambition";
import Practice from "./Content/Practice";

const Content = ({ activeIndex }) => {
  const getContent = () => {
    switch (activeIndex) {
      case 0:
        return <Career />;
      case 1:
        return <Ambition />;
      case 2:
        return <Practice />;
      case 3:
        return (
          <Box m={"auto"} w={"70%"}>
            <Image
              src="https://www.masaischool.com/images/new-homepage/outcome/holistic-outcome.png"
              objectFit={"cover"}
            />
          </Box>
        );
      default:
        return <Career />;
    }
  };
  return (
    <Box
      mt={"20px"}
      bgColor={"#f7f7ff"}
      flexGrow={1}
      rounded={"lg"}
      border={"2px solid #e7e6e6"}
      minH={"50vh"}
      p={"1rem"}
    >
      {/* <Career /> */}
      {getContent()}
    </Box>
  );
};

export default Content;
