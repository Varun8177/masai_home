import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../../CustomHeading";

const TextBox = ({ heading, text, mobile }) => {
  const lastword = heading.split(" ");
  heading = lastword.filter((item, i) => i !== lastword.length - 1);
  return (
    <Box mt={mobile ? null : "200px"} mb={mobile ? null : "230px"}>
      <Heading fontSize={"2xl"}>
        {heading.join(" ")}{" "}
        <CustomHeading underline={false} text={lastword[lastword.length - 1]} />
      </Heading>
      <Text
        fontFamily={"Open Sans, sans-serif"}
        w={mobile ? "100%" : "400px"}
        fontWeight={400}
        mt={"30px"}
      >
        {text}
      </Text>
    </Box>
  );
};

export default TextBox;
