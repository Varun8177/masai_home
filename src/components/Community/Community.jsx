import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../CustomHeading";

const Community = () => {
  return (
    <Box minH={"50vh"} mt={"20px"} bgColor={"#f9f9f9"} pt={"10px"}>
      <Heading textAlign={"center"} fontSize={"35"} mt={"20px"}>
        Be A Part Of Our Thriving{" "}
      </Heading>
      <Heading textAlign={"center"} fontSize={"35"} mb={"40px"}>
        <CustomHeading underline={true} text={"Tech Community"} />
      </Heading>
      <Flex
        className="scroll-container slider"
        overflow={"auto"}
        gap={"10px"}
        mb={"40px"}
      >
        {new Array(10).fill(0).map((item, i) => (
          <Image
            key={i}
            src="https://www.masaischool.com/images/new-homepage/community/community8.webp"
            alt="community img"
            w={"350px"}
          />
        ))}
      </Flex>
      <Button
        textAlign="center"
        margin="auto"
        display="block"
        bgColor={"#ed0331"}
        color={"white"}
        _hover={{ bgColor: "#cc032a" }}
        fontWeight={400}
        px={"10"}
        h={"50px"}
        fontSize={"xl"}
      >
        JOIN OUR COMMUNITY
      </Button>
    </Box>
  );
};

export default Community;
