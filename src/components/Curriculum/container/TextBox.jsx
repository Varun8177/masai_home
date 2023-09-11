import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../../CustomHeading";

const TextBox = () => {
  return (
    <Box mt={"200px"} mb={"230px"}>
      <Heading fontSize={"2xl"}>
        100% Live <CustomHeading underline={false} text={"Distance"} /> Learning
      </Heading>
      <Text
        fontFamily={"Open Sans, sans-serif"}
        w={"400px"}
        fontWeight={400}
        mt={"30px"}
      >
        India’s Only Live Tech-Learning Course With Tier 1 Instructors. Get
        Real-Time Feedback, Interactive Sessions & A Personalised Learning
        Experience.
      </Text>
    </Box>
  );
};

export default TextBox;
