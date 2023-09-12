import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import CustomHeading from "../CustomHeading";
import Sidebar from "../Outcome/Sidebar";
import Content from "../Outcome/Content";

const OutcomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Box>
        <Heading textAlign={"center"} fontSize={"35"} my={"30px"}>
          Driven By <CustomHeading underline={true} text={"Outcomes"} /> To
          Launch Your Career In Tech
        </Heading>

        <Flex
          w={{ base: "100%", xl: "80%" }}
          m={"auto"}
          gap={"10px"}
          flexDir={{ base: "column", lg: "row" }}
        >
          <Sidebar
            activeIndex={activeIndex}
            handleActiveIndex={handleActiveIndex}
          />
          <Content activeIndex={activeIndex} />
        </Flex>
      </Box>
    </>
  );
};

export default OutcomePage;
