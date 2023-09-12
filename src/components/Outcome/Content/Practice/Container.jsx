import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Container = ({ data, title, Logo }) => {
  return (
    <Box minH={"50vh"} w={"48%"} flexGrow={1} minW={"300px"}>
      <Flex alignItems={"baseline"} mb={"10px"}>
        <Image src={Logo} w={"80px"} h={"80px"} objectFit={"contain"} />
        <Box fontWeight={900} alignSelf={"flex-start"}>
          <Text color={"#6e71cc"}>{title}</Text>
          <Text>Extensive Learning Course</Text>
        </Box>
        <Text
          bgColor={"#f6ede7"}
          color={"#cc926e"}
          h={"fit-content"}
          px={"1rem"}
          rounded={"lg"}
          fontWeight={"bold"}
        >
          FULL TIME
        </Text>
      </Flex>
      <Flex gap={"10px"} justifyContent={"space-evenly"} flexWrap={"wrap"}>
        {data.map((item, i) => (
          <Flex
            key={i}
            w={"47%"}
            minW={"150px"}
            h={"150px"}
            bgColor={"#1a9fbd"}
            rounded={"lg"}
            textAlign={"center"}
            alignItems={"center"}
            justify={"center"}
          >
            <Box p={"1rem"} gap={"10px"}>
              <Heading fontSize={"20px"} color={"#FFDB66"}>
                {item.highlight}
              </Heading>
              <Text color={"white"} fontSize={"15px"}>
                {item.text}
              </Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Container;
