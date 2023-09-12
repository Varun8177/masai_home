import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import ActiveBtn from "./ActiveBtn";
import InactiveBtn from "./InactiveBtn";

const Sidebar = ({ activeIndex, handleActiveIndex }) => {
  const sections = [
    "Career Launchpad",
    "Nurture Ambition",
    "Practice Based",
    "Industry Readiness",
    "Holistic Development",
  ];
  return (
    <Flex
      minW={"300px"}
      flexDir={{ base: "row", lg: "column" }}
      justifyContent={"space-between"}
      gap={"10px"}
      overflowX={"auto"}
      className="scroll-container"
    >
      {sections.map((item, i) =>
        i === activeIndex ? (
          <ActiveBtn key={i} i={i} text={item} />
        ) : (
          <InactiveBtn
            key={i}
            i={i}
            text={item}
            handleActiveIndex={handleActiveIndex}
          />
        )
      )}
    </Flex>
  );
};

export default Sidebar;
