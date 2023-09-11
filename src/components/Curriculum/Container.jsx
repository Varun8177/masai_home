import { Box } from "@chakra-ui/react";
import React from "react";
import TextBox from "./container/TextBox";

const Container = () => {
  return (
    <Box w={"50%"} flexGrow={1} zIndex={10} blur={"2xl"}>
      {new Array(5).fill(0).map((item, i) => (
        <TextBox key={i} />
      ))}
    </Box>
  );
};

export default Container;
