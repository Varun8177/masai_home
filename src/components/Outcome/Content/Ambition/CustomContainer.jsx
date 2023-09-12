import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const CustomContainer = ({ data, title }) => {
  return (
    <Box
      bgColor={"#9ea0dd"}
      h={"100%"}
      minH={"50vh"}
      rounded={"lg"}
      w={"30%"}
      minW={"250px"}
      flexGrow={1}
    >
      <Heading
        color={"#FFDB66"}
        fontSize={"25px"}
        textAlign={"center"}
        my={"10px"}
      >
        {title}
      </Heading>
      <Flex flexWrap={"wrap"} justifyContent={"center"}>
        {data.map((item, i) => (
          <Flex key={`${title}-${i}`} align="center" justify="center" p={"5px"}>
            <Flex
              boxShadow={"0px 0px 13px #B6BEFC"}
              rounded={"20px"}
              overflow={"hidden"}
              w={"100px"}
              alignItems={"center"}
            >
              <Image src={item} w={"100px"} m={"auto"} />
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Text color={"white"} textAlign={"right"} mr={"10px"}>
        and many more...
      </Text>
    </Box>
  );
};

export default CustomContainer;
