import React from "react";
import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import CustomHeading from "../CustomHeading";
import Container from "./Container";
const Curriculum = () => {
  return (
    <Box w={"80%"} m={"auto"} pos={"relative"} py={"10px"}>
      <Heading textAlign={"center"} fontSize={"35"} mb={"20px"}>
        Best-In-Class <CustomHeading underline={true} text={"Curriculum"} /> &{" "}
        <CustomHeading underline={true} text={"Pedagogy"} />
      </Heading>

      <Flex
        h={"70vh"}
        overflowY={"auto"}
        flexWrap={"wrap"}
        className="scroll-container"
      >
        <Container />
        <Flex
          w={"fit-content"}
          alignItems={"center"}
          justifyContent={"center"}
          flexGrow={1}
          h={"70vh"}
          pos={"absolute"}
          right={0}
        >
          <Image
            src="https://www.masaischool.com/images/new-homepage/curriculum-style/course-image1.webp"
            objectFit={"contain"}
            rounded={"50px"}
            h={"auto"}
            w={"auto"}
          />
        </Flex>
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
        mt={"20px"}
      >
        GET YOUR DREAM JOB
      </Button>
    </Box>
  );
};

export default Curriculum;
